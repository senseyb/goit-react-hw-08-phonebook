import React from "react";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className="container">
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.titleContact}>Contacts</h2>
      <div className={styles.block}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
