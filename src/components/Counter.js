import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(10)

    const addOne = () => {
        setCounter(counter + 1)
    }
    const subtractOne = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <p className='bg-red-500'>Counter: {counter}</p>
            <button onClick={addOne}>Increment</button>
            <button onClick={subtractOne}>Decrement</button>
        </div>
    )
}

export default Counter
