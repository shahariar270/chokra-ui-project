import React, { useState } from 'react'
import { StepOne } from './Staps/StepOne';
import { StepThree } from './Staps/StepThree';
import { StepTwo } from './Staps/StepTwo';
import { Form, Formik } from 'formik';
import { useQuizContext } from '.';

export const StepControl = () => {
  const [step, setStep] = useState(1);

  const prev = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }
  const next = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const { setQuizData, quizData } = useQuizContext();

  return (
    <div className="form-container">
      <h1 className="form-title">
        <span className={step === 1 ? "active" : ""}>1</span>
        <span className={step === 2 ? "active" : ""}>2</span>
        <span className={step === 3 ? "active" : ""}>3</span>
      </h1>

      <Formik
        initialValues={quizData}
        onSubmit={(values) => {
          setQuizData(values)
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree />}

            <div className="button-group">
              {step > 1 && (
                <button type="button" className="btn prev" onClick={prev}>
                  Prev
                </button>
              )}
              {step < 3 ? (
                <button type="button" className="btn next" onClick={next}>
                  Next
                </button>
              ) : (
                <button type="submit" className="btn submit">
                  Submit
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
