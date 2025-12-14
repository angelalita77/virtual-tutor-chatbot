import { useState } from 'react'
import './App.css'
import {sendQueryToGemini} from '../utilities/gemini'

function App() {
  // States for the user input
  const [text, setText] = useState('');
  // State for response given by chatbot
  const [response, setResponse] = useState('Hello, I am your virtual tutor.');
  // State for loading after clicking submit
  const [loading, setLoading] = useState(false);
  
  const handleButtonClick = async () => {
    await sendQueryToGemini(text);
  };

  return (
    <div>
      <div className='chat-container'>

        <div className="response-box">{response}</div>
        <div className="input-container">
          <textarea 
          className="query-input"
          placeholder='Type your question'
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
          ></textarea>
          <button onClick={handleButtonClick} disabled={loading}>Submit</button>
        </div>

      </div>
    </div>
  )
}

export default App
