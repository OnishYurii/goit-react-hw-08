// import { ContactForm } from './ContactForm/ContactForm';
// import { SearchBox } from './SearchBox/SearchBox';
// import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
// import { selectContactsItem, selectLoadingStatus, selectError } from '../redux/selector';
import { useEffect } from 'react';
// import { fetchContacts } from '../redux/operations';
// import { LineWave } from 'react-loader-spinner';
import { NavBar } from './NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // const items = useSelector(selectContactsItem);
  // const loading = useSelector(selectLoadingStatus);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Phonebook</h1>
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
      {items.length > 0 && <ContactList />} */}
    </div>
  );
};

export default App;
