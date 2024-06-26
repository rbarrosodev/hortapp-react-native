import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import { RouteProp } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { Picker } from '@react-native-picker/picker';
import PlantDisplayComponent from './PlantDisplayComponent';


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

type PlantComponentScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'PlantComponent'>;
  route: RouteProp<RootStackParamList, 'PlantComponent'>;
};

const PlantComponentScreen: React.FC<PlantComponentScreenProps> = ({ route, navigation }) => {
  const { plantData, gardenCode, userId, gardenName } = route.params;
  const [selectedLuminosity, setSelectedLuminosity] = useState('any');

  const handlePlantLuminosityChange = (itemValue) => {
    setSelectedLuminosity(itemValue);
  };

  console.log(plantData);

  return (
    <ImageBackground source={require('../../assets/hortapp-bg1.png')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome6 name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.editTitleButton}>
          <FontAwesome6 name="pencil" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.gardenTitle}>Horta {gardenName}</Text>
        <View style={styles.luminosityPicker}>
          <Picker selectedValue={selectedLuminosity} onValueChange={handlePlantLuminosityChange}>
            <Picker.Item label="Inserir nível de luminosidade" value="default" />
            <Picker.Item label="Qualquer nível" value="any" />
            <Picker.Item label="Baixo" value="low" />
            <Picker.Item label="Alto" value="high" />
          </Picker>
        </View>

        { plantData.second_plant == 'empty' || plantData.third_plant == 'empty' ? (
          <TouchableOpacity onPress={() => navigation.navigate('PlantSelect', {gardenCode: gardenCode, previousValue: plantData.first_plant, selectedLuminosity: selectedLuminosity, userId: userId, plantNumber: 'first_plant'})} style={styles.plantDisplayComponent}>
            <PlantDisplayComponent vase_number={1} plant={plantData.first_plant[0].toUpperCase() + plantData.first_plant.slice(1)}
                  light_value={plantData.light_value} moisture_value={plantData.first_plant_moisture_value} temperature_value={plantData.first_plant_temperature_value}>
            </PlantDisplayComponent>
          </TouchableOpacity>
        ) : (
          <>
          <TouchableOpacity onPress={() => navigation.navigate('PlantSelect', {gardenCode: gardenCode, previousValue: plantData.first_plant, selectedLuminosity: selectedLuminosity, userId: userId, plantNumber: 'first_plant'})} style={styles.plantDisplayComponent}>
            <PlantDisplayComponent vase_number={1} plant={plantData.first_plant[0].toUpperCase() + plantData.first_plant.slice(1)}
                  light_value={plantData.light_value} moisture_value={plantData.first_plant_moisture_value} temperature_value={plantData.first_plant_temperature_value}>
            </PlantDisplayComponent>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('PlantSelect', {gardenCode: gardenCode, previousValue: plantData.second_plant, selectedLuminosity: selectedLuminosity, userId: userId, plantNumber: 'second_plant'})} style={styles.plantDisplayComponentTwo}>
            <PlantDisplayComponent vase_number={2} plant={plantData.second_plant[0].toUpperCase() + plantData.second_plant.slice(1)}
                  light_value={plantData.light_value} moisture_value={plantData.second_plant_moisture_value} temperature_value={plantData.second_plant_temperature_value}>
            </PlantDisplayComponent>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('PlantSelect', {gardenCode: gardenCode, previousValue: plantData.third_plant, selectedLuminosity: selectedLuminosity, userId: userId, plantNumber: 'third_plant'})} style={styles.plantDisplayComponentThree}>
            <PlantDisplayComponent vase_number={3} plant={plantData.third_plant[0].toUpperCase() + plantData.third_plant.slice(1)}
                  light_value={plantData.light_value} moisture_value={plantData.third_plant_moisture_value} temperature_value={plantData.third_plant_temperature_value}>
            </PlantDisplayComponent>
          </TouchableOpacity>
          </>
        )}

        <View style={styles.footerButtons}>
          <TouchableOpacity onPress={() => navigation.navigate('UserGardens', {userId: userId})} style={styles.homeButton}>
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
  plantDisplayComponent: {
    position: 'absolute',
    width: '100%',
    top: 0
  },
  plantDisplayComponentTwo: {
    position: 'absolute',
    width: '100%',
    top: 150
  },
  plantDisplayComponentThree: {
    position: 'absolute',
    width: '100%',
    top: 300
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

export default PlantComponentScreen;
