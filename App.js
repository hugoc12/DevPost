import React from 'react';
import { Routes } from './src/pages/routes';
import ContextProvider from './src/context';

export default function App(){
  return(
    <ContextProvider>
      <Routes/>
    </ContextProvider>
  )
}
