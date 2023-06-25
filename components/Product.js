import React from "react";
import {Text, Image, View, TouchableOpacity} from "react-native";

export function Product({name, price, image, onPress}){
    return(
        <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginTop: '4%'}} 
        onPress={onPress}>

            <Image style={{width: '100%', aspectRatio: 1}} source={image} />

            <View style={{padding: 16}}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>{name}</Text>
                <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 8}}>$ {price}</Text>
            </View>

        </TouchableOpacity>
    )
}