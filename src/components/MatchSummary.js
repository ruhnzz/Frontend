import React, { useState } from 'react';
import './MatchSummary.css';
import axios from 'axios';

const MatchSummary = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when starting the request
    try {
      const result = await axios.post('https://e3ba-34-19-44-165.ngrok-free.app/query', { query });
      setResponse(result.data.answer);
    } catch (error) {
      console.error('Error querying the backend:', error);
      setResponse('Error querying the backend. Please check the console for more details.');
    } finally {
      setIsLoading(false); // Set loading to false when the request is finished
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="match-summary-container">
        <div className="form-container">
          <br/>
          <h2>ASK HERE</h2>
          <div className="form-group">
            <label htmlFor="query">Enter the IPL match to generate match summary</label>
            <input
              type="text"
              id="query"
              value={query}
              onChange={handleQueryChange}
            />
          </div>
          <button type="submit">Submit</button>
        </div>
        <div className="summary-display">
        {isLoading && <div className="loading"><h1>Loading...</h1></div>}
          <h3>Summary:</h3>
          <p>{response || "Please enter a query to generate the match summary."}</p>
        </div>
      </div>
    </form>
  );
};

export default MatchSummary;
