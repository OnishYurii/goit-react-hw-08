import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.div}>
      <DocumentTitle>Home</DocumentTitle>
      <h1>Welcome to Phonebook 🤩</h1>
    </div>
  );
};

export default HomePage;
