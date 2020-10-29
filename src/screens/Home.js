import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from 'react-redux'
import { FlatList } from 'react-native-gesture-handler';

export default function HomeScreen() {

    const cardData = useSelector(state=>{
        return state
    })

    return (
        <View style={{flex:1}}>
            <Header />
            {/* <ScrollView>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ScrollView> */}
            <FlatList
            data={cardData}
            renderItem={({item})=>{
                return <Card
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                />
                
            }}
            keyExtractor={item=>item.id.videoId}
            />

        </View>
    );
}