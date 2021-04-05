import React, { Component } from "react";
import s from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import phoneBookActions from "../../redux/phonebook/phonebook-actions";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  hendleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  hendleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.hendleSubmit}>
        <label>
          Имя
          <input
            className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.hendleChange}
            required
          ></input>
        </label>
        <label>
          Телефон
          <input
            className={s.input}
            type="tel"
            pattern="^[ 0-9]+$"
            name="number"
            value={this.state.number}
            onChange={this.hendleChange}
            required
          ></input>
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addContact: (name, phone) =>
    dispatch(phoneBookActions.addContact(name, phone)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
