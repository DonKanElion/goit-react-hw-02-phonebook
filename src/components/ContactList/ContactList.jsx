import ContactListItem from './ContactListItem';

import classNames from 'classnames';
import s from './ContactList.module.css';

const ContactList = ({ contacts, filter }) => {
  return (
    <div className={classNames(s.box, s.contactForm)}>
      <h3 className={s.title_comp}>Contacts</h3>

      <ul className={s.list}>
        <ContactListItem contacts={contacts}></ContactListItem>
      </ul>
    </div>
  );
};

export default ContactList;