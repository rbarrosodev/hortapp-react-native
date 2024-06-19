// LoginScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import axios from "axios";


type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '311266848901-7aolmkfau36j3geuao1mtoddisgecrbq.apps.googleusercontent.com',
    });
  }, [])

  async function checkUserGardens(userId) {
    try {
      const response = await axios.get("http://100.28.235.107/check_user_gardens.php?user_id=" + userId);
      console.log('Response Code:', response.status);
      navigation.navigate('UserGardens', {userId: userId});
    } catch (error) {
      if(error.response.status === 404) {
        console.log('Error:', error);
        navigation.navigate('FirstTime', {userId: userId})
      }
    }
  };

  async function onGoogleButtonPress() {
    try {
    // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken, user } = await GoogleSignin.signIn();
    
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
      // Sign-in the user with the credential
      auth().signInWithCredential(googleCredential);

      checkUserGardens(user.id);
    } catch (error) {
      console.log(error);
    }
  }

  async function logoutAccount() {
    try {
      GoogleSignin.revokeAccess()
      return auth().signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ImageBackground source={require('../../assets/hortapp-main-bg.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/splash_logo.png')} style={styles.logo} />
        <View style={styles.footerButtons}>
          <Text style={styles.signinText}>Acesse sua conta</Text>
          <View style={styles.rectangle}></View>
          <TouchableOpacity onPress={() => onGoogleButtonPress()}>
            <Image source={require('../../assets/google_button.png')} style={styles.googleButton}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => logoutAccount().then(() => console.log('User signed out!'))} style={styles.nextButton}>
            <Text style={styles.nextText}> Logout  <FontAwesome6 name="right-from-bracket" size={15} color="#A5EA4F" /></Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain'
  },
  nextButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: 150,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#A5EA4F', 
    borderWidth: 2,// Change this to match your design
    borderRadius: 20,
  },
  rectangle: {
    position: 'absolute',
    alignSelf: 'flex-start',
    top: 50,
    width: 200,
    height: 2,
    backgroundColor: '#84E509',
    borderRadius: 20,
    marginLeft: 30,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative' // Optional: overlay to darken the image
  },
  homeText: {
    color: "#fff",
    fontFamily: 'ArialRoundedMTBold',
    fontSize: 32,
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  signinText: {
    color: "#E5FFC3",
    position: 'absolute',
    fontFamily: 'BalooExtraBold',
    fontSize: 35,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  signinTextLine: {
    color: "#E5FFC3",
    position: 'absolute',
    top: 20,
    fontFamily: 'BalooExtraBold',
    fontSize: 35,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  hortappDesc: {
    color: "#8C9184",
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  googleButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: 75,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextText: {
    color: "#fff",
    fontFamily: 'Inter-SemiBold',
    fontSize: 19,
  },
  logo: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 50, // Fix at the top of the container
  },
  footerButtons: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#19240A',
    padding: 10,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    height: 300,
    bottom: 0
  }
});

export default LoginScreen;
