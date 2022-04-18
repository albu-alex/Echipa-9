import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const LoginPrivateRoute =  () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" ? true : false;
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export const AuthorPrivateRoute = () => {
    const isAuthor = localStorage.getItem("role") === "author" ? true : false;
    return isAuthor ? <Outlet /> : <Navigate to="/reviewerhome" />;
}

export const ReviewerPrivateRoute = () => {
    const isReviewer = localStorage.getItem("role") === "reviewer" ? true : false;
    return isReviewer ? <Outlet /> : <Navigate to="/authorhome" />;
}