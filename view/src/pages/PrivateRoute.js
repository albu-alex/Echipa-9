import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const LoginPrivateRoute =  () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export const AuthorPrivateRoute = () => {
    const isAuthor = localStorage.getItem("role") === "author";
    return isAuthor ? <Outlet /> : <Navigate to="/reviewerhome" />;
}

export const ReviewerPrivateRoute = () => {
    const isReviewer = localStorage.getItem("role") === "reviewer";
    return isReviewer ? <Outlet /> : <Navigate to="/authorhome" />;
}

export const ChairPrivateRoute = () => {
    const isChair = localStorage.getItem("role") === "chair";
    return isChair ? <Outlet /> : <Navigate to="/chairhome" />;
}