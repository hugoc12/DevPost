import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const StackNavigator = createNativeStackNavigator();

import Login from './login';
import Cadastro from './cadastro';
import Dashboard from './dashboard';

export function Routes(){
    return(
        <NavigationContainer>
            <StackNavigator.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
                <StackNavigator.Screen name='Login' component={Login}/>
                <StackNavigator.Screen name='Cadastro' component={Cadastro}/>
                <StackNavigator.Screen name='Dashboard' component={Dashboard}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}