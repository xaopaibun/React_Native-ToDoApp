import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CheckBox,Button,StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, FlatList, Alert} from 'react-native';
 const Detail= ({navigation, route}) =>{
     return(
         <View style={styles.container}>
             <View style={styles.block}>
                      <View style={styles.block_title}>
                          <Text style={{fontSize: 16, lineHeight: 19, textAlign: 'left', color: '#FFFFFF', paddingLeft: 10}}>Result</Text>
                      </View>
                      <View style={styles.block_conten}>
                          <View style={[styles.flex,{height: 45}]}>
                              <Text style={styles.text}>Color:    <View style={{width: 25, height: 25, backgroundColor: route.params.color}}></View></Text>
                              <Text style={styles.text}>Size: {route.params.font_Size}</Text>
                              <Text style={styles.text}>Todo List: </Text>
                              <View>
                                  {
                                  route.params.arr.map( (text) => <Text style={{paddingLeft: 10, marginTop: 10}}> - {text}</Text>)
                                  }
                                  
                                 
                              </View>

                          </View>
                          
                      </View>
                  </View>
         </View>
     );
 }
const styles = StyleSheet.create({
   container:{
        flex: 1,
        margin: 20
   },
   block:{
       backgroundColor:'white',
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow:'hidden',
    borderWidth: 0.00001,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    
    elevation: 2.6,
    
    },
    block_title:{
        height: 34,
        backgroundColor: '#BD1313',
    
    justifyContent: 'center'
    },
    block_conten1:{
        flexDirection: 'row',
        margin: 10,
        justifyContent:'space-around',
        flexWrap:'wrap'
    },
   submit:{
    height: 48,
    backgroundColor: 'background: rgba(189, 43, 38, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  text:{
    borderBottomWidth: 1, margin: 10, padding: 5, fontSize: 16, borderBottomColor: 'rgba(204, 204, 204, 1)'
  }
});
export default Detail;
