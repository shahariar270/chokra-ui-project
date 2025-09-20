import React, { useState } from 'react'
import { StepControl } from './StepControl';
import './styles.css'

export const Quiz = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <React.Fragment>
      <button
        onClick={() => setOpenModal(true)}
      >add new</button>

      { openModal && <StepControl/>

      }
    </React.Fragment>
  )
}
