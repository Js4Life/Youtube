import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign ,Ionicons ,MaterialIcons} from '@expo/vector-icons';
import Constant from 'expo-constants'
import {useNavigation,useTheme} from '@react-navigation/native'
import {useDispatch,useSelector} from 'react-redux'

export default function Header() {

   
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const {colors} = useTheme()
    const myColor = colors.iconColor

    const currentTheme = useSelector(state => {
        return state.myDarkMode
    }) 
   

  return (
    <View style={{
        marginTop:Constant.statusBarHeight,
        height:45,
        backgroundColor:colors.headerColor,
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
            }}>LocalTube</Text>
        </View>
     <View style={{flexDirection:"row",justifyContent:"space-between",width:120,margin:5}}>
         <Ionicons name="md-videocam" size={32} color={myColor} />
         <Ionicons name="md-search" size={32} color={myColor} onPress={()=>{navigation.navigate("search")}}/>
         <MaterialIcons name="account-circle" size={32} color={myColor} 
         
         onPress={()=>dispatch({type:"change_theme",payload:!currentTheme})}

         />
     </View>
    </View>
  );
}