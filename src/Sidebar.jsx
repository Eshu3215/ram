import React from "react";
import './Sidebar.css';

function Sidebar({ friends, setSelectedChat }) {
  return (
    <div className="sidebar">
      <h3>Friends List</h3>
      <div className="chats">
        {friends.map((friend) => (
          <div
            key={friend.id} // Use a unique identifier if available
            className="chat-item"
            onClick={() => setSelectedChat(friend)}
          >
            <div className={`status ${friend.status || 'offline'}`}></div>
            <div className="chat-info">
              <h4>{friend.name || "Unnamed Friend"}</h4>
              <p>{friend.lastMessage || "No messages yet"}</p>
            </div>
            <span>{friend.time || "Just now"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;