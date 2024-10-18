import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <Text style={styles.subtitle}>This is where your journey begins.</Text>

      {/* Button to navigate to Profile Screen */}
      <Button 
        title="Register New User" 
        onPress={() => navigation.navigate('RegisterScreen')} 
      />

      {/* Button to navigate to Settings Screen */}
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
});

export default HomeScreen;
