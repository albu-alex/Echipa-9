import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { isLoggedIn } from '../scripts/getPermissions.mjs';

export const LoginPrivateRoute = () => {
    const resp = isLoggedIn();
    console.log(resp);

    return isLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
}

export const AuthorPrivateRoute = () => {
    const isAuthor = true;

    return isAuthor ? <Outlet /> : <Navigate to="/reviewerhome" />;
}

export const ReviewerPrivateRoute = () => {
    const isReviewer = true;

    return isReviewer ? <Outlet /> : <Navigate to="/authorhome" />;
}