import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./TodoSlice/TodoSlice";
import CrudReducer from './Crud/index'
import usersReducer from './thunk/index'
import logger from "redux-logger";


export default configureStore({
  reducer: {
    todo: todoReducer,
    crud: CrudReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})