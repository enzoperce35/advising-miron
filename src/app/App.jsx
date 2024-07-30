import { useState } from 'react'
import Game from './game'
import Fund from './fund'
import '../style/App.css'
import * as formula from './formula'

function App() {
  const [gameFund, setGameFund] = useState({initTotal: null, initStart: null, newStart: null, newHigh: null, update: null})
  const [runDetails, setRunDetails] = useState({won: null, difference: null})

  // Initial Setting Of Fund, Only Used Once
  const setFund = (e) => {
    const fund = new FormData(e.target)
  
    setGameFund({
      ...gameFund,
      initTotal: parseInt(fund.get('totalFund')),
      initStart: parseInt(fund.get('gameFund')),
      newHigh: parseInt(fund.get('totalFund')),
      newStart: parseInt(fund.get('gameFund')),
      update: parseInt(fund.get('totalFund')),
    }),
    
    e.preventDefault();
  }
  

  const logRun = (e, bet) => {
    const result = parseInt(new FormData(e.target).get('runResult')) // this is the result of run
    const difference = result - gameFund.update  // this is the difference of previous total and current total
    const wonRun = difference >= 0

    setRunDetails({ 
      ...runDetails,
      won: wonRun,
      difference: difference,
    }),
    
    setGameFund({ 
      ...gameFund,
      update: result,
      newHigh: result > gameFund.newHigh ? result : gameFund.newHigh, // if the user is winning, the updated winning is the new start
      newStart: result > gameFund.newHigh ? (gameFund.newStart + difference) : gameFund.newStart,
    }),
    
    e.preventDefault();
  }

  const fundsWereSet = () => {
    return gameFund.update !== null && gameFund.newHigh !== null
  }

  return (
    <>
      <div id='header'>
        <h2>Advising Miron</h2>
         
      </div>

      <div className="container">
        { fundsWereSet() ? <Game funds={gameFund} run={runDetails} logRun={logRun} /> : <Fund setFund={setFund} />}
      </div>
    </>
  )
}

export default App
