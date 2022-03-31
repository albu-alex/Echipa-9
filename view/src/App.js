import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';

import Header from './components/header/header.component';
import LoginPage from './pages/login-registerpage/login-registerpage.component';
import ErrorPage from './pages/errorpage/errorpage.component';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Navigate to='/login' replace />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
