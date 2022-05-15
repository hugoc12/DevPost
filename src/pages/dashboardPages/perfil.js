import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, BackHandler, Modal} from 'react-native';

import { Btt } from '../../styledComponents/styledComponents';
import ContentModal from '../../components/modalUpdatePerfil';

import { ContextUser } from '../../context';

import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../firebase/initializeFirebase';
import { signOut } from 'firebase/auth';

import { launchImageLibrary } from 'react-native-image-picker';

export default function Perfil(){
    useEffect(()=>{
        route.params?.setLoading(false);

        BackHandler.addEventListener('hardwareBackPress', ()=>{
            return true;
        })
    }, [])

    const route = useRoute();
    const dataContext = useContext(ContextUser);
    const navigation = useNavigation();

    const [fotoPerfil, setFotoPerfil] = useState('');
    const [modalEdit, setModalEdit] = useState(false);


    async function logout(){
        try{
            const response = await signOut(auth);
            await AsyncStorage.removeItem('@keyUser', ()=>{
                navigation.navigate('Login');
            })
        }catch(err){

        }
    }

    async function buscarFotoPerfil(){
        try{
            const response = await launchImageLibrary('mediaType');
            setFotoPerfil(response.assets[0].uri)
        }catch(err){
            console.log(err);
        }
    }


    return(
        <View style={estilo.container}>
            <TouchableOpacity style={{marginBottom:50}} onPress={()=>buscarFotoPerfil()}>
                <Image style={estilo.imgPefil} source={{uri:fotoPerfil}}/>
            </TouchableOpacity>

            <View style={{alignItems:'center', justifyContent:'center', marginBottom:50}}>
                <Text style={estilo.titleName}>{dataContext.data.nome}</Text>
                <Text style={estilo.titleEmail}>{dataContext.data.email}</Text>
            </View>

            <TouchableOpacity style={{width:'90%', marginBottom:15}} onPress={()=>setModalEdit(true)}>
                <Btt backColor={'#F66B0E'} fontColor={'#EFEFEF'}>ATUALIZAR PERFIL</Btt>
            </TouchableOpacity>

            <TouchableOpacity style={{width:'90%'}} onPress={()=>logout()}>
                <Btt backColor={'#205375'} fontColor={'#EFEFEF'}>SAIR</Btt>
            </TouchableOpacity>

            <Modal visible={modalEdit} transparent={true} animationType={'slide'}>
                <ContentModal setModalEdit={setModalEdit}/>
            </Modal>
            
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#112B3C',
    },

    imgPefil:{
        width: 120,
        height: 120,
        borderRadius:100,
        borderWidth:1,
        borderColor:'#ccc'
    },

    titleName:{
        fontSize:22,
        color: '#EFEFEF',
        fontFamily:'Ubuntu-Bold',
        marginBottom:5
    },

    titleEmail:{
        fontSize:20,
        color: '#ccc',
        fontFamily:'Ubuntu-Italic',
    }
})