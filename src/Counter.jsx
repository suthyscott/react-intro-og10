import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>This is the Counter component</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => increaseCount()}>Increase Count</button>
        </div>
    )
}

export default Counter