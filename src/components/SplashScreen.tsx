// SplashScreen.tsx

import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Define your navigation params type

type SplashScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home'); // Navigate to the main app screen after animation
    }, 3000); // Adjust the duration as needed
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animatable.Image
        animation={{
          from: { translateY: 0, translateX: 0 },
          to: { translateY: 400, translateX: -400 },
        }}
        duration={3000}
        source={require('../../assets/splash_logo.png')}
        style={{ width: 3000, height: 3000 }}
        resizeMode='contain'
      />
    </View>
  );
};

export default SplashScreen;
