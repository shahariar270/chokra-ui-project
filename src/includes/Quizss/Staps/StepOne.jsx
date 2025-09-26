import React, { useContext } from 'react'
import { QuizContext } from '../Context'

export const StepOne = () => {
  let quiz = useContext(QuizContext);

  console.log(quiz);
  return (
    <div>StepOne</div>
  )
}
