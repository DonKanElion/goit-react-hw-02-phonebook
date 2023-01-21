import classNames from 'classnames';

import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit, onChange, stateName }) => {
  return (
    <div className={classNames(s.box, s.contactForm)}>
      <form onSubmit={onSubmit}>
        <label className={s.title_comp} >
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={stateName}
            onChange={onChange}
            placeholder="Pavlo Tychina"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={s.title_comp}  >
        Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={stateName}
            onChange={onChange}
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
        onClick={onSubmit}
        className={s.btn}
      >
        Add contact
      </button>
    </div>
  );
};

export default ContactForm;
