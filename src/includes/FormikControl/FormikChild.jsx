import React from 'react'

export const FormikChild = () => {
    
  return (
   <>
    <input
      type="email"
        name="email"
        placeholder="Enter your email"
        required
    />
    <input

        type="password"
        name="password"
        placeholder="Enter your password"
        required
    />
    <button type="submit">Submit</button>
   
   </>
  )
}
