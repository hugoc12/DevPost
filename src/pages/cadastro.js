import React, {useContext, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { ContextUser } from '../context';

import { Btt } from '../styledComponents/styledComponents';
import { PageLoading } from '../components/pageLoading';

import { useNavigation, useRoute } from '@react-navigation/native';
import { auth, database } from '../firebase/initializeFirebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

export default function Cadastro(){
    const dataContext = useContext(ContextUser);
    const navigation = useNavigation();

    const [nomeUser, setNomeUser] = useState('');
    const [emailInput, setEmail] = useState('');
    const [passwordInput, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function createUser(email, password){
        setLoading(true);

        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            let userUid = response.user.uid;
            let refUsers = ref(database, `/users/${userUid}`);
            

            await set(refUsers, {  
                nome:nomeUser,
                email:emailInput
            })

            setEmail('');
            setPassword('');
            alert('Usuário cadastrado!');
            setLoading(false);
            navigation.navigate('Login');
        }catch(err){
            setEmail('');
            setPassword('');
            setNomeUser('');
            setLoading(false);
            alert('Algo deu errado, tente novamente.')
            console.log(err);
        }

    }

    return(
        loading ? <PageLoading/> :
        
        <View style={{flexGrow:1, alignItems:'center', justifyContent:'center', backgroundColor:'#112B3C'}}>
            <TextInput style={estilo.txtInput} value={nomeUser} onChangeText={(txt)=>setNomeUser(txt)} placeholder='Nome' placeholderTextColor={'#ccc'}/>
            <TextInput style={estilo.txtInput} value={emailInput} onChangeText={(txt)=>setEmail(txt)} placeholder='Email' placeholderTextColor={'#ccc'}/>
            <TextInput style={estilo.txtInput} value={passwordInput} onChangeText={(txt)=>setPassword(txt)} placeholder='Senha' placeholderTextColor={'#ccc'}/>

            <TouchableOpacity style={{width:'90%', marginTop:30}} onPress={()=>emailInput && passwordInput && nomeUser ? createUser(emailInput, passwordInput) : alert('Preencha todos os campos!')}>
                <Btt backColor={'#F66B0E'} fontColor={'#fff'}>Cadastrar-se</Btt>
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