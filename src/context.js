import React from 'react';
import { createContext, useState } from 'react';

export const ContextUser = createContext();

export default function ContextProvider({children}){
    const [data, setData] = useState({
        nome:'Exemplo',
        email:'exemplo@hotmail.com'
    })

    const [loading, setLoading] = useState(false);

    return(
        <ContextUser.Provider value={{data, setData, loading, setLoading}}>
            {children}
        </ContextUser.Provider>
    )
}