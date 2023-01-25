import React, { Component } from 'react';
import { nanoid } from 'nanoid';

// import ContactForm from './ContactForm';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '443-89-12' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const checkContact = contacts.some(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (!checkContact) {
      const newContact = {
        id: 'id-' + nanoid(2),
        name,
        number,
      };

      return this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }

    alert(`${name} is already in contact`);

    //  if(name === '' || "" || undefined){
    //   return  alert(`Fill in the field`);
    //  }
  };

  handleClick = evt => {
    const { id } = evt.target;

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  // deleteContact = id => {
  //   // this.setState(prevState => ({
  //   //   contacts: []
  //   // }))
  // };

  findContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts } = this.state;

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

        <ContactForm addContact={this.addContact}></ContactForm>

        {/* <h2 className='title'>Contacts</h2> */}

        {contacts.length !== 0 ? (
          <>
            <Filter
              stateName={this.state.filter}
              onChange={this.handleChange}
            ></Filter>
            <ContactList
              contacts={this.findContact()}
              onClick={this.handleClick}
            ></ContactList>
          </>
        ) : (
          <p>Looks like you don`t have any contacts. Please add new contact.</p>
        )}
      </div>
    );
  }
}
