import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

type MainScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Main'>;
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/hortapp-main-bg.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/splash_logo.png')} style={styles.logo} />

        <View style={styles.footerButtons}>
          <Text style={styles.homeText}>Seja bem-vindo ao</Text>
          <Text style={styles.hortappText}>HORTAPP</Text>
          <Text style={styles.hortappDesc}>
          Aqui, sua horta é cuidada com tecnologia. 
          Acompanhe o crescimento das suas {'\n'}
          plantas e colha os frutos do seu esforço, {'\n'}
          tudo diretamente do seu celular. {'\n'}{'\n'}

          O verde mais perto de você do que nunca!
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Login') } style={styles.nextButton}>
            <Text style={styles.nextText}> Próximo  <FontAwesome6 name="arrow-right" size={15} color="#A5EA4F" /></Text>
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
  hortappText: {
    color: "#65B307",
    fontFamily: 'BalooExtraBold',
    fontSize: 40,
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  hortappDesc: {
    color: "#8C9184",
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  nextButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 10,
    right: 10,
    width: 125,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#A5EA4F', 
    borderWidth: 2,// Change this to match your design
    borderRadius: 20,
  },
  nextText: {
    color: "#A5EA4F",
    fontFamily: 'Inter-SemiBold',
    fontSize: 19,
    alignSelf: 'flex-start',
    marginLeft: 10
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

export default MainScreen;




