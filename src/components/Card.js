import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image ,Dimensions } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
const Card = () => {
    return (
        <View 
            style={{marginBottom:10}}
     >
            <Image
                style={{
                    width: "100%",
                    height: 200
                }}
                source={{ uri: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" }}
            />

            <View style={{flexDirection:"row",margin:5}}>
                <MaterialIcons name="account-circle" size={32} color='#212121'/>
                <View style={{marginLeft:10}}>
                    <Text style={{fontSize:20,width:Dimensions.get("screen").width - 50 }} 
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    >this amazing youtube guide1
                    this amazing youtube guide2
                    this amazing youtube guid3 
                    this amazing youtube guide4</Text>
                    <Text>this amazing youtube guide</Text>
                </View>

            </View>

        </View>
    )
}

export default Card