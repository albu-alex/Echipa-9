import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSignIn, setIsSignIn] = useState(true);

    const changeToSignIn = () => {
        setIsSignIn(true);
    }

    const changeToRegister = () => {
        setIsSignIn(false);
    }

    return <AppContext.Provider value={{ isSignIn, changeToSignIn, changeToRegister }}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export { AppContext, AppProvider };