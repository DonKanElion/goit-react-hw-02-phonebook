// import classNames from "classnames";
import s from '../ContactForm/ContactForm.module.css';

const Filter = ({ stateName, onChange }) => {
return (
    <>
    <label className={s.title_comp}>
    Find contacts by name 
    <input type="text" name="filter" value={stateName} onChange={onChange} className={s.input}/>
        
    </label>
    </>
)
}

export default Filter;