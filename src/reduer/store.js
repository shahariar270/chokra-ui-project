import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./TodoSlice/TodoSlice";
import { CrudReducer } from "./Crud";


export default configureStore({
  reducer:{
    todo: todoReducer,
    crud: CrudReducer
  }
})