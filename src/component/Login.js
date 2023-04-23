// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; 

const Basic = () => (
  <div className='formik container  w-2/3 mx-auto p-8  rounded-2xl bg-yellow-400'>
    <h2 className='font-bold text-3xl text-center'>login form </h2>
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
          <h4>email </h4>
          <Field type="email" name="email" className='rounded-full w-full h-8  p-4 outline-none  '/>

          <ErrorMessage name="email" component="div"  className='input text-center'/>
          <h4>password </h4>
          <Field type="password" name="password"  className='rounded-full  w-full h-8  p-4 outline-none  '/>
          <ErrorMessage name="password" component="div"  className='input' />
          <button type="submit" disabled={isSubmitting}  className='rounded-full    px-10 py-2 my-4 outline-none  bg-black text-yellow-400'>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;