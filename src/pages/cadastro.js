import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import { ContextUser } from '../context';

export default function Cadastro(){
    const dataContext = useContext(ContextUser);

    return(
        <View style={{flexGrow:1, alignItems:'center', justifyContent:'center', backgroundColor:'#3838f3'}}>
            <Text>TELA DE CADASTRO</Text>
        </View>
    )
}