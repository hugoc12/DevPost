import React from 'react';
import { Routes } from './src/pages/routes';
import ContextProvider from './src/context';

//#112B3C
//#F66B0E
//#205375
//#EFEFEF

export default function App(){
  return(
    <ContextProvider>
      <Routes/>
    </ContextProvider>
  )
}
