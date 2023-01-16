import { Component } from 'react';

import ContactForm from "./ContactForm";
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    // filter: '',
    name: '',
    // number: ''
  }

  render () {
    const { name, contacts } = this.state;

    return (
      <div
        style={{
          display: 'block',
          textAlign: 'center',
          marginTop: '40px',
          marginBottom: '20px',
          color: '#010101',
        }}

        className="section"
      >
         <h2>React 🛠 homework template 🙀</h2>

      {/* <div> */}

      <h1>Phonebook</h1>
      {/* // <ContactForm ... /> */}

      <ContactForm> </ContactForm>
      <ContactList contacts={contacts}></ContactList>
      <Filter></Filter>

          {/* 
          // <h2>Contacts</h2>
          // <Filter ... />
          // <ContactList ... />
          // </div> */}

      </div>
    );

  }

};
