import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <p className={css.text}>Welcome, {user.name}</p>
      <Button onClick={() => dispatch(logOut())} color="warning" variant="outlined">
        Log Out
      </Button>
    </div>
  );
};
