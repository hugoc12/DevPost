import React, {useState} from 'react';
import { View, FlatList, Text } from 'react-native';
import CardPost from '../../components/cardPost';

export default function Home() {
  const [dataUser, setDataUser] = useState([
    {
      idUser:'fa6ds4f6a4',
      text:'dfafdsfdsafdasfsafaslkfjasdlkfjalfsf \n fladsjflajfas \n fajdsfasjfkdasfh \n',
    },

    {
      idUser:'fr4ser56as',
      text:'dfafdsfdsafdasfsafaslkfjasdlkfjalfsf \n fladsjflajfas \n fajdsfasjfkdasfh \n',
    },

    {
      idUser:'fa65sdf46a',
      text:'dfafdsfdsafdasfsafaslkfjasdlkfjalfsf \n fladsjflajfas \n fajdsfasjfkdasfh \n',
    },

    {
      idUser:'fa65sdf46a',
      text:'dfafdsfdsafdasfsafaslkfjasdlkfjalfsf \n fladsjflajfas \n fajdsfasjfkdasfh \n',
    },

    {
      idUser:'fa65sdf46a',
      text:'dfafdsfdsafdasfsafaslkfjasdlkfjalfsf \n fladsjflajfas \n fajdsfasjfkdasfh \n',
    },
  ])

  return (
   <View style={{flexGrow:1, alignItems:'center', justifyContent:'center', backgroundColor:'#112B3C'}}>
     <FlatList data={dataUser} renderItem={({item})=><CardPost/>} style={{width:'100%'}}/>
   </View>
  );
}