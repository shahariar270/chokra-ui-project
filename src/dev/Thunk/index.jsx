import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, fetchUsers } from '@reduer/thunk/index'
import { Formik } from 'formik';

export const Thunk = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());

  }, [dispatch])

  const handleAddUser = () => {
    dispatch(addUser({ name: "shahariar" }));
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: '',
          username: '',
          email: ''
        }}
        onSubmit={(values) => {
          dispatch(addUser(values))
        }}
      >
        {
          ({
            values,
            // onSubmit,
            handleChange,
            handleSubmit
          }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="">Name
                <input type="text" name='name' value={values.name}  onChange={handleChange} />
              </label>
              <label htmlFor="">Name
                <input type="email" name='email' onChange={handleChange} value={values.email} />
              </label>
              <label htmlFor="">Name
                <input type="text" name='username' value={values.username}  onChange={handleChange} />
              </label>
              <button type='submit' >add</button>
            </form>
          )
        }
      </Formik>
    </React.Fragment>
  )
}
