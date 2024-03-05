import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';
import { Button } from '@mui/material';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string()
    .min(7, 'Too Short!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'The password must contain at least one capital letter, one uppercase letter and one number'
    )
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} className={css.input} />
        <ErrorMessage name="name" component="span" className={css.error} />

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
          Register
        </Button>
      </Form>
    </Formik>
  );
};
