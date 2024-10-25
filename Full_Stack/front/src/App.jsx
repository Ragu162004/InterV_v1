import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeUpload from './pages/Resume_upload/ResumeUpload';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';
import { ResumeProvider } from './pages/Context/ResumeContext';
import Navbar from './pages/Navbar/Navbar';
import Report from './pages/Report/Report';
import { ReportProvider } from './pages/Context/ReportContext';
import QAPage from './pages/QuestionsPage/QAPage';

function App() {
  return (
    <QAPage/>
  );
}

export default App;
