import './App.css'
import Button from './Button'
import Counter from './Counter'

function App() {
  // templating in JS values
  const myScore = 15
  const yourScore = 13
  let winningScore

  if(yourScore > myScore){
    winningScore = yourScore
  } else {
    winningScore = myScore
  }

  // Templating in function invocations
  const returnNum = () => {
    return 18
  }

  return (
    <div>
      <h1 style={{backgroundColor: 'black', color: 'pink'}}>Hello World</h1>
      <p>The winning score is {winningScore}</p>
      <p>Here is a number: {returnNum()}</p>
      <Button message="first button"/>
      <Button message="second button"/>
      <Counter/>
    </div>
  )
}

export default App
