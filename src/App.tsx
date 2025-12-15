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
    if (!text.trim()) return; // Don't submit empty queries
    const res = await sendQueryToGemini(text);
    console.log(res);
    setResponse(res);
    setLoading(false);
  };

 return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex items-center justify-center p-6">
      <div className="chat-container bg-slate-800/60 border border-slate-700 rounded-xl shadow-lg p-6 w-full max-w-lg">
        <h1 className="text-emerald-300 font-semibold text-lg mb-4 text-center">
          Virtual Tutor Chat
        </h1>

        <div className="response-box bg-slate-900/40 border border-slate-700 rounded-lg p-4 mb-4 text-sm">
          {loading ? 'Loading the response...' : response}
        </div>

        <div className="input-container flex flex-col space-y-3">
          <textarea
            className="query-input bg-slate-900/40 border border-slate-700 rounded-lg p-3 text-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Type your question here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={loading}
          ></textarea>

          <button
            onClick={handleButtonClick}
            disabled={loading}
            className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-900 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
