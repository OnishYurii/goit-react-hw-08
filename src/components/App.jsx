import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';
import { RestrcitedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrcitedRoute redirectTo="/contacts" component={<RegisterPage />} />}
          />
          <Route
            path="/login"
            element={<RestrcitedRoute redirectTo="/contacts" component={<LoginPage />} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
