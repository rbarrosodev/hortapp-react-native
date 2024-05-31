import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { Picker } from '@react-native-picker/picker';

const images = {
  Alecrim: require('../../assets/Alecrim.png'),
  Boldo: require('../../assets/Boldo.png'),
  Cebolinha: require('../../assets/Cebolinha.png'),
  Coentro: require('../../assets/Coentro.png'),
  Hortelã: require('../../assets/Hortelã.png'),
  Manjericão: require('../../assets/Manjericão.png'),
  Outros: require('../../assets/Outros.png'),
  Orégano: require('../../assets/Orégano.png'),
  Salsinha: require('../../assets/Salsinha.png'),
  TomateCereja: require('../../assets/TomateCereja.png'), 
  Tomilho: require('../../assets/Tomilho.png'), 
  // Add other images as needed
};

type MainScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Main'>;
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const [selectedLuminosity, setSelectedLuminosity] = useState('any');

  const handlePlantLuminosityChange = (itemValue) => {
    setSelectedLuminosity(itemValue);
  };

  return (
    <ImageBackground source={require('../../assets/hortapp-bg1.png')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome6 name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.editTitleButton}>
          <FontAwesome6 name="pencil" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.gardenTitle}>Horta Cozinha 1</Text>
        <View style={styles.luminosityPicker}>
          <Picker selectedValue={selectedLuminosity} onValueChange={handlePlantLuminosityChange}>
            <Picker.Item label="Inserir nível de luminosidade" value="default" />
            <Picker.Item label="Qualquer nível" value="any" />
            <Picker.Item label="Baixo" value="low" />
            <Picker.Item label="Alto" value="high" />
          </Picker>
        </View>
        <View style={styles.firstCard}>
          <View style={styles.iconContainer}>
            <Image source={images['Alecrim']} style={styles.icon} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Vaso 1: <Text style={styles.plantName}>Alecrim</Text></Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}><FontAwesome6 name="sun" size={16} color="#65B307" /> Luz Baixa (3.000 lumens)</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}><FontAwesome6 name="droplet" size={16} color="#65B307" /> 58% de Umidade</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}><FontAwesome6 name="temperature-full" size={16} color="#65B307" /> 28°C</Text>
            </View>
          </View>
        </View>
        <View style={styles.secondCard}>
          <View style={styles.iconContainer}>
            <Image source={images['Alecrim']} style={styles.icon} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Vaso 1: <Text style={styles.plantName}>Alecrim</Text></Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}><FontAwesome6 name="sun" size={16} color="#65B307" /> Luz Baixa (3.000 lumens)</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}><FontAwesome6 name="droplet" size={16} color="#65B307" /> 58% de Umidade</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}><FontAwesome6 name="temperature-full" size={16} color="#65B307" /> 28°C</Text>
            </View>
          </View>
        </View>
        <View style={styles.thirdCard}>
          <View style={styles.iconContainer}>
            <Image source={images['Alecrim']} style={styles.icon} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Vaso 1: <Text style={styles.plantName}>Alecrim</Text></Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}><FontAwesome6 name="sun" size={16} color="#65B307" /> Luz Baixa (3.000 lumens)</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}><FontAwesome6 name="droplet" size={16} color="#65B307" /> 58% de Umidade</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}><FontAwesome6 name="temperature-full" size={16} color="#65B307" /> 28°C</Text>
            </View>
          </View>
        </View>

        <View style={styles.footerButtons}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.homeButton}>
            <FontAwesome6 name="house" size={24} color="white" />
            <Text style={styles.homeText}>Início</Text>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(16,36,10,0.77)',
    position: 'relative' // Optional: overlay to darken the image
  },
  homeButton: {
    position: 'absolute',
    top: 20, // Adjust according to your layout
    left: 40, // Adjust according to your layout
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeText: {
    color: "#fff"
  },
  profileButton: {
    position: 'absolute',
    top: 20,
    right: 40,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40, // Adjust according to your layout
    left: 20, // Adjust according to your layout
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.0)',
    borderColor: '#fff', 
    borderWidth: 1,// Change this to match your design
    borderRadius: 20,
  },
  editTitleButton: {
    position: 'absolute',
    top: 40, // Adjust according to your layout
    right: 20, // Adjust according to your layout
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.0)',
    borderColor: '#fff', 
    borderWidth: 1,// Change this to match your design
    borderRadius: 20,
  },
  luminosityPicker: {
    position: 'absolute',
    top: 50, 
    height: 45,
    width: '50%',
    backgroundColor: 'white', // Set background color to white
    color: 'black',
    fontSize: 12, // Adjust font size as needed
    textAlign: 'center', // Center align the text
    paddingTop: 0,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  firstCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: 1,
    shadowColor: '#000',
    maxWidth: 300,
    height: 130,
    position: 'absolute',
    top: 150, // Fix at the top of the container
    left: 50,
    right: 50
  },
  secondCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: 1,
    shadowColor: '#000',
    maxWidth: 300,
    height: 130,
    position: 'absolute',
    top: 325, // Fix at the top of the container
    left: 50,
    right: 50
  },
  thirdCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: 1,
    shadowColor: '#000',
    maxWidth: 300,
    height: 130,
    position: 'absolute',
    top: 500, // Fix at the top of the container
    left: 50,
    right: 50
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    marginLeft: 25
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#19240A',
    flex: 1,
    marginLeft: 30,
  },
  gardenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E5FFC3',
    flex: 1,
    marginTop: 15
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 12
  },
  infoIcon: {
    width: 16,
    height: 16, 
  },
  plantName: {
    fontSize: 24,
    color: '#19240A',
    fontWeight: "400"
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 15,
  },
  footerButtons: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#19240A',
    padding: 10,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    height: 80,
  }
});

export default MainScreen;
