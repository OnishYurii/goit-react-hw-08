import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';

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
    dispatch(login(values));
    actions.resetForm();
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="text" name="email" id={emailFieldId} />
          <ErrorMessage name="email" component="span" />

          <label htmlFor={passwordFieldId}>Password</label>
          <Field type="text" name="password" id={passwordFieldId} />
          <ErrorMessage name="password" component="span" />

          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
};
