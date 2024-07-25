class FundProcessor {
  constructor(funds, run) {
    this.initStart = funds.initStart;
    this.initTotal = funds.initTotal;
    this.update = funds.update;
    this.newHigh = funds.newHigh;
    this.won = run.won
    this.bearish = this.newHigh < this.update
    
    //this.totalDiff = this.update - this.newHigh
    //this.win = this.totalDiff > 0;
  }

  get bet() {
    const base = this.newHigh
    
    if (base < 100) {      //99
      return 1
    }
    else if (base < 180) {   //110
      return 2
    }
    else if (base < 300) {    //120
      return 3
    }
    else if (base < 750) {   //150
      return 5
    }
    else if (base < 1600) {  //200
      return 8
    }
    else if (base < 2500) {  //250
      return 10
    }
    else if (base < 6000) {  //300
      return 20
    }
    else if (base < 17500) { //350
      return 50
    }
    else if (base < 40000) {  //400
      return 100
    }
    else if (base < 90000) {  //450
      return 200
    }
    else if (base < 150000) {  //500
      return 300
    }
    else if (base < 220000) {  //550
      return 400
    }
    else if (base < 300000) {  //600
      return 500
    }
    else if (base < 455000) {  //650
      return 700
    }
    else {
      return 1000
    }
  }

  get safe() {
    let safe;
    
    // safe margin was set 56% by deafult
    if (this.win) {
      safe = ((56 / 100) * this.newHigh) + this.totalDiff;
    } else {
      safe = (56 / 100) * this.initStart;
    }
      
    return safe / 2
  }

  get state() {
    return this.bearish ? 'bearish' : 'bullish'
  }

}

export { FundProcessor }
