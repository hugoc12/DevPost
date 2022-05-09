import React from 'react';
import {View, Text} from 'react-native';

export function Logo(){
    return(
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', width:'100%', marginBottom:30}}>
            <Text style={{color:'#EFEFEF', fontSize:60, fontFamily:'Ubuntu-Bold'}}>Dev</Text>
            <Text style={{color:'#F66B0E', fontSize:60, fontFamily:'Ubuntu-Bold'}}>Post</Text>
        </View>
    )
}