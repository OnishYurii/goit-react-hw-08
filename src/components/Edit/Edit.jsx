import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import css from './Edit.module.css';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '@mui/material';
import { Close, Done } from '@mui/icons-material';

export const Editt = ({ name: initialName, number: initialNumber, id, state }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(initialName);
  const [number, setNumber] = useState(initialNumber);

  const handleCLick = () => {
    const updatedContact = {
      id: id,
      name: name,
      number: number,
    };
    dispatch(updateContact(updatedContact))
      .unwrap()
      .then(() => {
        toast('Contact Updated', {
          icon: '🙃',
          style: {
            backgroundColor: 'green',
            borderRadius: '20px',
            color: '#fff',
          },
        });
      })
      .catch(() => {
        toast('Fail', {
          icon: '🤪',
          style: {
            backgroundColor: '#e91111',
            borderRadius: '20px',
            color: '#fff',
          },
        });
      });
    state(-1);
    console.log(updatedContact);
  };

  return (
    <div className={css.contactForm}>
      <div className={css.wrap}>
        <h2 className={css.text}>
          <IoPerson />
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            className={css.input}
          />
        </h2>
        <div className={css.text}>
          <FaPhone />
          <input
            type="text"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            className={css.input}
          />
        </div>
      </div>
      <ul className={css.btnList}>
        <li>
          <Button
            type="submit"
            onClick={handleCLick}
            variant="contained"
            size="small"
            color="success"
            endIcon={<Done />}
          >
            Save
          </Button>
        </li>
        <li>
          <Button
            onClick={() => state(-1)}
            endIcon={<Close />}
            variant="contained"
            size="small"
            color="error"
            sx={{ alignItems: 'center' }}
          >
            Cancel
          </Button>
        </li>
      </ul>
    </div>
  );
};
