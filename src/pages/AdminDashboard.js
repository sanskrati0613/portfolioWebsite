import React, { useEffect, useState } from 'react';
import './admin.css';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('https://your-backend-url.onrender.com/api/messages') // Replace with your deployed backend URL
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error('Error fetching messages:', err));
  }, []);

  return (
    <div className="adminDashboard">
      <h2>Contact Form Submissions</h2>
      <div className="messages">
        {messages.length > 0 ? (
          messages.map((msg, idx) => (
            <div className="messageCard" key={idx}>
              <p><strong>Name:</strong> {msg.from_name}</p>
              <p><strong>Email:</strong> {msg.from_email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p><em>{new Date(msg.createdAt).toLocaleString()}</em></p>
            </div>
          ))
        ) : (
          <p>No messages submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
