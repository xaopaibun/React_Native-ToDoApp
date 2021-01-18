import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CheckBox,Button,StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList, Alert} from 'react-native';
import item from '../Components/item';
// import LinearGradient from 'react-native-linear-gradient';
// import CheckBox from '@react-native-community/checkbox';
// import Font_Size from '../Components/Font_Size';
const Item = ({item}, props) =>{
  const [isSelected, setSelection] = React.useState(false);
  const [item_dcchon, setitem_dcchon] = React.useState('');
  const sendata = () =>{
    console.log(item.text);
    props.data(item.text);
    
  };
  return(
    <View style={{margin: 10, flexDirection: 'row'}}>
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          onChange ={() =>{
            if(!isSelected) {
              setitem_dcchon(item.text);
              // console.log(item.text);
              () => sendata();
            }
          }}
        
        />
      <Text style={{fontSize: 14, color: 'black'}}>{item.text}</Text>
    </View>
  );
}

const Home = ({navigation}) =>{
  
  const [color, setColor] = React.useState({id : '3', color : '#001AFF'});
  const [font_Size, setFontSize] = React.useState(10);
  const [text, settext] = React.useState('');
  const [list, setlist] =  React.useState([]);
  const [active, setactive] =  React.useState(false);
  const [arr, setArr] = React.useState(['React_Native', 'PHP', 'Node JS']);
  const MauSac = [{id : '1', color: '#FF0000'}, {id: '2', color: '#05FF00'},{id : '3', color: '#001AFF'}, {id: '4', color: '#00FFF0'}];
  MangDcChon = (item) => {
    console.log('hiugyug');
    setArr((abc) => {
      return [
        item,
        ...abc
      ];
    });
    // console.log(arr);
  }
 
  //var arr = [];
  const done = (text) =>{
    if(text === ''){
      Alert.alert("Thông báo","Bạn chưa nhập gì cả. Mời bạn nhập lại!!");
    }
    else{
      setlist((list) =>{ 
        return [
            {text: text, id : Math.random().toString()},
            ...list
        ]
    });
    settext('');
    
    }
  }
  const OnSubmit = () =>{
    if(color === '' ){
      Alert.alert("Thông báo","Bạn chưa chọn màu. Mời bạn chọn màu!!");
    }
    else if(list.length == 0){
      Alert.alert("Thông báo","Bạn chưa nhập text. Mời bạn nhập text!!");
    }
    else{
     
      navigation.navigate('Submitsuccess', { color, font_Size, arr });
    }
 
  }
    return(
        <View style={styles.container}>
           
            <View style={styles.container_content}>
              <View style={styles.flex}>
                  <View style={styles.block}>
                      <View style={styles.block_title}>
                        {/* <LinearGradient colors={['BD1313', 'FF8080']}> */}
                            <Text style={{fontSize: 16, lineHeight: 19, textAlign: 'left', color: '#FFFFFF',paddingLeft: 10}}>Color picker</Text>
                        {/* </LinearGradient> */}
                         
                      </View>
                      <View style={styles.block_conten1}>
                          {
                          MauSac.map((value) =>{
                            return(
                              <TouchableOpacity  onPress={() =>{setColor(value )}} style={{width: 20, height: 20, backgroundColor: value.color, borderColor: color.id === value.id  ? '#000' : value.color, borderWidth: 2}}></TouchableOpacity>
                            );
                            
                          })}
                            
                      </View>
                  </View>
                  <View style={styles.block}>
                      <View style={styles.block_title}>
                          <Text style={{fontSize: 16, lineHeight: 19, textAlign: 'left', color: '#FFFFFF', paddingLeft: 10}}>FontSize</Text>
                      </View>
                      <View style={styles.block_conten}>
                          <View style={[styles.flex,{height: 45}]}>
                              <Text style={{width: 35, marginTop: 15, paddingLeft: 5}}>Size : </Text>
                              
                              <View style={styles._input}>
                                  <Text style={{padding: 5}}>{font_Size}</Text>
                              </View>
                              <View style={{width: 25, height: 20,  position: 'absolute', top: 15, right: 15, zIndex: 1111, }}>
                                <Text style={{color: '#CFCFCF'}}>(px)</Text>
                              </View>
                          </View>
                          <View style={styles.flex}>
                              <TouchableOpacity onPress= {() =>{setFontSize(font_Size + 1); }}style={styles.nut}><Text style={{color: '#FFFFFF'}}>UP</Text></TouchableOpacity>
                              <TouchableOpacity  onPress= {() =>{setFontSize(font_Size - 1); }}style={styles.nut}><Text style={{color: '#FFFFFF'}}>DOWN</Text></TouchableOpacity>
                          </View>
                      </View>
                  </View> 
                   {/* <Font_Size size = {font_Size}/> */}
              </View>
              <View style={styles.additem}>

               
                  <TextInput onChangeText={(value) => settext(value)} value={text} placeholder='Enter todo here' style={styles.input}/>
                 
                  <TouchableOpacity  onPress= {() =>{ done(text) }}style={[styles.nut, {height: 40, width: 74, marginTop: 5}]}><Text style={{color: '#FFFFFF'}}>Done</Text></TouchableOpacity>
              </View>
              <View style={styles.List_item}>
                <View style={styles.List_item_header}></View>
                <View style={styles.List_item_content}>
                  <View style={styles.block_title}>
                    <Text style={{fontSize: 16, lineHeight: 19, textAlign: 'left', color: '#FFFFFF',paddingLeft: 10}}>TodoList</Text>
                  </View>
                    <ScrollView>
                      <FlatList  keyExtractor={(item) => item.id}  data={list} renderItem={({item}) => <Item item={item} data ={MangDcChon} />}></FlatList> 
                    </ScrollView>
                      
                </View>
              </View>
              <View style={styles.result}>
                  <View style={styles.block_title}>
                      <Text style={styles.text_title}> Result</Text>
                  </View>
                  <View style={{margin: 5, padding: 5}}>
                  <Text style={{fontSize: font_Size, color: color.color}}>{arr.map((value) =>value + ', ')}</Text>
                  {/* <FlatList
                        data={list}
                        renderItem={({ item }) => 
                        {
                          if(!item.isSelected){
                            arr.push(item.text);
                            console.log(arr);
                            return(
                              <Text style={{fontSize: font_Size, color: color.color}}>{item.text}</Text>
                            );
                          }
                        }
                       
                      }
                    /> */}
                     
                     

                  </View>
              </View>
              <TouchableOpacity style={styles.submit} onPress={OnSubmit}><Text style={{color: 'white', fontSize: 20}}>Submit</Text></TouchableOpacity>
            </View>  
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
       
    },
    container_content:{
      margin: 10
    },
    flex:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    block_conten1:{
        flexDirection: 'row',
        margin: 10,
        justifyContent:'space-around',
        flexWrap:'wrap'
    },
    header:{
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'coral'
    },
    input:{
      flex: 3, backgroundColor: '#FFFFFF', borderRadius: 5, borderWidth: 0.00001, shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        borderRadius: 8,
        elevation: 2.6,
        paddingLeft: 12,
        marginRight: 20,
    },
    block:{
        width: 160,
        height: 113,
        borderWidth: 0.00001,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        borderRadius: 8,
        elevation: 2.6,
    },
    block_title:{
        height: 34,
        backgroundColor: '#BD1313',
       borderTopRightRadius: 8,
       borderTopStartRadius: 8,
       justifyContent: 'center'
    },
    _input:{
        backgroundColor: 'rgba(243, 243, 243, 1)',
        borderRadius: 5,
        width: 114,
        height: 30,
        marginTop:10,
        position: 'relative',
    },
    nut:{
        backgroundColor:'#BD2B26',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 28
    },
    additem:{
        flexDirection: 'row',
        marginTop: 30
    },
    List_item:{
      marginTop: 20,
      height: 200,
      borderWidth: 0.00001,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        borderRadius: 8,
        elevation: 2.6,
        overflow: 'hidden'
    },
    submit:{
      height: 48,
      backgroundColor: 'background: rgba(189, 43, 38, 1)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 24,
    },
    result:{
      height: 'auto',
      marginBottom: 50,
      marginTop: 30,
      borderWidth: 0.00001,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        borderRadius: 8,
        elevation: 1.6,
        overflow: 'hidden'
    },
    text_title:{
      fontSize: 16, lineHeight: 19, textAlign: 'left', color: '#FFFFFF',paddingLeft: 10
    }
   
});
export default Home;