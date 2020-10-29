import React from 'react';
import {  Text, View, Dimensions, Image,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const MiniCard = (props) => {
    const navig =useNavigation()

    return (
        <TouchableOpacity onPress={()=>navig.navigate("videoplayer",{videoId:props.videoId,title:props.title})}>
        <View style={{
            flexDirection:"row",
            margin:10,marginBottom:0

        }}>
            <Image
                style={{
                    width: "45%",
                    height: 100
                }}
                source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            />

            <View style={{paddingLeft:7}}>
                <Text style={{ fontSize: 17, width: Dimensions.get("screen").width / 2 }}
                    ellipsizeMode="tail"
                    numberOfLines={3}>
                     {props.title}
                </Text>
                <Text style={{fontSize:12,}}>{props.channel}</Text>
            </View>

        </View>
        </TouchableOpacity>
    )
}

export default MiniCard