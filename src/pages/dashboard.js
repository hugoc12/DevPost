import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import { ContextUser } from '../context';

export default function Dashboard(){
    const dataContext = useContext(ContextUser)

    return(
        <View style={{flexGrow:1, alignItems:'center', justifyContent:'center', backgroundColor:'#14a40d'}}>
            <Text>DASHBOARD</Text>
        </View>
    )
}