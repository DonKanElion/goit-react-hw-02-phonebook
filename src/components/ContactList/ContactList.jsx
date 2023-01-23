import classNames from 'classnames';
import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <div className={classNames(s.box, s.contactForm)}>
      <h3 className={s.title_comp}>Contacts</h3>

      <ul className={s.list}>
        <ContactListItem contacts={contacts}></ContactListItem>
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
}

export default ContactList;