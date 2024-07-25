import { useEffect, useState } from "react"
import { FundProcessor } from "./fundProcessor"
import * as formula from './formula'

export default function Game({funds, run, logRun}) {
  const [gameDetails, setGameDetails] = useState({bet: null, safe: null, bear: 0, bull: 0, state: null})
  
  useEffect(() => {
    const fund = new FundProcessor(funds, run);
  
    setGameDetails({ 
      ...gameDetails,
      bet: fund.bet,
      safe: fund.safe,
      win: fund.win,
      state: fund.state
    })

    if (run.won) setGameDetails(formula.addWeight(run, fund, gameDetails))
    if (!run.won) setGameDetails(formula.addWeight(run, fund, gameDetails))
  
  }, [funds])

  return (
    <div className="game">
      {[
        `bet: ${gameDetails.bet} `,
        `safe: ${gameDetails.safe} `,
        ]}
      <h1>Spin 8 Times</h1>

      <form onSubmit={(e) => logRun(e, gameDetails.bet)}>
        <div>
          <input type="number" name="runResult" id="runResult"/>
        </div>
       
        <div id="submit">
          <input type="submit" value="Send Result"/>
        </div>
      </form>
    </div>
  )
}
