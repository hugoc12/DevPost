import React, {useContext, useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Btt } from '../styledComponents/styledComponents';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ContextUser } from '../context';
import { database } from '../firebase/initializeFirebase';
import {ref, set, get} from 'firebase/database';
import { async } from '@firebase/util';


export default function ContentModal(props){
    const [novoNome, setNovoNome] = useState('');
    const dataContext = useContext(ContextUser);

    async function updateInfoUser(){
        try{
            const idUser = await AsyncStorage.getItem('@keyUser');
            const refDataUser = ref(database, `/users/${idUser}`);
            const refNameUser = ref(database, `/users/${idUser}/nome`);
            await set(refNameUser, novoNome);
            
            const response = await (await get(refDataUser)).val();

            dataContext.setData(response);

            alert('NOME ATUALIZADO!');
            props.setModalEdit(false);

        }catch(err){
            console.log(err);
        }
    }

    return(
        <View style={{flexGrow:1, alignItems:'center', justifyContent:'flex-end'}}>
            <View style={{width:'100%', height:260, backgroundColor:'#205375', borderTopLeftRadius:20, borderTopRightRadius:20, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style={{position:'absolute', top:10, left:310}} onPress={()=>props.setModalEdit(false)}>
                    <IconFontAwesome name='window-close' size={30} color={'#EFEFEF'}/>
                </TouchableOpacity>
                
                <TextInput value={novoNome} onChangeText={(txt)=>setNovoNome(txt)} placeholder='Nick' placeholderTextColor={'#ccc'} style={estilo.txtInput}/>
                <TouchableOpacity style={{width:'90%', marginTop:20}} onPress={()=>updateInfoUser()}>
                    <Btt backColor={'#F66B0E'} fontColor={'#EFEFEF'}>SALVAR</Btt>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    txtInput:{
        width: '90%',
        padding: 10,
        fontSize:16,
        backgroundColor:'#fff',
        borderRadius:5,
        color: '#000',
        marginVertical:5,
    }
})