// GardenCodeScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import axios from "axios";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

type GardenCodeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'GardenCode'>;
  route: RouteProp<RootStackParamList, 'GardenCode'>;
};

const GardenCodeScreen: React.FC<GardenCodeScreenProps> = ({ route, navigation }) => {
  const { userId } = route.params;
  var data;
  const [gardenCode, setGardenCode] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const fetchGardenUsingCode = async () => {
      try {
        const response = await axios.get("http://54.225.18.148/get_measures.php?garden_code=" + gardenCode);
        data = response.data[0];
        console.log(data);
        setIsSubmit(false);
        navigation.navigate('GardenPlants', {gardenCode: gardenCode})
      } catch (error) {
        if(error.response.status === 404) {
          Alert.alert('Ops!', 'O código inserido não é válido');
          setIsSubmit(false);
        }
      }
    };
    
    if (isSubmit) fetchGardenUsingCode();
  }, [isSubmit]);

  const handleSubmit = () => {
    if (gardenCode !== "") {
      setIsSubmit(true);
    } else {
      Alert.alert('Ops!', 'O campo de código não pode ficar em branco');
    }
  };

  return (
    <ImageBackground source={require('../../assets/hortapp-main-bg.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/splash_logo.png')} style={styles.logo} />
        <View style={styles.footerButtons}>
          <Text style={styles.enterCodeText}>Insira o código</Text>
          <View style={styles.rectangle}></View>
          <Text style={styles.enterCodeDesc}>Insira o código de registro da sua horta</Text>
          <TextInput placeholder="Insira aqui" style={styles.codeInput} autoCapitalize='none' onChangeText={(text) => setGardenCode(text)} />
          <TouchableOpacity onPress={() => handleSubmit()} style={styles.nextButton}>
            <Text style={styles.nextText}>Seguir</Text>
          </TouchableOpacity>
          <Text style={styles.codeNotFound}>Não sei onde está meu código</Text>
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
    top: 180,
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
  enterCodeText: {
    color: "#E5FFC3",
    position: 'absolute',
    fontFamily: 'BalooExtraBold',
    fontSize: 35,
    alignSelf: 'flex-start',
    marginLeft: 30,
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
    height: 300,
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
  }
});


export default GardenCodeScreen;
