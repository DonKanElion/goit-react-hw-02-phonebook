import { Component } from 'react';
import { nanoid } from 'nanoid';


import ContactForm from "./ContactForm";
import ContactList from './ContactList';
import Filter from './Filter';


const INITIAL_STATE = {
  name: "",
  number: "",
};

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    // filter: '',
    name: '',
    number: ''
  }

  handleChange = evt => {
    const { name, value, id } = evt.target
    console.log('Test Change: ', name, value, id)
    this.setState({ 
      [name]: value
    });
  };

  hundleSubmit(evt){
    evt.preventDefault();
    const id = nanoid();
    const { name, number } = this.state;
    console.log(`Test Submit: Id: ${id}, Name: ${name}, Number ${number}`);
    // this.setState({ 
    //   contacts: {
    //     id: 
    //   }
    // });
    this.reset();
  }

  reset = () => {
    this.setState({ ...INITIAL_STATE})
  }
  

  render () {
    const { name, contacts } = this.state;

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

      {/* <div> */}

      <h1>Phonebook</h1>
      {/* // <ContactForm ... /> */}

      <ContactForm onChange={this.handleChange} onSubmit={this.hundleSubmit.bind(this)}> </ContactForm>
      <ContactList contacts={contacts}> stateName={this.state.name}</ContactList>
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
