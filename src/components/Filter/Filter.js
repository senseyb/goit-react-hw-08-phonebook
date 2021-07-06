import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import { filterChange } from "../../redux/contacts/contacts.actions";
import { connect } from "react-redux";
import { contactsFilterSelector } from "../../redux/contacts/contacts.selector";

const Filter = ({ filter, handleChange }) => {
  const onChange = (evt) => {
    handleChange(evt.target.value);
  };
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>Find contacts by name</h2>
      <input
        className={styles.input}
        id="filter"
        name="filter"
        type="text"
        onChange={onChange}
        value={filter}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    filter: contactsFilterSelector(state),
  };
};

const mapDispatchToProps = {
  handleChange: filterChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
