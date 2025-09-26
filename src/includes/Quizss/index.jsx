import React, { useState } from 'react'
import { StepControl } from './StepControl';
import './styles.css'
import { QuizContext } from './Context';

export const Quiz = () => {
  const [openModal, setOpenModal] = useState(false);

let  quizData = [
    {
      title: "what is javascript",
      answer: ['PL', 'markup', 'all'],
      carectAnswer: 'PL'
    }
  ]

  return (
    <React.Fragment>
      <button
        onClick={() => setOpenModal(true)}
      >add new</button>
      <QuizContext.Provider value={quizData}>
        {openModal && <StepControl />

        }
      </QuizContext.Provider>
    </React.Fragment>
  )
}
