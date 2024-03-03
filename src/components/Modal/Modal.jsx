import Modal from 'react-modal';
import css from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

Modal.setAppElement('#root');

export const ModalDelete = ({ isOpen, onClose, id }) => {
  const dispatch = useDispatch();
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
            <button onClick={(() => onClose(), () => dispatch(deleteContact(id)))}>Yes</button>
          </li>
          <li>
            <button onClick={() => onClose()}>No</button>
          </li>
        </ul>
      </div>
    </Modal>
  );
};
