const App = () => {
  return(
    <>
      <h1>Vibe Check - Mood Journal</h1>
      <p>Let's check your mood today!</p>
      <form action="">
        <input 
          type="text"
          placeholder="How are you feeling today?"
          value="mood"// value should be a state
          onChange={''}
          required 
        />
        <textarea 
          placeholder="Add a note about your mood" 
          value="note" // value should be a state
          onChange={''}
        />
        <button type="submit">Submit</button>
      </form>
      {/* display previous moods   */}
    </>
  )
}

export default App;