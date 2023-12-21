import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import toDoReducer from './toDo'

export default configureStore({
    reducer: { counter: counterReducer, toDo: toDoReducer }
})
