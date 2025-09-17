import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { VscGlobe } from "react-icons/vsc"
import { makeRequest, makeRequest2 } from "../../Utils/Helper"

const initialState = {
    users: []
}
const url = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, thunkApi) => {
        try {
            const data =await makeRequest2(url);
            return data.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error)

        }
    }
)

export const addUser = createAsyncThunk(
    "users/addUser",
    async (fromData, thunkApi) => {
        try {
            const data = await makeRequest(url, fromData, 'POST');
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error)
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