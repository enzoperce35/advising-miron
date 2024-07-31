import { useEffect, useState } from "react"
import { FundProcessor } from "./fundProcessor"
import * as formula from './formula'
import Advice from './advice'

export default function Game({funds, run, logRun, fundStatus}) {
  const [gameDetails, setGameDetails] = useState({bet: null, defend: null, grit: null, safe: null, bear: 0, bull: 0, bearish: false})
  
  function setWeight(subj, currWeight, fund) {
    if (fund.bullish || run.won == null) return 0;

    if ((!run.won && subj === 'bear') || (run.won && subj === 'bull')) {
      return currWeight += formula.addWeight(run, fund, gameDetails)
    }

    return currWeight
  }
  
  useEffect(() => {
    const fund = new FundProcessor(funds, run, fundStatus);
    
    setGameDetails({ 
      ...gameDetails,
      bet: fund.bet['bet'],
      grit: fund.bet['grit'],
      defend: fund.bet['defend'],
      safe: fund.safe,
      state: fund.state,
      bear: setWeight('bear', gameDetails.bear, fund),
      bull: setWeight('bull', gameDetails.bull, fund),
      bearish: fund.bearish
    })
  
  }, [funds])

  return (
    <div>
      <Advice run={run} details={gameDetails} funds={funds}/>

      <form onSubmit={(e) => logRun(e, gameDetails.bet)}>
        <div id="round-input">
          <input type="number" step="any" name="runResult" id="runResult" placeholder={funds.update} required/>
        </div>
       
        <div id="submit">
          <input type="submit" value="Send Result"/>
        </div>
      </form>
    </div>
  )
}
