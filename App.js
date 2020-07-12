import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Ionicons name="md-arrow-back" size={30} color="rgb(51,60,87)" />
      <Entypo name="grid" size={30} color="rgb(51,60,87)" />
      </View>
      <View style={styles.profile}>
        <View style={{margin: 10}}>
          <Image source={require("./assets/58543874_613579852387829_2877789265557716992_o.jpg")} style={styles.avatar} resizeMode="cover"/>
        </View>
        <View style={{margin: 5}}>
          <Text style={{fontSize: 21, fontWeight:'bold', marginTop: 5, marginBottom: 5}}>Phạm Đức Nghĩa</Text>
          <Text style={{fontSize: 15, color:POLO_BLUE_COLOR, marginTop: 5, marginBottom: 5}}>Developer</Text>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button1} onPress={() => alert('followed')}>
              <Text style={{textAlign:'center', fontWeight:'bold', color:'white', fontSize: 15}}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => alert('message sended')}>
              <Ionicons name="md-send" size={24} color="black" style={{alignSelf:'center'}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.statistical}>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize: 19, fontWeight:'bold'}}>210</Text>
          <Text style={{color:POLO_BLUE_COLOR}}>Photos</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize: 19, fontWeight:'bold'}}>15K</Text>
          <Text style={{color:POLO_BLUE_COLOR}}>Followers</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize: 19, fontWeight:'bold'}}>605</Text>
          <Text style={{color:POLO_BLUE_COLOR}}>Following</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>
        <View style={{flexDirection:'column'}}>
          {imgData.slice(0, centerImgData).map(item => {
            return <Image source={item.imgSource} style={styles.image}/>
          })}
        </View>
        <View style={{flexDirection:'column'}}>
          {imgData.slice(centerImgData).map(item => {
            return <Image source={item.imgSource} style={styles.image}/>
          })}
        </View>      
      </ScrollView>
    </View>
  );
}
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/2tYgp6Q-full-hd-desktop-wallpaper-1920x1080.jpg') },
  { id: 2, imgSource: require('./assets/4m3osds-full-hd-3d-wallpapers-1920x1080.jpg') },
  { id: 3, imgSource: require('./assets/117595.jpg') },
  { id: 4, imgSource: require('./assets/58543874_613579852387829_2877789265557716992_o.jpg') },
  { id: 5, imgSource: require('./assets/80970632_1068807603473542_4927132953793789952_n.jpg') },
  { id: 6, imgSource: require('./assets/i7aK3J2-full-hd-3d-wallpapers-1920x1080.jpg') }
];

const centerImgData = Math.floor(imgData.length / 2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 25,
    marginBottom: 20
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius:60,
  },
  profile: {
    flexDirection: 'row',
    justifyContent:'flex-start'
  },
  buttonView:{
    flexDirection: 'row',
    marginTop: 15
  },
  button1: {
    backgroundColor:FOLLOW_COLOR,
    borderRadius: 25,
    marginRight: 8,
    height: 35,
    width: 120,
    paddingTop: 5,
    shadowColor: POLO_BLUE_COLOR,
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  elevation: 24,
  },
  button2:{
    backgroundColor:SEND_MESSAGE_COLOR,
    borderRadius: 25,
    height: 35,
    width: 60,
    paddingTop: 5,
    shadowColor: POLO_BLUE_COLOR,
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  elevation: 24,
  },
  statistical: {
    justifyContent:'space-around', 
    flexDirection:'row', 
    marginTop: 15, 
    marginBottom: 15
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 20,
    margin: 10
  }
});

