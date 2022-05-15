import React from 'react';
import { Routes } from './src/pages/routes';
import ContextProvider from './src/context';

import { PageLoading } from './src/components/pageLoading';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
