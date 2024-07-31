export default function Fund({setFund}) {

    return (
      <form id="starting-input" onSubmit={(e) => setFund(e)}>
        <div>
          <div>
            <label htmlFor="totalFund">Total: </label>
            <input type="number" step="any" name="totalFund" id="totalFund" value={102.90} required/>
          </div>
          
          <div>
            <label htmlFor="gameFund">Game: </label>
            <input type="number" step="any" name="gameFund" id="gameFund" value={102} required/>
          </div>
        </div>

        <div id="submit">
          <input type="submit" value="Game Start"/>
        </div>
      </form>
  )
}
