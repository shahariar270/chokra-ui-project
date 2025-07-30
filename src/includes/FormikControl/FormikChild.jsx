import React from 'react';
import Select from 'react-select';
import { useFormikContext } from 'formik';

export const FormikChild = () => {
  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldTouched,
    handleSubmit,
  } = useFormikContext();

  const selectOptions = [
    { value: 'option1', label: 'Option One' },
    { value: 'option2', label: 'Option Two' },
    { value: 'option3', label: 'Option Three' },
  ];

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

        <Select
          name="selectOption"
          options={selectOptions}
          value={selectOptions.find(option => option.value === values.selectOption)}
          onChange={(selectedOption) => setFieldValue('selectOption', selectedOption?.value)}
          onBlur={() => setFieldTouched('selectOption', true)}
          placeholder="Select an option"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
