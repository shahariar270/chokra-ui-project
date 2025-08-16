import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./TodoSlice/TodoSlice";
import { CrudReducer } from "./Crud";
import logger from "redux-logger";


export default configureStore({
  reducer: {
    todo: todoReducer,
    crud: CrudReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})