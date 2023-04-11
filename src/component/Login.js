// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div className='formik'>
    <h2>login form </h2>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h4>email : </h4>
          <Field type="email" name="email" />

          <ErrorMessage name="email" component="div"  className='input'/>
          <h4>password : </h4>
          <Field type="password" name="password"/>
          <ErrorMessage name="password" component="div"  className='input' />
          <button type="submit" disabled={isSubmitting} >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;