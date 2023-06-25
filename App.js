import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigetor} from '@react-navigation/native-stack';
import { ProductsList } from './screens/ProductList';

const Stack = createNativeStackNavigetor();

function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductsList} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
          {/* <Stack.Screen name="ProductDetails" component={ProductDetails} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="Cart" component={Cart} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    
  )
}

export default App;