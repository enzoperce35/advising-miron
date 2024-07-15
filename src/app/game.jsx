import { useEffect, useState } from "react"
import * as compute from "./formulas";

export default function Game({initialBudget}) {
  const [budget, setBudget] = useState(); //continue here, add value elements

  useEffect( () => {
    setBudget(compute.percentageCut(initialBudget, 30))
  }, [initialBudget])

  return (
    <div className="game">
      <div id="gameCont">{budget}</div>
    </div>
  )
}