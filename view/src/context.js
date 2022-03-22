import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    // states and functions here

    return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;  // states and functions in value field
}

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export { AppContext, AppProvider };