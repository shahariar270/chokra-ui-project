import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

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

const usersSlices = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })

    }
})

export default usersSlices.reducer