import classNames from "classnames";
import s from './ContactForm.module.css';

const ContactForm = () => {

  return (
    <div className={classNames(s.box, s.contactForm)}>
      <h3 className={s.title_comp}>Name</h3>
      <label htmlFor="">
        <input
        className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        {/* <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /> */}

      </label>

      <button className={s.btn} type="button" name="addContact">Add contact</button>
    </div>
  );
};

export default ContactForm;
