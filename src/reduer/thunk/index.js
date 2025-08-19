import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { VscGlobe } from "react-icons/vsc"

const initialState = {
    users: []
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, thunkApi) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            return await response.json()

        } catch (error) {
            return thunkApi.rejectWithValue(error)

        }
    }
)

export const addUser = createAsyncThunk(
    "users/addUser",
    async (fromData, thunkApi) => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(fromData),

            })
            const data = await res.json();
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

const usersSlices = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })

    }
})

export default usersSlices.reducer