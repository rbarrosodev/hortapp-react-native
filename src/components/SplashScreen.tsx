// SplashScreen.js
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SplashScreen from 'react-native-splash-screen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type

type SplashScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
};


const SplashScreenScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation={{
          from: { translateX: 0, translateY: 0 },
          to: { translateX: -300, translateY: 300 },
        }}
        duration={2000}
        easing="linear"
        source={require('../../assets/splash.png')}
        style={styles.image}
      />
      <Animatable.Image
        animation={{
          from: { translateY: 0 },
          to: { translateY: -700 },
        }}
        duration={2000}
        easing="linear"
        source={require('../../assets/splash_logo.png')}
        style={styles.imageLogo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 1000,
    height: 1400  // Adjust as needed
  },
  imageLogo: {
    width: 200,
    height: 200  // Adjust as needed
  }
});

export default SplashScreenScreen;
