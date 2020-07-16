import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import signupscreen from './signupscreen';


function Loginscreen({navigation}) {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
        style={styles.logo}
        source={{
          uri: 'https://thumbs.dreamstime.com/z/scooter-delivery-logo-icon-design-can-be-used-as-complement-to-125309062.jpg',
        }} />
      </View>
      <View style={styles.vcontainer}>
        <TextInput
        placeholder="username or email"
        placeholderTextColor='rgba(255,255,255,0.7)'
        style={styles.input}/>
        <TextInput
        placeholder="password"
        placeholderTextColor='rgba(255,255,255,0.7)'
        secureTextEntry
        style={styles.input}/>
      </View>
      <View style={styles.vcontainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text style={styles.signupfrontText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => {navigation.navigate('signup');}}>
          <Text style={styles.signupText}>
            SIGNUP
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
    </KeyboardAvoidingView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="signup" component={signupscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',

  },
  logo:{
  width:110,
  height:70,
  alignItems: 'center',
  marginTop:50,
  justifyContent: 'center',
},
logocontainer:{
  flexGrow:1,
  alignItems: 'center',
  justifyContent: 'center',
},
input:{
  height:40,
  backgroundColor:'rgba(255,255,255,0.2)',
  marginBottom:10,
  color:'#FFF',
  paddingHorizontal:10,
  borderRadius:20
},
vcontainer:{
  padding:20,

},
buttonContainer:{
  backgroundColor:'#2980b9',
  paddingVertical:11,
  marginTop:-25,
  borderRadius:30
},
buttonText:{
  textAlign:'center',
  color:'#FFFFFF',
},
signupText:{
  textAlign:'center',
  color:'black'
},
signupfrontText:{
  textAlign:'center',
  color:'#2f3542',
  marginTop:10
}
});
