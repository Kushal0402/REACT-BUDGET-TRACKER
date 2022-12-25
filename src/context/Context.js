import React, { useReducer, createContext } from "react";

const initialState = [];

export const expenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    return (
        <expenseTrackerContext.Provider>
            {children}
        </expenseTrackerContext.Provider>
    )
}