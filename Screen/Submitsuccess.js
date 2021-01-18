import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CheckBox,Button,StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, FlatList, Alert} from 'react-native';
 const Submitsuccess = ({navigation, route}) =>{
     const color = route.params.color.color;
     const font_Size = route.params.font_Size;
     const  arr = route.params.arr;
     return(
         <View style={styles.container}>
             <View style={{height: 100, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                <Image source={require('../IMG/icon.png')} style={{height: 100, width:100}} resizeMode='contain'/>
             </View>
          
             <Text style={styles.text}>You have successfully fixed the color and font size. </Text>
             
             <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('Detail', { color, font_Size, arr}) }><Text style={{color: 'white', fontSize: 20}}>View Detail</Text></TouchableOpacity>
         </View>
     );
 }
const styles = StyleSheet.create({
   container:{
        flex: 1,
        margin: 10
   },
   text:{
       marginTop: 50,
       color: 'gray',
       fontSize: 16,
       alignItems: 'center',
       textAlign: 'center',
   },
   submit:{
       marginTop: 50,
    height: 48,
    backgroundColor: 'background: rgba(189, 43, 38, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
});
export default Submitsuccess;