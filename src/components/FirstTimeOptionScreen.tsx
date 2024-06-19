// FirstTimeOptionScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import axios from "axios";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

type FirstTimeOptionScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'FirstTime'>;
  route: RouteProp<RootStackParamList, 'FirstTime'>;
};

const FirstTimeOptionScreen: React.FC<FirstTimeOptionScreenProps> = ({ route, navigation }) => {
    const { userId } = route.params;
    const [isSubmit, setIsSubmit] = useState(false);
    const [selectedOption, setSelectedOption] = useState('none');

    const checkUserGardens = async () => {
        try {
          const response = await axios.get("http://100.28.235.107/check_user_gardens.php?user_id=" + userId);
          console.log('Response Code:', response.status);
          navigation.navigate('UserGardens', {userId: userId});
        } catch (error) {
          if(error.response.status === 404) {
            console.log('Error:', error);
            navigation.navigate('GardenCode', {userId: userId});
          }
        }
    };

    const toggleStyle = (button) => {
        setSelectedOption(button);
    };

    const submitAction = () => {
        if(selectedOption == 'none') {
            Alert.alert('Escolha uma opção antes de seguir!');
        }
        else if(selectedOption == 'yes') {
            checkUserGardens();
        }
        else {
            Alert.alert('TODO');
        }
    };
    
    const dynamicYesStyle = {
        backgroundColor: selectedOption == 'no' || selectedOption == 'none' ? '#486523' : '#A5EA4F',
    };

    const dynamicNoStyle = {
        backgroundColor: selectedOption == 'yes' || selectedOption == 'none' ? '#486523' : '#A5EA4F',
    };

    return (
        <ImageBackground source={require('../../assets/hortapp-main-bg.png')} style={styles.background}>
        <View style={styles.container}>
            <Image source={require('../../assets/splash_logo.png')} style={styles.logo} />
            <View style={styles.footerButtons}>
                <Text style={styles.titleText}>Já registrou o Wi-Fi da sua horta?</Text>
                <View style={styles.rectangle}></View>
                <TouchableOpacity onPress={() => toggleStyle('yes')} style={[styles.yesCircle, dynamicYesStyle]}>
                    <Image source={require('../../assets/hortapp-logo-button.png')} style={styles.hortAppButton} />
                </TouchableOpacity>
                <Text style={styles.yesCircleText}>Sim!</Text>
                <TouchableOpacity onPress={() => toggleStyle('no')} style={[styles.noCircle, dynamicNoStyle]}>
                    <Image source={require('../../assets/hortapp-logo-button.png')} style={styles.hortAppButton}/>
                </TouchableOpacity>
                <Text style={styles.noCircleText}>Não!</Text>
                <TouchableOpacity onPress={() => submitAction()} style={styles.nextButton}>
                    <Text style={styles.nextText}>Seguir</Text>
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
  hortAppButton: {
    position: 'absolute',
    top: 12,
    left: 20
  },
  yesCircle: {
    position: 'absolute',
    top: 85,
    left: 40,
    width: 130,
    height: 130,
    borderRadius: 100, // half of the width or height
  },
  yesCircleText: {
    position: 'absolute',
    fontFamily: 'BalooExtraBold',
    top: 220,
    left: 75,
    color: '#A5EA4F',
    fontSize: 30
  },
  noCircle: {
    position: 'absolute',
    top: 85,
    right: 40,
    width: 130,
    height: 130,
    borderRadius: 100, // half of the width or height
    backgroundColor: '#486523',
  },
  noCircleText: {
    position: 'absolute',
    fontFamily: 'BalooExtraBold',
    top: 220,
    right: 75,
    color: '#A5EA4F',
    fontSize: 30
  },
  nextButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: 300,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#65B307',
    borderRadius: 10,
  },
  rectangle: {
    position: 'absolute',
    alignSelf: 'flex-start',
    top: 50,
    width: 250,
    height: 2,
    backgroundColor: '#84E509',
    borderRadius: 20,
    marginLeft: 30,
  },
  codeNotFound: {
    position: 'absolute',
    alignSelf: 'center',
    marginLeft: 30,
    top: 250,
    color: '#C9FE87',
    fontSize: 14,
  },
  enterCodeDesc: {
    position: 'absolute',
    alignSelf: 'flex-start',
    marginLeft: 30,
    top: 70,
    color: 'white',
    fontSize: 16,
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
  titleText: {
    color: "#E5FFC3",
    position: 'absolute',
    fontFamily: 'BalooExtraBold',
    fontSize: 22,
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 12
  },
  enterCodeTextLine: {
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
    height: 400,
    bottom: 0
  },
  codeInput: {
    position: 'absolute',
    alignSelf: 'flex-start',
    marginLeft: 29,
    width: 300,
    top: 100,
    color: '#FFF',
    backgroundColor: '#4A4A4A',
    borderRadius: 10,
    borderColor: '#FFF'
  },
});


export default FirstTimeOptionScreen;
