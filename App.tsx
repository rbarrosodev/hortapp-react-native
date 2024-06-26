// In App.js in a new project

import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import SplashScreenScreen from './src/components/SplashScreen';
import MainScreen from './src/components/MainScreen';
import LoginScreen from './src/components/LoginScreen';
import GardenCodeScreen from './src/components/GardenCodeScreen';
import PlantSelectScreen from './src/components/PlantSelectScreen';
import FirstTimeOptionScreen from './src/components/FirstTimeOptionScreen';
import UserGardensScreen from './src/components/UserGardensScreen';
import KeepAwake from 'react-native-keep-awake'
import PlantComponentScreen from './src/components/PlantComponentScreen';
import ConnectionInstructionsScreen from './src/components/ConnectionInstructionsScreen';



const Stack = createNativeStackNavigator();


function App() {
  useEffect(() =>{
    KeepAwake.activate();
    return () => KeepAwake.deactivate();
  }, []);

  useEffect(() => {
    changeNavigationBarColor('#19240A'); // Change this color to your desired color
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#19240A" barStyle="light-content"/>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreenScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FirstTime" component={FirstTimeOptionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConnectionInstructions" component={ConnectionInstructionsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GardenCode" component={GardenCodeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserGardens" component={UserGardensScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PlantComponent" component={PlantComponentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PlantSelect" component={PlantSelectScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;