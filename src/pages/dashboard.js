import React, {useContext} from 'react';
import { ContextUser } from '../context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icons from 'react-native-vector-icons/FontAwesome';

import Home from './dashboardPages/home';
import Search from './dashboardPages/search';
import Perfil from './dashboardPages/perfil';
const TabNavigator = createBottomTabNavigator();

export default function Dashboard(){
    const dataContext = useContext(ContextUser)

    return(
        <TabNavigator.Navigator initialRouteName='Perfil' screenOptions={{}}>
            <TabNavigator.Screen name='Home' component={Home} options={{tabBarIcon:()=><Icons name='home' color={'#000'} size={20}/>}}/>
            <TabNavigator.Screen name='Search' component={Search} options={{tabBarIcon:()=><Icons name='search' color={'#000'} size={20}/>}}/>
            <TabNavigator.Screen name='Perfil' component={Perfil} options={{tabBarIcon:()=><Icons name='user' color={'#000'} size={20}/>}}/>
        </TabNavigator.Navigator>
    )
}