import { useFormikContext } from 'formik';
import React from 'react';

export const FormikChild = () => {
  const { values, handleChange, handleBlur, handleSubmit } = useFormikContext();
  // console.log(values);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />

        <button type='submit'>Submit</button>

      </form>
    </>
  );
};
