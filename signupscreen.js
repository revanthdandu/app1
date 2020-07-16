import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import App from './App';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function signupscreen({navigation}) {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Text style={styles.headertext} animation="fadeInRightBig">
          Welcome!
          </Animatable.Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.footer}>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.footertext}>
          Signup Here!
        </Text>
        <Text style={styles.footertextin}>Email</Text>
        <View style={styles.footertextinemail}>
          <FontAwesome name="user-o" color="#05375a" size={18}/>
          <TextInput
          placeholder="Your email"
          placeholderTextColor='#05375a'
          style={styles.input}/>
          <Feather name="check-circle" color="green" size={18}/>
        </View>
        <Text style={styles.footertextin}>Password</Text>
        <View style={styles.footertextinemail}>
          <FontAwesome name="lock" color="#05375a" size={18}/>
          <TextInput
          placeholder="Your password"
          placeholderTextColor='#05375a'
          secureTextEntry
          style={styles.input}/>
          <Feather name="eye-off" color="grey" size={18}/>
        </View>
        <Text style={styles.footertextin}>Confirm Password</Text>
        <View style={styles.footertextinemail}>
          <FontAwesome name="lock" color="#05375a" size={18}/>
          <TextInput
          placeholder="Your password"
          placeholderTextColor='#05375a'
          secureTextEntry
          style={styles.input}/>
          <Feather name="eye-off" color="grey" size={18}/>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            SIGNUP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Login');}} style={styles.buttonloginContainer}>
          <Text style={styles.buttonloginText}>
            SIGNIN
          </Text>
        </TouchableOpacity>

      </Animatable.View>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',

  },
  header:{
    flex:1,
    justifyContent: 'flex-end',
    paddingBottom:50,
    paddingHorizontal:30

  },
  footer:{
    flex:3,
    backgroundColor:'#fff',
    borderTopLeftRadius:35,
    borderTopRightRadius:35,
    justifyContent: 'flex-start',
    paddingTop:30,
    paddingLeft:12
  },
  headertext:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:30
  },
  footertext:{
    color:'#05375a',
    fontWeight:'bold',
    fontSize:30,
    marginTop:-15
  },
  footertextin:{
    color:'#05375a',
    fontSize:20,
    marginTop:5
  },
  footertextinemail:{
    marginTop:10,
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2',
    paddingBottom:10,
    marginRight:20

  },
  input:{
    flex:1,
    marginTop:-5,
    paddingLeft:10,
    color:'#05375a'
  },
  buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:11,
    marginTop:45,
    borderRadius:30,
    marginRight:25
  },
  buttonText:{
    textAlign:'center',
    color:'#FFFFFF',
  },
  buttonloginContainer:{
    borderColor:'#3498db',
    borderWidth:1,
    paddingVertical:11,
    marginTop:20,
    borderRadius:30,
    marginRight:25
  },
  buttonloginText:{
    textAlign:'center',
    color:'#2980b9',
  }
});
