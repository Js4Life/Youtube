import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign ,Ionicons ,MaterialIcons} from '@expo/vector-icons';
import Constant from 'expo-constants'
import {useNavigation} from '@react-navigation/native'

export default function Header() {

    const myColor = "#212121"
    const navigation = useNavigation()
  return (
    <View style={{
        marginTop:Constant.statusBarHeight,
        height:45,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        elevation:4
    }}>
     <View style={{flexDirection:"row",
     margin:5
     }}>
            <AntDesign name="youtube" color="red" size={32} style={{
                marginLeft:20,
      
            }}/>
            <Text style={{fontSize:22,
            marginLeft:5,
            fontWeight:"bold",
            color:myColor
            }}>YouTube</Text>
        </View>
     <View style={{flexDirection:"row",justifyContent:"space-between",width:120,margin:5}}>
         <Ionicons name="md-videocam" size={32} color={myColor} />
         <Ionicons name="md-search" size={32} color={myColor} onPress={()=>{navigation.navigate("search")}}/>
         <MaterialIcons name="account-circle" size={32} color={myColor} />
     </View>
    </View>
  );
}