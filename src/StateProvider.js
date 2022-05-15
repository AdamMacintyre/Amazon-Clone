import React, { createContext, useContext, useReducer } from 'react';


//prepares the dataLayer is the REACT context api or REDUX
// REdux is a container which put items in their own state or datalayer.
// we then can pull the data into any component 
export const StateContext = createContext();

// wrap our app adn provide the data layer
export const StateProvider = ({ reducer,  initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pulls information from the data layer
export const useStateValue = () => useContext(StateContext);