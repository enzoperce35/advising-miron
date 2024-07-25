function totalDifference(initial, current) {
  let diff = Math.abs(initial-current)
  let diffPercentage = (diff / initial) * 100
  
  return diffPercentage
}

function addWeight(run, fund, game) {
  let runScore =  run.difference / game.bet
  const totalDiff = totalDifference(fund.initTotal, fund.update)

  if ((run.won && game.state === 'bullish') || (!run.won && game.state == 'bearish')) { //sinuswetrte || minamalas 
    return (runScore + (runScore * (totalDiff / 100)))
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