import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage.jsx';
import ChatWindow from './ChatWindow.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router basename="/Chat-Application">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUpPage />} />
          {isLoggedIn && <Route path="/chat" element={<ChatWindow />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
