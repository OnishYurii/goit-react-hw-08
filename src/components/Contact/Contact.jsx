import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material';
import { ModalDelete } from '../Modal/Modal';
import { useState } from 'react';
import { Editt } from '../Edit/Edit';
import { Button } from '@mui/material';

export const Contact = ({ item: { name, number, id } }) => {
  const [modalState, setModalState] = useState(false);
  const [updateState, setUpdateState] = useState(-1);
  return updateState === id ? (
    <Editt name={name} number={number} id={id} state={setUpdateState} />
  ) : (
    <div className={css.contactForm}>
      <div className={css.wrap}>
        <h2 className={css.text}>
          <IoPerson />
          {name}
        </h2>
        <p className={css.text}>
          <FaPhone />
          {number}
        </p>
      </div>
      <ul className={css.btnList}>
        <li>
          <Button
            onClick={() => setUpdateState(id)}
            variant="contained"
            size="small"
            color="warning"
            startIcon={<Edit />}
          >
            Edit
          </Button>
        </li>
        <li>
          <Button
            onClick={() => setModalState(true)}
            endIcon={<DeleteIcon />}
            variant="contained"
            size="small"
            color="error"
            sx={{ alignItems: 'center' }}
          >
            Delete
          </Button>
        </li>
      </ul>

      <ModalDelete isOpen={modalState} id={id} onClose={() => setModalState(false)} />
    </div>
  );
};
