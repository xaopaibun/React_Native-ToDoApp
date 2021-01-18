import * as React from 'react';
import { CheckBox,Button,StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './Screen/Home';
import Submitsuccess from './Screen/Submitsuccess';
import Detail from './Screen/Detail';
const Stack = createStackNavigator();
const App = () =>{
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerTitleAlign: 'center'}}/>
          <Stack.Screen name = "Submitsuccess" component = {Submitsuccess} options={{headerTitle: 'Submit Success'}}/>
          <Stack.Screen name = "Detail" component = {Detail} options={{headerTitle: 'Detail',headerRight: () =>  <FontAwesome name={"check-square"} size={20} />}}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}
const styles = StyleSheet.create({
   
});
export default  App;