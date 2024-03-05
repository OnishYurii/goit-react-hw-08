import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';
import { Button } from '@mui/material';
import toast from 'react-hot-toast';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        console.log('Log In');
      })
      .catch(() => {
        toast('User Not Found or Wrong Password', {
          icon: '🥵',
          style: {
            backgroundColor: '#e91111',
            borderRadius: '20px',
            color: '#fff',
          },
        });
      });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="text" name="email" id={emailFieldId} className={css.input} />
          <ErrorMessage name="email" component="span" className={css.error} />

          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            type="text"
            name="password"
            id={passwordFieldId}
            autoComplete="off"
            className={css.input}
          />
          <ErrorMessage name="password" component="span" className={css.error} />

          <Button
            variant="contained"
            color="success"
            sx={{ maxWidth: '150px', margin: '0 auto' }}
            type="submit"
          >
            Log In
          </Button>
        </Form>
      </Formik>
    </>
  );
};
