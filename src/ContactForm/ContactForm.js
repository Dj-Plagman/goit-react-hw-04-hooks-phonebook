import React, {useState} from 'react';
import styles from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            type="text"
            value={number}
            name="number"
            onChange={handleChange}
            placeholder=""
            className={styles.input}
            required
          />
        </label>
        <input type="submit" value="Add contact" className={styles.button} />
      </form>
    );
}

export default ContactForm;