import { useState } from 'react'
import Game from './game'
import InitialBudget from './initialBudget'
import '../style/App.css'

function App() {
  const [betBudget, setBetBudget] = useState()

  const setInitialBudget = (e) => {
    setBetBudget(new FormData(e.target).get('initialBudget'))

    e.preventDefault();
  }

  return (
    <>
      <div id='header'>
        <h2>Advising Miron</h2>
      </div>

      <div className="container">
        {betBudget ? <Game initialBudget={betBudget}/> : <InitialBudget setInitialBudget={setInitialBudget} />}
      </div>
    </>
  )
}

export default App
