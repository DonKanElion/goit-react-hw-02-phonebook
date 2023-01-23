import PropTypes from 'prop-types';
// import classNames from "classnames";
import s from './ContactList.module.css';

const ContactListItem = ({ contacts }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li className={s.item} key={id}>
        👉 {name}: {number}
      </li>
    );
  });
};

ContactListItem.propTypes = { 
  contacts: PropTypes.array.isRequired,
}

export default ContactListItem;
