// In App.js in a new project

import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import SplashScreenScreen from './src/components/SplashScreen';
import MainScreen from './src/components/MainScreen';
import LoginScreen from './src/components/LoginScreen';
import SignupScreen from './src/components/SignupScreen';
import GardenSelectScreen from './src/components/GardenSelectScreen';
import GardenCodeScreen from './src/components/GardenCodeScreen';
import GardenPlantsScreen from './src/components/GardenPlantsScreen';
import PlantSelectScreen from './src/components/PlantSelectScreen';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    changeNavigationBarColor('#19240A'); // Change this color to your desired color
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#19240A" barStyle="light-content"/>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Splash" component={SplashScreenScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GardenSelect" component={GardenSelectScreen} />
        <Stack.Screen name="GardenCode" component={GardenCodeScreen} />
        <Stack.Screen name="GardenPlants" component={GardenPlantsScreen} />
        <Stack.Screen name="PlantSelect" component={PlantSelectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;