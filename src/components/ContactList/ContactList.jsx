import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selector';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact item={contact} />
        </li>
      ))}
    </ul>
  );
};
