import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';

import { ModalDelete } from '../Modal/Modal';
import { useState } from 'react';
import { Edit } from '../Edit/Edit';

export const Contact = ({ item: { name, number, id } }) => {
  const [modalState, setModalState] = useState(false);
  const [updateState, setUpdateState] = useState(-1);
  return updateState === id ? (
    <Edit name={name} number={number} id={id} state={setUpdateState} />
  ) : (
    <div className={css.contactForm}>
      <h2 className={css.text}>
        <IoPerson />
        {name}
      </h2>
      <p className={css.text}>
        <FaPhone />
        {number}
      </p>
      <ul className={css.btnList}>
        <li>
          <button className={css.btn} onClick={() => setUpdateState(id)}>
            Edit
          </button>
        </li>
        <li>
          <button className={css.btn} onClick={() => setModalState(true)}>
            Delete
          </button>
        </li>
      </ul>
      <ModalDelete isOpen={modalState} id={id} onClose={() => setModalState(false)} />
    </div>
  );
};
