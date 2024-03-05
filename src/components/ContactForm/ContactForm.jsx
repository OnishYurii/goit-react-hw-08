import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Button } from '@mui/material';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required('Required'),
  number: Yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast('Contact Added', {
          icon: '😊',
          style: {
            backgroundColor: 'green',
            borderRadius: '20px',
            color: '#fff',
          },
        });
      })
      .catch(() => {
        toast('Fail', {
          icon: '🤪',
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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label htmlFor={nameFieldId}>Name</label>
        <Field className={css.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field className={css.input} type="text" name="number" id={numberFieldId} />
        <ErrorMessage className={css.error} name="number" component="span" />

        <Button
          variant="contained"
          color="success"
          sx={{ maxWidth: '150px', margin: '0 auto' }}
          type="submit"
        >
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};
