// UserGardensScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import axios from "axios";


type UserGardensScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'UserGardens'>;
};

const UserGardensScreen: React.FC<UserGardensScreenProps> = ({ navigation }) => {
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
    <ImageBackground source={require('../../assets/hortapp-usergarden-bg.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.rectangle}>
            <Image source={require('../../assets/hortapp-usergarden-logo.png')} style={styles.headerHortappLogo}/>
            <Text style={styles.headerHortapp}>HORTAPP</Text>
        </View>
        <View style={styles.questionBtn}>
            <FontAwesome6 name="question" size={20} color="#A5EA4F" style={styles.questionIcon} />
        </View>
        <View style={styles.userGardenMenu}>
            <Text style={styles.menuHeaderTitle}>Hortas Conectadas</Text>
        </View>
        <View style={styles.footerButtons}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.homeButton}>
            <FontAwesome6 name="house" size={24} color="white" />
            <Text style={styles.homeText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('teste')} style={styles.addGardenButton}>
            <FontAwesome6 name="plus" size={80} color="white" style={styles.plusIcon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.profileButton}>
            <FontAwesome6 name="user" size={24} color="white" />
            <Text style={styles.homeText}>Perfil</Text>
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
  questionIcon: {
    position: 'absolute',
    left: 5.5,
    top: 1
  },
  plusIcon: {
    position: 'absolute',
    alignSelf: 'center',
    top: 18
  },
  addGardenButton: {
    position: 'absolute',
    bottom: 70,
    width: 130,
    height: 130,
    borderRadius: 100, // half of the width or height
    backgroundColor: '#486523',
    borderColor: '#fff',
    borderWidth: 5
  },
  homeButton: {
    position: 'absolute',
    top: 30, // Adjust according to your layout
    left: 30, // Adjust according to your layout
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeText: {
    color: "#fff",
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 5
  },
  profileButton: {
    position: 'absolute',
    top: 30,
    right: 30,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuHeaderTitle: {
    color: '#19240A',
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontFamily: 'Inter-SemiBold',
    fontSize: 18
  },
  headerHortappLogo: {
    position: 'absolute',
    width: 23.43,
    height: 28.12,
    marginLeft: 10,
    marginTop: 10
  },
  headerHortapp: {
    position: 'absolute',
    fontFamily: 'BalooExtraBold',
    color: '#65B307',
    alignSelf: 'center',
    fontSize: 30,
    left: 45,
    top: 3
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
    top: 20,
    left: -10,
    width: 190,
    height: 50,
    backgroundColor: '#E5FFC3',
    borderRadius: 40,
    marginLeft: 30,
  },
  questionBtn: {
    position: 'absolute',
    top: 28,
    right: 20,
    width: 30,
    height: 30,
    backgroundColor: '#E5FFC3',
    borderRadius: 40,
    marginLeft: 30,
    borderColor: '#A5EA4F', 
    borderWidth: 3
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
  userGardenMenu: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    height: 700,
    bottom: 0
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
    height: 125,
    bottom: 0
  }
});

export default UserGardensScreen;
