import React, { useState } from 'react';
import './Chatbot.css';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const newMessage = { text: input, user: 'user' };
      setMessages([...messages, newMessage]);

      // Clear the input
      setInput('');

      try {
        const result = await axios.post('https://e3ba-34-19-44-165.ngrok-free.app/query', { query: input });
        const botMessage = { text: result.data.answer, user: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error querying the backend:', error);
        const errorMessage = { text: 'Error querying the backend. Please check the console for more details.', user: 'bot' };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-container">

        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.user}`}>
                <span>{message.text}</span>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message.."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chatbot;