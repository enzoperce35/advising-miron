function totalDifference(initial, current) {
  let diff = Math.abs(initial-current)
  let diffPercentage = (diff / initial) * 100
  
  return diffPercentage
}

function addWeight(run, fund, game) {
  let runScore =  Math.abs(run.difference / game.bet)
  const totalDiff = totalDifference(fund.newHigh, fund.update)

  if (!run.won && fund.bearish) { //minamalas
    runScore += (runScore * (totalDiff / 100))
  }

  return runScore
}

function weightDiffrerence(bullWeight, bearWeight) {
  let diff = Math.abs(bullWeight-bearWeight)
  let avg = (bullWeight+bearWeight) / 2
  
  return (diff / avg) * 100
}

export {
  addWeight,
  weightDiffrerence,
  totalDifference
}