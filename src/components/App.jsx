import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '443-89-12' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  hundleSubmit(evt) {
    evt.preventDefault();
    this.addContact(this.state);
    this.reset();
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: 'id-' + nanoid(2),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  findContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  reset = () => {
    // this.setState({ ...INITIAL_STATE });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    // const { contacts } = this.state;

    return (
      <div
        style={{
          display: 'block',
          textAlign: 'center',
          marginBottom: '20px',
          color: '#010101',
        }}
        className="section"
      >
        <h2>React 🛠 homework template 🙀</h2>

        <h1 className="hero_title">Phonebook</h1>

        <ContactForm
          onChange={this.handleChange}
          onSubmit={this.hundleSubmit.bind(this)}
        ></ContactForm>
        {/* <h2 className='title'>Contacts</h2> */}

        <Filter
          stateName={this.state.filter}
          onChange={this.handleChange}
        ></Filter>

        <ContactList contacts={this.findContact()}>
          stateName={this.state.name}
        </ContactList>
        
      </div>
    );
  }
}