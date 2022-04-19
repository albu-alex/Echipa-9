import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';

import LoginPage from './pages/login-registerpage/login-registerpage.component';
import ErrorPage from './pages/errorpage/errorpage.component';

import AuthorHomePage from './pages/author-homepage/author-homepage.component';
import AuthorAddPaperPage from './pages/author-addpaperpage/author-addpaperpage.component';
import AuthorPapersPage from './pages/author-paperspage/author-paperspage.component';
import AuthorUploadCameraPage from './pages/author-uploadcamerapage/author-uploadcamerapage.component';

import ReviewerHomePage from './pages/reviewer-homepage/reviewer-homepage.component';
import ReviewerPapersPage from './pages/reviewer-paperspage/reviewer-paperspage.component';
import ReviewerAuthorsPage from './pages/reviewer-authorspage/reviewer-authorspage.component';
import ReviewerOnePaperPage from './pages/reviewer-onepaperpage/reviewer-onepaperpage.component';

import ChairHomePage from "./pages/chair-homepage/chair-homepage.component";
import ChairOrganizeSessions from "./pages/chair-organize-sessions/chair-organize-sessions.component";

import './App.css';
import { LoginPrivateRoute, AuthorPrivateRoute, ReviewerPrivateRoute } from './pages/PrivateRoute';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/*Login routes*/}
          <Route exact path='/' element={<Navigate to='/login' replace />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route path='*' element={<ErrorPage />} />

          <Route exact path='/' element={<LoginPrivateRoute/>}>

            <Route exact path='/' element={<AuthorPrivateRoute/>}>
              <Route exact path='/authorhome' element={<AuthorHomePage/>}/>
              <Route exact path='/authoraddpaper' element={<AuthorAddPaperPage />} />
              <Route exact path='/authorpapers' element={<AuthorPapersPage />} />
              <Route exact path='/authorcameracopy' element={<AuthorUploadCameraPage />} />
            </Route>

            <Route exact path='/' element={<ReviewerPrivateRoute/>}>
              <Route exact path='/reviewerhome' element={<ReviewerHomePage />} />
              <Route exact path='/reviewerpapers' element={<ReviewerPapersPage />} />
              <Route exact path='/allauthors' element={<ReviewerAuthorsPage />} />
              <Route exact path='/itwillbepaperid' element={<ReviewerOnePaperPage />} />
            </Route>
          </Route>
          {/*Chair routes*/}

          <Route exact path='/chair-home' element={<ChairHomePage />} />
          <Route exact path = '/chair-organize-sessions' element={<ChairOrganizeSessions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
