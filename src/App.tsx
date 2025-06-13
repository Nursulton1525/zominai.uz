import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import ZominAcademyPage from './pages/ZominAcademyPage';
import ITPage from './pages/ITPage';
import CourseRegistrationPage from './pages/CourseRegistrationPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/zomin-academy" element={<ZominAcademyPage />} />
          <Route path="/it-info" element={<ITPage />} />
          <Route path="/course-registration" element={<CourseRegistrationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;