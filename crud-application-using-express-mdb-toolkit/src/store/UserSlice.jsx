
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const STATUSES = {
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error'
}


// export const fetchUsers = createAsyncThunk('users/fetch', async () => {
//     await axios.get('http://localhost:5000/api/user')
//         .then(res => {
//             console.log(res.data.users);
//             return res.data.users
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })


export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const usersData = await fetch('http://localhost:5000/api/user')
    const users = await usersData.json()
    return users
})


export const postUser = createAsyncThunk('users/post', async (postData) => {
    await axios.post('http://localhost:5000/api/user', postData)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
})

export const updateUser = createAsyncThunk('users/put', async (updateData) => {
    await axios.put('http://localhost:5000/api/user', updateData)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
})


export const deleteUser = createAsyncThunk('users/delete', async (deleteData) => {
    const id = deleteData._id
    await axios.delete(`http://localhost:5000/api/user/${id}`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
})


const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        status: STATUSES
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status = STATUSES.LOADING
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = STATUSES.IDLE
            state.data = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.status = STATUSES.ERROR
        })
    },
})


const { reducer } = userSlice
export default reducer
