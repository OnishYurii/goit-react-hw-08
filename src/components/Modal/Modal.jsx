import Modal from 'react-modal';
import css from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import { Button } from '@mui/material';

Modal.setAppElement('#root');

export const ModalDelete = ({ isOpen, onClose, id }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast('Contact Deleted', {
          icon: '👽',
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
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      className={css.modal}
      overlayClassName={css.backdrop}
      onRequestClose={() => onClose()}
    >
      <div className={css.container}>
        <p>Are you sure?</p>
        <ul className={css.list}>
          <li>
            <Button
              onClick={() => handleDelete(id)}
              variant="contained"
              size="small"
              color="success"
            >
              Yes
            </Button>
          </li>
          <li>
            <Button onClick={() => onClose()} variant="contained" size="small" color="error">
              No
            </Button>
          </li>
        </ul>
      </div>
    </Modal>
  );
};
