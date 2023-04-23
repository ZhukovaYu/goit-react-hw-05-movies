import { useState } from "react";
import styles from '../SearchForm/SearchForm.module.css';

export const SearchForm = ( {onSubmit} ) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    e.target.reset();
    setValue('');
  };

  return (
   <form autoComplete="on" onSubmit={handleSubmit} >
     <input
      type="text"
      name="name"
      placeholder="Enter any film name"
      required
      onChange={e => setValue(e.target.value)}
      className={styles.input}
    />
    <button type="submit" className={styles.button}>
     Search
    </button>
  </form>
  );
}