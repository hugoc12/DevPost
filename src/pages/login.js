import React, {useContext, useState, useEffect} from 'react';
import {View, TouchableOpacity, TextInput, Keyboard, StyleSheet} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ContextUser } from '../context';

import { PageLoading } from '../components/pageLoading';
import { Logo } from '../components/logo';
import { Btt } from '../styledComponents/styledComponents';

import firebaseApp, { auth, database } from '../firebase/initializeFirebase';
import { ref, get } from 'firebase/database';
import { signInWithEmailAndPassword } from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login(){

    useEffect(()=>{
        Keyboard.addListener('keyboardDidHide', ()=>{
            Keyboard.dismiss();
        })

        async function verificarUsuario(){
            try{
                const userOn = await AsyncStorage.getItem('@keyUser');
                if(userOn){
                    setLoading(false);
                    const refUser = ref(database, `/users/${userOn}`)
                    const dataUser = await (await get(refUser)).val();

                    dataContext.setData(dataUser);

                    navigation.navigate('Dashboard');
                }else{
                    setLoading(false);
                }
            }catch(err){
                console.log(err);
            }
        }

        verificarUsuario();
    }, [])

    const navigation = useNavigation();
    const dataContext = useContext(ContextUser);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(true);

    
    async function signUser(){
        try{
            setLoading(true);
            const response = await signInWithEmailAndPassword(auth, email, senha);

            setEmail('');
            setSenha('');

            const refUser = ref(database, `/users/${response.user.uid}`);
            const dataUser = await (await get(refUser)).val();

            dataContext.setData({
                nome:dataUser.nome,
                email:dataUser.email,
            })

            await AsyncStorage.setItem('@keyUser', `${response.user.uid}`);

            //setLoading(false);
            navigation.navigate('Dashboard', {
                setLoading:setLoading
            });
        }catch(err){
            setLoading(false);
            console.log(err);
            alert('Usuário não encontrado!');
        }
    }

    return(
        loading ? <PageLoading/> :

        <View style={{flexGrow:1, alignItems:'center', justifyContent:'center', backgroundColor:'#112B3C'}}>
            <Logo/>

            <TextInput value={email} onChangeText={(txt)=>setEmail(txt)} placeholder={'Email'} placeholderTextColor={'#ccc'} style={estilo.txtInput}/>
            <TextInput value={senha} onChangeText={(txt)=>setSenha(txt)} placeholder={'Senha'} placeholderTextColor={'#ccc'} style={estilo.txtInput}/>
        
            <TouchableOpacity style={{width:'90%', marginTop:30}} onPress={()=>email && senha ? signUser():alert('Preencha todos os campos!')}>
                <Btt backColor={'#205375'} fontColor={'#fff'}>Entrar</Btt>
            </TouchableOpacity>

            <TouchableOpacity style={{width:'90%', marginTop:10}} onPress={()=>navigation.navigate('Cadastro')}>
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