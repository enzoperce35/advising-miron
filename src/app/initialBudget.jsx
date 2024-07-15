export default function InitialBudget({setInitialBudget}) {

    return (
      <form onSubmit={(e) => setInitialBudget(e)}>
        <div>
          <input type="number" name="initialBudget"  id="initialBudget" value={100}/>
        </div>

        <div id="submit-cont">
          <input type="submit" />
        </div>
      </form>
  )
}
