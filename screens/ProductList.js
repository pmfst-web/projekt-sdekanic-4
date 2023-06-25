import React, {useEffect, useState} from "react";
import {View, Text, FlatList} from "react-native";
import { getProducts } from "../data";
import { Product } from "../components/Product";

export function ProductsList({navigation}){

    function product({item: product}){
        return(
            <Product
                {...product}
                onPress={() => {
                    navigation.navigate('Proizvod', {productId: product.id})
                }}
            />
        )
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts())
    })

    return(
        <FlatList 
            style={{paddingVertical: 8, marginHorizontal: 8,}}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            rItem={product}
        />
    )

}