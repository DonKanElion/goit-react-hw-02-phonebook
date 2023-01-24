import PropTypes from 'prop-types';
// import classNames from "classnames";
import s from './ContactList.module.css';

const ContactListItem = ({ name, number }) => {
  return (
    <li className={s.item}>
      👉 {name}: {number}
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem