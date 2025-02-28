import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  // add state for mood and note
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');
  const [moods, setMoods] = useState([]);

  // add function to handle form submission
 // fetch moods from backend
const fetchMoodsAPI = async () => {
  const response = await axios.get('http://localhost:8787/api');
  setMoods(response.data.moods);
  console.log(response.data.moods);
}

useEffect(() => {
  fetchMoodsAPI();
}, []);

 // add mood
 // delete mood

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
      {/* display previous moods and notes */}
      <h2>Vibe Out</h2>
      <ul>
        {moods.map((mood, index) => (
          <li key={index}>
            {mood} and note
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;