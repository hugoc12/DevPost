import React from 'react';
import { createContext, useState } from 'react';

export const ContextUser = createContext();

export default function ContextProvider({children}){
    const [data, setData] = useState({
        nome:'Hugo',
        email:'hugo_c12@outloo.com'
    })

    return(
        <ContextUser.Provider value={{data, setData}}>
            {children}
        </ContextUser.Provider>
    )
}