class FundProcessor {
  constructor(funds, run, fundStatus) {
    this.initStart = funds.initStart;
    this.initTotal = funds.initTotal;
    this.newStart = funds.newStart
    this.update = funds.update;
    this.newHigh = funds.newHigh;
    this.won = run.won
    this.fundStatus = fundStatus
    this.bearish = this.update < this.newHigh
    this.bullish = this.update === this.newHigh
    this.totalDiff = this.newHigh - this.initTotal
  }

  get bet() {
    const base = this.fundStatus
    
    if (base < 100) {      //99
      return {bet: 1, defend: 1, grit: 3}
    }
    else if (base < 180) {   //110
      return {bet: 2, defend: 1, grit: 5}
    }
    else if (base < 300) {    //120
      return {bet: 3, defend: 2, grit: 8}
    }
    else if (base < 750) {   //150
      return {bet: 5, defend: 3, grit: 10}
    }
    else if (base < 1600) {  //200
      return {bet: 8, defend: 5, grit: 20}
    }
    else if (base < 2500) {  //250
      return {bet: 10, defend: 8, grit: 50}
    }
    else if (base < 6000) {  //300
      return {bet: 20, defend: 10, grit: 100}
    }
    else if (base < 17500) { //350
      return {bet: 50, defend: 20, grit: 200}
    }
    else if (base < 40000) {  //400
      return {bet: 100, defend: 50, grit: 300}
    }
    else if (base < 90000) {  //450
      return {bet: 200, defend: 100, grit: 400}
    }
    else if (base < 150000) {  //500
      return {bet: 300, defend: 200, grit: 500}
    }
    else if (base < 220000) {  //550
      return {bet: 400, defend: 300, grit: 700}
    }
    else if (base < 300000) {  //600
      return {bet: 500, defend: 400, grit: 1000}
    }
    else if (base < 455000) {  //650
      return {bet: 700, defend: 500, grit: 1000}
    }
    else {
      return {bet: 1000, defend: 700, grit: 1000}
    }
  }

  get safe() {
    const baseDiff = this.initTotal - this.initStart
    
    return ((((56 / 100) * this.newStart) + this.totalDiff) / 2) + baseDiff
  }

}

export { FundProcessor }
