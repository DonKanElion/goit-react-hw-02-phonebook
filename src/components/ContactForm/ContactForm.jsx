import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

// import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit(evt) {
    evt.preventDefault();

    const { addContact } = this.props;
    const { name, number  } = this.state;

    // this.props.addContact(this.state.name, this.state.number);
    addContact(name, number)

    this.reset();
  }


  reset = () => {
    // this.setState({ ...INITIAL_STATE });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {

const { name, number  } = this.state;

// console.log(this.props.addContact)



    return (
      <div className={classNames(s.box, s.contactForm)}>
        <form onSubmit={this.handleSubmit}>
          <label className={s.title_comp}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Pavlo Tychina"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className={s.title_comp}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              placeholder="+ 380 66 055 80 41"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </form>

        <button
          type="submit"
          name="addContact"
          onClick={this.handleSubmit}
          className={s.btn}
        >
          Add contact
        </button>
      </div>
    );
  }
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   stateName: PropTypes.string,
// }

export default ContactForm;
