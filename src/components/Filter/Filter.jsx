import classNames from 'classnames';
import s from '../ContactList/ContactList.module.css';

const Filter = ({ stateName, onChange }) => {
  return (
    <div className={classNames(s.box, s.contactList)}>
      <label className={s.text}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={stateName}
          onChange={onChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default Filter;
