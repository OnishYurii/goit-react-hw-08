import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectContactsItem,
  selectError,
  selectLoadingStatus,
} from '../../redux/contacts/selector';
import { LineWave } from 'react-loader-spinner';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { ContactList } from '../../components/ContactList/ContactList';
import DocumentTitle from '../../components/DocumentTitle';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContactsItem);
  const loading = useSelector(selectLoadingStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Contacts List</h1>
      {loading && !error && (
        <div className="loader-container">
          <LineWave
            visible={true}
            height="100"
            width="100"
            color="blue"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        </div>
      )}
      {error && <p>{error}</p>}
      <ContactForm />
      <SearchBox />
      {items.length > 0 && <ContactList />}
    </>
  );
};

export default ContactsPage;
