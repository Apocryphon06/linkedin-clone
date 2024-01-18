'use client'
import { configureStore } from '@reduxjs/toolkit'

// Import your reducers
import counterReducer from '../slices/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add more reducers as needed
  },
})
export default store