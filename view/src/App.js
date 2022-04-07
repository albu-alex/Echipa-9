import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';

import LoginPage from './pages/login-registerpage/login-registerpage.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import AuthorHomePage from './pages/author-homepage/author-homepage.component';

import './App.css';

function App() {
  return (
    <div>
      {/* <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Navigate to='/login' replace />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router> */}
      <AuthorHomePage />
    </div>
  );
}

export default App;
