import { Field, useFormikContext } from 'formik'
import React from 'react'

export const StepTwo = () => {
  const { values, setFieldValue } = useFormikContext()
  const addOption = () => {
    setFieldValue('question.option', [...(values.question.option || []), '']);
  };

  console.log(values);
  return (
    <div>
      <Field
        name="question.questionTitle"
        placeholder="Enter question title"
        as="input" // Explicitly input field
      />

      {values.question.option?.map((item, index) => (
        <div key={index}>
          <Field
            name={`question.option.${index}`}
            placeholder={`Item ${index + 1}`}
            as="input"
          />
          {/* Optional: Remove button যোগ করুন যদি চান */}
          {/* <button type="button" onClick={() => removeOption(index)}>Remove</button> */}
        </div>
      )) || <p>No options yet. Add one!</p> /* যদি option undefined হয় */}
      <button
        type="button"
        onClick={addOption}
      >
        + Add Item
      </button>
    </div>
  )
}
