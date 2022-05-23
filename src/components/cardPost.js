import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import IconLike from 'react-native-vector-icons/AntDesign';

export default function CardPost(){
    return(    
        <View style={estilo.container}>
            <View style={estilo.containerNameUser}>
                <Image source={require('../img/perfilOff.png')} style={{width:40, height:40, borderRadius:100, marginRight:5}}/>
                <Text>Nome do Usuário</Text>
            </View>
            
            <Text style={estilo.containerTextPost}>
                POST ------------------- FFFFFFFFFFFFFFFFFFFFFFFFF LJDLKFJSDLFJSKFJSLDFSDLJFS
            </Text>

            <View style={estilo.containerInfoPost}>
                <Text style={{width:'50%', fontSize:20, textAlign:'left'}}>1 <IconLike name='like2' color={'#F66B0E'} size={25}/></Text>
                <Text style={{width:'50%', fontSize:14, textAlign:'right'}}>Há 5 minutos</Text>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        width: '90%',
        minHeight:150,
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:5,
        backgroundColor:'#fff',
        marginVertical:5,
        alignSelf:'center',
        padding: 10,
    },

    containerInfoPost:{
        flexDirection:'row',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
    },

    containerTextPost:{
        width: '100%',
    },

    containerNameUser:{
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    }
})