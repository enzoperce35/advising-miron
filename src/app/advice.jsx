import { useEffect, useState } from "react"



function adviceSpin(spins, normalBet, gritBet, weightDiff) {
  if ((spins < 1) || (weightDiff > 40)) { 
    return "Let's get this over for now"
  } else if (spins < 4) { //do grit when you have 3 spins left
    return `Spin 3 Times at ${gritBet} pesos`
  }

  return `Spin ${spins} Times at ${normalBet} pesos`
}

function determineSpins(details, funds) {
  const safeMargin = details.safe + details.bet  //add 1 more bet so remaining spins wont drop to zero
  const gritMargin = details.grit * 3 //3 last spins with highered bet
  const betMargin = safeMargin + gritMargin
  const spins = (funds.update - betMargin) / details.bet // number of normal spins

  return Math.floor(spins)
}

function spinCount(spins) {
  const spinCount = [8, 10, 12].sort(() => 0.5 - Math.random()).pop()
  
  return spins <= spinCount ? spins : spinCount
}

export default function Advice({details, funds}) {
  const [adviceValues, setAdviceValues] = useState({spins: null, weightDiff: null})

  useEffect(() => {
    setAdviceValues({ 
      ...adviceValues,
      spins: determineSpins(details, funds),
      weightDiff: details.bear - details.bull
    })
  
  }, [details])
  
  return (
    <div className="game">
      <div id="advice-values">
        <span>{`Diff: ${adviceValues.weightDiff} `}</span>
        <span>{`Spins: ${adviceValues.spins} `}</span>
      </div>
      
      <h1 id="advice">{adviceSpin(spinCount(adviceValues.spins), details.bet, details.grit, adviceValues.weightDiff)}</h1>
    </div>
  )
}
