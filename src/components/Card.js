import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image ,Dimensions ,TouchableOpacity} from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
const Card = (props) => {

    const navig =useNavigation()
    
    return (
        <TouchableOpacity onPress={()=>navig.navigate("videoplayer",{videoId:props.videoId,title:props.title})}>
        <View 
            style={{marginBottom:10}}
            
     >
            <Image
                style={{
                    width: "100%",
                    height: 200
                }}
                source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
            />

            <View style={{flexDirection:"row",margin:5}}>
                <MaterialIcons name="account-circle" size={32} color='#212121'/>
                <View style={{marginLeft:10}}>
                    <Text style={{fontSize:20,width:Dimensions.get("screen").width - 50 }} 
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    >{props.title}</Text>
                    <Text>{props.channel}</Text>
                </View>

            </View>

        </View>

        </TouchableOpacity>
    )
}

export default Card