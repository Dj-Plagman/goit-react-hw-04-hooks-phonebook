import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p className={styles.contact}>{name}</p>
          <p className={styles.contact}>{number}</p>
          <button className={styles.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
export default ContactsList;
