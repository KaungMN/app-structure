import React, { useState } from 'react'

const firstName = 'Kaung'
const lastName = 'Myat'
// const fullName = firstName + ' ' + lastName;
const fullName = `${firstName} ${lastName} Noe`

function getTitle(title) {
    return title
}

function Home() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>
                Hello {getTitle('React Revision')}, {fullName}
            </div>
            <p>{count} counts</p>
            <label htmlFor="search">Search: </label>
            <input type="text" id="search" /> <br />
            <button onClick={() => setCount((count) => count + 1)}>+</button> <br />
            <button onClick={() => setCount((count) => count - 1)}>-</button>
        </>
    )
}

export default Home
