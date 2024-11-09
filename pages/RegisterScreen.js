import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password,
      });
      console.log("I am here");
      // If login is successful
      if (response.status === 500) {
        Alert.alert('Registeration Successful!');
        // Navigate to another screen or handle login success
        navigation.navigate('HomeScreen');
      }
    } catch (error) {
      Alert.alert('error', error.response?.data?.message || 'Enter valid details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create yout account</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <Button title={loading ? 'Registering new user..' : 'Register'} onPress={handleLogin} disabled={loading}  />

      {/* Optional: Forgot password or other actions */}
      <Text style={styles.link} onPress={() => navigation.navigate('HomeScreen')}>
        HomeScreen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  link: {
    color: 'blue',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default RegisterScreen;













/*import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';

//import AsyncStorage from '@react-native-community/async-storage';

//import LanguageScreen from './LanguageScreen';
//import SignInScreen from './SignInScreen';
//import CreateAccountScreen from './CreateAccountScreen';
//import PatientsInfoScreen from './PatientsInfoScreen';

const SampleScreen = ({ navigation }) => {
  return (
    <View style={styles.mainBody}>
      <StatusBar style={styles.statusBarStyle} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <TouchableOpacity
          style={styles.languageButtonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate(LanguageScreen)}>
          <Text style={styles.buttonIconTextStyle}>
            English
          </Text>
          <View style={styles.buttonIconSeparatorStyle} />
          <Image
            source={require('../assets/Image/logo.jpeg')}
            style={styles.IconStyle}
          />
        </TouchableOpacity>
      
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
              <Image style={styles.mainImageStyle}
                source={require('../assets/Image/logo.jpeg')} />
            </View>
            <View style={styles.headingTextStyle}>
              <Text style={styles.helloTextStyle}>
                Welcome to </Text> 
              <Text style={styles.boldtext}>Mymedcom</Text>
            </View>

            <Text style={styles.quoteText}>
              This app will guide you to communicate with your loved once.
            </Text>

            <TouchableOpacity style={styles.signInButtonStyle}
              onPress={() => navigation.navigate(SignInScreen)}>
              <Text style={styles.signInButtonTextStyle}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createAccountButtonStyle}
              onPress={() => navigation.navigate(CreateAccountScreen)}>
              <Text style={styles.createAccountTextStyle}>Create Account</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default SampleScreen;

const styles = StyleSheet.create({
  statusBarStyle:{
    backgroundColor: '#E5E5E5',
  },
  mainBody: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  languageButtonStyle: {
    flexDirection:'row',
    alignSelf: 'flex-end',
    backgroundColor: '#EBEBEB',
    borderColor: '#455A64',
    borderWidth:1,
    height: 40,
    width: '25%',
    marginRight: 35,
    borderRadius: 30,
    marginBottom: 40,
    marginTop:'30%',
  },
  buttonIconTextStyle:{
    color: '#455A64',
    paddingVertical: 10,
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 20,
    fontFamily: 'Lato-Regular',
  },  
  buttonIconSeparatorStyle: {
    backgroundColor: '#EBEBEB',
    width: 5,
  },
  headingTextStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  helloTextStyle: {
    color: '#455A64',
    fontSize: 30,
    fontFamily: 'Nunito-Regular',
  },
  boldtext: {
    fontFamily: 'Nunito-Regular',
    color: '#455A64',
    fontSize: 30,
    fontWeight: 'bold',
  },
  quoteText: {
    fontSize: 20,
    fontFamily: 'Lato-Regular',
    color: '#263238',
    textAlign: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginBottom:20,
  },
  signInButtonTextStyle: {
    color: '#232F39',
    paddingVertical: 12,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
  },
  signInButtonStyle: {
    backgroundColor: '#F8D57E',
    height: 52,
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 15,
  },
  createAccountButtonStyle: {
    backgroundColor: '#E5E5E5',
    borderColor: '#455A64',
    borderWidth: 2,
    height: 52,
    borderRadius: 50,
    marginLeft: 35,
    marginRight: 35,
  },
  createAccountTextStyle: {
    color:'#455A64',
    fontFamily: 'Nunito-Regular',
    paddingVertical: 12,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
  },  
  mainImageStyle:
  {
    width: '90%',
    height: '60%',
  },
  IconStyle: {
    height: '50%',
    width: '15%',
    resizeMode: 'stretch',
    alignItems: 'center',
    marginTop: 10
  },
});

*/