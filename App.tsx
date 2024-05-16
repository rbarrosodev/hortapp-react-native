// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/components/SplashScreen';
import MainScreen from './src/components/MainScreen';
import LoginScreen from './src/components/LoginScreen';
import SignupScreen from './src/components/SignupScreen';
import GardenSelectScreen from './src/components/GardenSelectScreen';
import GardenCodeScreen from './src/components/GardenCodeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="GardenSelect" component={GardenSelectScreen} />
        <Stack.Screen name="GardenCode" component={GardenCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;