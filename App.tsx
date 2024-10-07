import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View, StyleSheet } from 'react-native';

// Create Stack Navigator
const Stack = createNativeStackNavigator();

// Define Screen Components
const ScreenOne = ({ navigation }: { navigation: any }) => (
  <View style={styles.container}>
    <Text style={styles.text}>This is Screen One</Text>
    <Button title="Go to Screen Two" onPress={() => navigation.navigate('ScreenTwo')} />
  </View>
);

const ScreenTwo = ({ navigation }: { navigation: any }) => (
  <View style={styles.container}>
    <Text style={styles.text}>This is Screen Two</Text>
    <Button title="Go to Screen Three" onPress={() => navigation.navigate('ScreenThree')} />
  </View>
);

const ScreenThree = ({ navigation }: { navigation: any }) => (
  <View style={styles.container}>
    <Text style={styles.text}>This is Screen Three</Text>
    <Button title="Go to Screen Four" onPress={() => navigation.navigate('ScreenFour')} />
  </View>
);

const ScreenFour = ({ navigation }: { navigation: any }) => (
  <View style={styles.container}>
    <Text style={styles.text}>This is Screen Four</Text>
    <Button title="Go to Screen Five" onPress={() => navigation.navigate('ScreenFive')} />
  </View>
);

const ScreenFive = ({ navigation }: { navigation: any }) => (
  <View style={styles.container}>
    <Text style={styles.text}>This is Screen Five</Text>
    <Button title="Go back to Screen One" onPress={() => navigation.navigate('ScreenOne')} />
  </View>
);

// App Component with NavigationContainer
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenOne">
        <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ title: 'Screen One' }} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ title: 'Screen Two' }} />
        <Stack.Screen name="ScreenThree" component={ScreenThree} options={{ title: 'Screen Three' }} />
        <Stack.Screen name="ScreenFour" component={ScreenFour} options={{ title: 'Screen Four' }} />
        <Stack.Screen name="ScreenFive" component={ScreenFive} options={{ title: 'Screen Five' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles for the screens
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
