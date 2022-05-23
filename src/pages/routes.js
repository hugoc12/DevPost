import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { PageLoadingInitial } from '../components/pageLoadingInitial';

const StackNavigator = createNativeStackNavigator();

import Login from './login';
import Cadastro from './cadastro';
import Dashboard from './dashboard';

export function Routes(){
    return(
        <NavigationContainer>
            <StackNavigator.Navigator initialRouteName={PageLoadingInitial}>
                <StackNavigator.Screen name='PageLoadingInitial' component={PageLoadingInitial} options={{headerShown:false}}/>
                <StackNavigator.Screen name='Login' component={Login} options={{headerShown:false}}/>
                <StackNavigator.Screen name='Cadastro' component={Cadastro}/>
                <StackNavigator.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}