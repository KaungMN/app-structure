import { createSlice } from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState: { list: [] },
    reducers: {
        addToDo: (state, action) => {
            state.list.push(action.payload)
        }
    }
})

export const { addToDo } = toDoSlice.actions
export default toDoSlice.reducer
