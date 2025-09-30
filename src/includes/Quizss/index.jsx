import React, { useContext, useState } from 'react'
import { StepControl } from './StepControl';
import './styles.css'
import { QuizContext } from './Context';

export const Quiz = () => {
  const [openModal, setOpenModal] = useState(false);
  const [quizData, setQuizData] = useState({
    id: '',
    name: '',
    author: '',
    question: {
      id: '',
      questionTitle: '',
      option: [''],
      answer: '',
      type: '',
    }
  })


  return (
    <React.Fragment>
      <button
        onClick={() => setOpenModal(true)}
      >add new</button>
      <QuizContext.Provider value={{ quizData, setQuizData }}>
        {openModal && <StepControl />

        }
      </QuizContext.Provider>
    </React.Fragment>
  )
}

export const useQuizContext = () => useContext(QuizContext);