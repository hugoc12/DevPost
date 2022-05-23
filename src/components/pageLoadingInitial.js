import React, {useContext, useEffect} from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { database } from '../firebase/initializeFirebase';
import { get, ref} from 'firebase/database';
import { ContextUser } from '../context';
import { useNavigation } from '@react-navigation/native';

export function PageLoadingInitial(){
    const navigation = useNavigation();
    const dataContext = useContext(ContextUser); //Obj contido em value

    useEffect(()=>{
        async function verificarUsuario(){
            const keyUser = await AsyncStorage.getItem('@keyUser');
    
            if(keyUser){
                const refDataUser = ref(database, `/users/${keyUser}`)
                const dataUser = await (await get(refDataUser)).val();
    
                dataContext.setData(dataUser);

                navigation.navigate('Dashboard');
            }else{
                navigation.navigate('Login');
            }
        }

        verificarUsuario();
    }, [])

    

    return(
        <View style={{flexGrow:1, alignItems:'center', justifyContent:'center', backgroundColor:'#112B3C'}}>
            <ActivityIndicator size={'large'} color={'#F66B0E'}/>    
        </View>
    )
}