import React, { useState } from 'react';
import './ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevent form submission
    if (input.trim()) {
      setMessages([...messages, { content: input, sender: 'You' }]);
      setInput('');
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <b>{msg.sender}: </b>{msg.content}
          </div>
        ))}
      </div>
      <form className="message-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;