import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, fetchUsers } from '@reduer/thunk/index'

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
    <div>
      <button onClick={handleAddUser}>
        Add User
      </button>
    </div>
  )
}
