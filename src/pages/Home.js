import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counter'
import { addToDo } from '../redux/toDo'

const firstName = 'Kaung'
const lastName = 'Myat'
// const fullName = firstName + ' ' + lastName;
const fullName = `${firstName} ${lastName} Noe`

function getTitle(title) {
    return title
}

function Home() {
    const [yoeYoeCount, setYoeYoeCount] = useState(0)
    const { count } = useSelector((state) => state.counter)
    const { toDoList } = useSelector((state) => state.toDo.list)
    const dispatch = useDispatch()
    return (
        <>
            <div>
                Hello {getTitle('React Revision')}, {fullName}
            </div>
            <div>
                <h3>Without Redux</h3>
                <p>{yoeYoeCount} Yoe Yoe Counts</p>
                <label htmlFor="search">Search: </label>
                <input type="text" id="search" /> <br />
                <button onClick={() => setYoeYoeCount((yoeYoeCount) => yoeYoeCount + 1)}>+</button> <br />
                <button onClick={() => setYoeYoeCount((yoeYoeCount) => yoeYoeCount - 1)}>-</button>
            </div>
            <div>
                <h3>With Redux</h3>
                <p>This is Redux {count} counts.</p>
                <button onClick={() => dispatch(incrementByAmount(5))}>+5</button> <br />
                <button onClick={() => dispatch(increment())}>+</button> <br />
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
                <h3>To-do lists</h3>
                <form onSubmit={() => dispatch(addToDo('kaung'))}>
                    <input type="text" />
                    <button type="submit">Add</button>
                </form>
                <li>{toDoList}</li>
            </div>
        </>
    )
}

export default Home
