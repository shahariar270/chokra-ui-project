import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    crud: []
};


const CrudSlice = createSlice({
    name: 'crud',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.crud = [...state.crud, action.payload]
        },
        deleteData: (state, action) => {
            state.crud = state.crud.filter(item => item.id !== action.payload);
        },
        editData: (state, action) => {
            const { id, value } = action.payload;
            const item = state.crud.find((item) => item.id === id);
            if (item) item.value = value;
        }
    }

})

export const { addData, editData, deleteData } = CrudSlice.actions;
export default CrudSlice.reducer;