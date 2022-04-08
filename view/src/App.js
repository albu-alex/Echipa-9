import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';

import LoginPage from './pages/login-registerpage/login-registerpage.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import AuthorHomePage from './pages/author-homepage/author-homepage.component';
import AuthorAddPaperPage from './pages/autor-addpaperpage/author-addpaperpage.component';
import AuthorPapersPage from './pages/author-paperspage/author-paperspage.component';

import './App.css';
import AuthorUploadCameraPage from './pages/author-uploadcamerapage/author-uploadcamerapage.component';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route exact path='/' element={<Navigate to='/login' replace />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route path='*' element={<ErrorPage />} /> */}
          <Route exact path='/authorhome' element={<AuthorHomePage />} />
          <Route exact path='/authoraddpaper' element={<AuthorAddPaperPage />} />
          <Route exact path='/authorpapers' element={<AuthorPapersPage />} />
          <Route exact path='/authorcameracopy' element={<AuthorUploadCameraPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
