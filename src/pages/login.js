import React, {useContext, useState, useEffect} from 'react';
import {View, TouchableOpacity, TextInput, Keyboard, StyleSheet} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ContextUser } from '../context';

import { Logo } from '../components/logo';
import { Btt } from '../styledComponents/styledComponents';


export default function Login(){

    useEffect(()=>{
        Keyboard.addListener('keyboardDidHide', ()=>{
            Keyboard.dismiss();
        })
    }, [])

    const navigation = useNavigation();
    const dataContext = useContext(ContextUser);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    
    /*async function signUser(){
        try{
            const response = await signInWithEmailAndPassword(auth, email, senha);
            setEmail('');
            setSenha('');

            alert('Usuário autorizado!')
        }catch(err){
            console.log(err)
            alert('Usuário não encontrado!')
        }
    }*/

    return(
        <View style={{flexGrow:1, alignItems:'center', justifyContent:'center', backgroundColor:'#112B3C'}}>
            <Logo/>

            <TextInput value={email} onChangeText={(txt)=>setEmail(txt)} placeholder={'Email'} placeholderTextColor={'#ccc'} style={estilo.txtInput}/>
            <TextInput value={senha} onChangeText={(txt)=>setSenha(txt)} placeholder={'Senha'} placeholderTextColor={'#ccc'} style={estilo.txtInput}/>
        
            <TouchableOpacity style={{width:'90%', marginTop:30}}>
                <Btt backColor={'#205375'} fontColor={'#fff'}>Entrar</Btt>
            </TouchableOpacity>

            <TouchableOpacity style={{width:'90%', marginTop:10}}>
                <Btt backColor={'#F66B0E'} fontColor={'#fff'}>Registrar-se</Btt>
            </TouchableOpacity>
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