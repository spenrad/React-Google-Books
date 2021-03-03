import React, { createContext, useReducer } from "react";

const booksContext = createContext();
const { Provider } = booksContext;

const reducer = (state, action) => {
    switch(action.type){
        
    }
}

const booksProvider = ({value = 0, ...props}) => {
    const [state, dispatch] = useRed
}