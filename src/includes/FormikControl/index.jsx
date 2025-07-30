import { Formik } from 'formik'
import React from 'react'
import { FormikChild } from './FormikChild';

export const FormikControl = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        console.log('Submitted Values:', values);
      }}
    >
      {({  }) => (
        <>
          <FormikChild />
        </>
      )}
    </Formik>
  );
};
