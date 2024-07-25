export default function Fund({setFund}) {

    return (
      <form onSubmit={(e) => setFund(e)}>
        <div>
          <div>
            <label htmlFor="totalFund">Total: </label>
            <input type="number" name="totalFund" id="totalFund" value={190}/>
          </div>
          
          <div>
            <label htmlFor="gameFund">Game: </label>
            <input type="number" name="gameFund" id="gameFund" value={190}/>
          </div>
        </div>

        <div id="submit">
          <input type="submit" value="Game Start"/>
        </div>
      </form>
  )
}
