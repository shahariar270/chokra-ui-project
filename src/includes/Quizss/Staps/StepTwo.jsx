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
        as="input"
      />

      {values.question.option?.map((item, index) => (
        <div key={index}>
          <Field
            type="radio"
            name="question.answer"
            value={item}
            as="input"
            style={{ marginRight: '10px' }}
          />
          <Field
            name={`question.option.${index}`}
            placeholder={`Item ${index + 1}`}
            as="input"
          />
        </div>
      )) || <p>No options yet. Add one!</p>}
      <button
        type="button"
        onClick={addOption}
      >
        + Add Item
      </button>
    </div>
  )
}
