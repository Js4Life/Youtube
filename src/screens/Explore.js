import React from 'react';
import { Text, View,FlatList } from 'react-native';
import Card from '../components/Card'
import Header from '../components/Header'
import {useSelector} from 'react-redux'

const LittleCard = ({name}) => {


    return (
        <View style={{
            backgroundColor: "red",
            width: 180,
            borderRadius: 4,
            marginTop: 10
        }}>
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
                {name}
            </Text>
        </View>

    )
}

const Explore = () => {

    const cardData = useSelector(state => {
        console.log('state',state)
        return state
    })

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={{flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"space-around"}}>
                <LittleCard name="Gaming"/>
                <LittleCard name="Trending"/>
                <LittleCard name="Music"/>
                <LittleCard name="news"/>
                <LittleCard name="Movies"/>
                <LittleCard name="fashion"/>
            </View>

            <Text style={{margin:8,fontSize:22,borderBottomWidth:1}}>
                Trending Videos
            </Text>

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
    )
}

export default Explore