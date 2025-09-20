import React, { useState } from 'react'
import { StepOne } from './Staps/StepOne';
import { StepThree } from './Staps/StepThree';
import { StepTwo } from './Staps/StepTwo';
import { Form, Formik } from 'formik';

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
  const getInitialValues = () => {
    return {
      id: '',
      name: '',
      question: [
        {
          id: '',
          questionTitle: '',
          answer: '',
          type: '',
        }
      ]
    }
  }

  return (
    <div className="form-container">
      <h1 className="form-title">Step {step}</h1>

      <Formik
        initialValues={getInitialValues()}
        onSubmit={(values) => {
          console.log("✅ Final Submit:", values);
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
