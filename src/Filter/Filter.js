import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChangle }) => {
  return (
    <label className={styles.label}>
      {' '}
      Find contacts by name
      <input
        className={styles.input}
        value={value}
        type="text"
        onChange={onChangle}
      />
    </label>
  );
};

export default Filter;