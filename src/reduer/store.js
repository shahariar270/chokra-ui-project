import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./TodoSlice/TodoSlice";
import CrudReducer from './Crud/index'
import usersReducer from './thunk/index'
import logger from "redux-logger";
import { userSlice } from "./user/userSilice";


export default configureStore({
  reducer: {
    todo: todoReducer,
    crud: CrudReducer,
    users: usersReducer,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})