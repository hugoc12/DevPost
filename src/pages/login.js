import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ContextUser } from '../context';

export default function Login(){
    const navigation = useNavigation();
    const dataContext = useContext(ContextUser);

    return(
        <View style={{flexGrow:1, alignItems:'center', justifyContent:'center', backgroundColor:'#ccc'}}>
            <Text>TELA DE LOGIN</Text>
        </View>
    )
}