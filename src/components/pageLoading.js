import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';

export function PageLoading(props){
    return(
        <View style={{flexGrow:1, alignItems:'center', justifyContent:'center', backgroundColor:'#112B3C'}}>
            <Modal visible={true} animationType='fade' transparent={true} >
                <View style={{flexGrow:1, alignItems:'center', justifyContent:'center'}}>
                    <ActivityIndicator size={'large'} color={'#F66B0E'}/>
                </View>
            </Modal>
        </View>
    )
}