import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../reduer/thunk/index'

export const Thunk = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)


    useEffect(()=>{
        dispatch(fetchUsers());

    },[dispatch])
  return (
    <div></div>
  )
}
