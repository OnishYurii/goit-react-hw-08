import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const Contact = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.contactForm}>
      <h2 className={css.text}>
        <IoPerson />
        {name}
      </h2>
      <p className={css.text}>
        <FaPhone />
        {number}
      </p>
      <button className={css.deleteBtn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};
