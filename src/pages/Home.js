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
    const [toDoOnChange, setToDoOnChange] = useState('')
    const { count } = useSelector((state) => state.counter)
    const toDoList = useSelector((state) => state.toDo.list)
    console.log(toDoList)
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
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                        dispatch(addToDo(toDoOnChange))
                        setToDoOnChange('')
                    }}
                >
                    <input type="text" value={toDoOnChange} onChange={(event) => setToDoOnChange(event.target.value)} />
                    <button type="submit">Add</button>
                </form>
                {toDoList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </div>
        </>
    )
}

export default Home
