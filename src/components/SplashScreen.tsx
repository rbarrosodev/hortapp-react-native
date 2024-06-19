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
  useEffect(() => {
    // Simulate a loading task or delay
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 4200); // 3 seconds delay

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigation]);

  const customAnimation = {
    0: { opacity: 0, translateY: -50 },
    0.5: { opacity: 1, translateY: 0 },
    1: { opacity: 0, translateY: 50 },
  };
  
  const animatableRef = useRef<Animatable.AnimatableComponent<any, any>>(null);


  const handleAnimationEnd = () => {
    // Trigger the next animation
    animatableRef.current?.animate(
      {
        0: { translateY: -700, scaleX: 1, scaleY: 1 },
        1: { translateY: -950, scaleX: 0.5, scaleY: 0.5 },
      },
      2000,
      'linear'
    );
  };


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
        ref={animatableRef}
        animation={{
          from: { translateY: 0, scaleX: 1, scaleY: 1 },
          to: { translateY: -700, scaleX: 1, scaleY: 1 },
        }}
        duration={2000}
        easing="linear"
        source={require('../../assets/splash_logo.png')}
        style={styles.imageLogo}
        onAnimationEnd={handleAnimationEnd}
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
    width: 400,
    height: 400  // Adjust as needed
  }
});

export default SplashScreenScreen;
