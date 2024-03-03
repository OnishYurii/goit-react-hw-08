import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';

import { ModalDelete } from '../Modal/Modal';
import { useState } from 'react';

export const Contact = ({ item: { name, number, id } }) => {
  const [modalState, setModalState] = useState(false);
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
      <button className={css.deleteBtn} onClick={() => setModalState(true)}>
        Delete
      </button>
      <ModalDelete isOpen={modalState} id={id} onClose={() => setModalState(false)} />
    </div>
  );
};
