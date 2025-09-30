import React, { useContext } from 'react'
import { QuizContext } from '../Context'
import { Field } from 'formik';

export const StepOne = () => {
  let quiz = useContext(QuizContext);

  return (
    <>
      <Field
        name='name'
        type={'text'}
        placeholder={'added you Question title'}
      />
    </>
  )
}
