import { configureStore } from "@reduxjs/toolkit";
import reducer from './UserSlice'

const store = configureStore({
    reducer: {
        user: reducer
    }
})

export { store }
