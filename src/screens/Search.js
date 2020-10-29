import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput ,FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'
import Constant from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDQ0aNc-BdLxJcSmvwkKJCWstvZmg-gP08

const SearchScreen = ({navigation}) => {

    const [value, setValue] = useState("")
    const [miniCardData,setMiniCard]= useState("")
    const [loading,setLoading]= useState(false)

    const fetchData = () => {
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDQ0aNc-BdLxJcSmvwkKJCWstvZmg-gP08`)
           .then(res=>res.json())
           .then(data=>{
               console.log(data)
               setLoading(false)
               setMiniCard(data.items)
           }) 


    }

    return (
        <View style={{ flex: 1,  marginTop:Constant.statusBarHeight }}>

            <View style={{
                padding: 5,
                flexDirection: "row",
                justifyContent: "space-around",
                elevation: 5,
                backgroundColor: "white"
            }}>
                <Ionicons name="md-arrow-back" onPress={()=>navigation.goBack()} size={32} />
                <TextInput
                
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    style={{ width: "70%", backgroundColor: "#e6e6e6" }}
                />

                <Ionicons name="md-send" size={32}  onPress={()=>{fetchData()}}/>

            </View>

            {/* <ScrollView>
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
            </ScrollView> */}

        {loading?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null}
            <FlatList
                data={miniCardData}
                renderItem={({item})=>{
                    return <MiniCard
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item=>item.id.videoId}
            />

        </View>
    )
}

export default SearchScreen;