// UserGardensScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import axios from "axios";
import { RouteProp } from '@react-navigation/native';

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

type PlantData = {
  Alecrim: { min_temp: number; max_temp: number; min_hum: number; max_hum: number; min_light: number; max_light: number; };
  Boldo: { min_temp: number; max_temp: number; min_hum: number; max_hum: number; min_light: number; max_light: number; };
  Cebolinha: { min_temp: number; max_temp: number; min_hum: number; max_hum: number; min_light: number; max_light: number; };
  Coentro: { min_temp: number; max_temp: number; min_hum: number; max_hum: number; min_light: number; max_light: number; };
  Hortelã: { min_temp: number; max_temp: number; min_hum: number; max_hum: number; min_light: number; max_light: number; };
  Manjericão: { min_temp: number; max_temp: number; min_hum: number; max_hum: number; min_light: number; max_light: number; };
  Outros: { min_temp: number; max_temp: number; min_hum: number; max_hum: number; min_light: number; max_light: number; };
  Orégano: { min_temp: number; max_temp: number; min_hum: number; max_hum: number; min_light: number; max_light: number; };
  Salsinha: { min_temp: number; max_temp: number; min_hum: number; max_hum: number; min_light: number; max_light: number; };
  TomateCereja: { min_temp: number; max_temp: number; min_hum: number; max_hum: number; min_light: number; max_light: number; };
  Tomilho: { min_temp: number; max_temp: number; min_hum: number; max_hum: number; min_light: number; max_light: number; };
};

type PlantName = keyof PlantData;

const plants: PlantData = {
  Alecrim: { min_temp: 18, max_temp: 24, min_hum: 10, max_hum: 90, min_light: 2000, max_light: 3000 },
  Boldo: { min_temp: 18, max_temp: 24, min_hum: 50, max_hum: 90, min_light: 2000, max_light: 3000 },
  Cebolinha: { min_temp: 18, max_temp: 24, min_hum: 50, max_hum: 90, min_light: 2000, max_light: 3000 },
  Coentro: { min_temp: 18, max_temp: 24, min_hum: 40, max_hum: 70, min_light: 1000, max_light: 2000 },
  Hortelã: { min_temp: 18, max_temp: 24, min_hum: 50, max_hum: 90, min_light: 1000, max_light: 2000 },
  Manjericão: { min_temp: 20, max_temp: 30, min_hum: 10, max_hum: 90, min_light: 2000, max_light: 3000 },
  Outros: { min_temp: 20, max_temp: 30, min_hum: 10, max_hum: 90, min_light: 2000, max_light: 3000 },
  Orégano: { min_temp: 20, max_temp: 30, min_hum: 10, max_hum: 90, min_light: 2000, max_light: 3000 },
  Salsinha: { min_temp: 20, max_temp: 30, min_hum: 50, max_hum: 90, min_light: 1000, max_light: 2000 },
  TomateCereja: { min_temp: 21, max_temp: 27, min_hum: 60, max_hum: 70, min_light: 2000, max_light: 3000 },
  Tomilho: { min_temp: 18, max_temp: 24, min_hum: 10, max_hum: 90, min_light: 2000, max_light: 3000 }
};

function getPlantData(plantName: PlantName) {
  return plants[plantName];
}


type UserGardensScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'UserGardens'>;
  route: RouteProp<RootStackParamList, 'UserGardens'>;
};

const UserGardensScreen: React.FC<UserGardensScreenProps> = ({ route, navigation }) => {
  const { userId } = route.params;
  const [loading, setLoading] = useState(true); // State to track loading status
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Component has mounted');
        const response = await axios.get("http://100.28.235.107/get_measures.php?garden_code=FD2B599CF8E87030");
        setData(response.data);
        setLoading(false); // Set loading to false once data is received
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message); // Set error message state
        setLoading(false); // Set loading to false in case of error
      }
    };

    // Initial data fetch
    fetchData();

    // Fetch data every 10 seconds
    const interval = setInterval(fetchData, 100000000);

    // Clean up interval to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  console.log(data);


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
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" /> // Show spinner when loading
            ) : error ? (
              <Text>Error: {error}</Text>
            ) : (
            <TouchableOpacity onPress={() => navigation.navigate('PlantComponent', {plantData: data, gardenCode: 'FD2B599CF8E87030', userId: userId})} style={styles.gardenMeasures}>
              <Text style={styles.gardenText}>Horta Cozinha 1 - <Text style={styles.gardenLuminosityText}>Alta Luminosidade</Text></Text>
              <View style={styles.measureCircles}>
                {data !== null ? (
                    <>
                    <Image source={images[data[0].first_plant[0].toUpperCase() + data[0].first_plant.slice(1)]} style={styles.image} />
                    <View style={styles.plantOneMeasures}>
                      {data[0].light_value <= 0.0 || data[0].light_value == "" ? (
                        <Text><FontAwesome6 name="sun" size={16} color="#808080" /> Indisponível</Text>
                      ) : data[0].light_value < getPlantData(data[0].first_plant[0].toUpperCase() + data[0].first_plant.slice(1)).min_light ? (
                        <Text><FontAwesome6 name="sun" size={16} color="#FF0000" /> Baixa</Text>
                      ) : data[0].light_value > getPlantData(data[0].first_plant[0].toUpperCase() + data[0].first_plant.slice(1)).max_light ? (
                        <Text><FontAwesome6 name="sun" size={16} color="#FF0000" /> Alta</Text>
                      ) : (
                        <Text><FontAwesome6 name="sun" size={16} color="#00FF00" /> Ideal</Text>
                      )}

                      {data[0].first_plant_moisture_value <= 0.0 || data[0].first_plant_moisture_value == "" ? (
                        <Text><FontAwesome6 name="droplet" size={16} color="#808080" /> Indisponível</Text>
                      ) : data[0].first_plant_moisture_value < getPlantData(data[0].first_plant[0].toUpperCase() + data[0].first_plant.slice(1)).min_hum ? (
                        <Text><FontAwesome6 name="droplet" size={16} color="#FF0000" /> Baixa</Text>
                      ) : data[0].first_plant_moisture_value > getPlantData(data[0].first_plant[0].toUpperCase() + data[0].first_plant.slice(1)).max_hum ? (
                        <Text><FontAwesome6 name="droplet" size={16} color="#FF0000" /> Alta</Text>
                      ) : (
                        <Text><FontAwesome6 name="droplet" size={16} color="#00FF00" /> Ideal</Text>
                      )}

                      {data[0].first_plant_temperature_value <= 0.0 || data[0].first_plant_temperature_value == "" ? (
                        <Text><FontAwesome6 name="temperature-full" size={16} color="#808080" /> Indisponível</Text>
                      ) : data[0].first_plant_temperature_value < getPlantData(data[0].first_plant[0].toUpperCase() + data[0].first_plant.slice(1)).min_temp ? (
                        <Text><FontAwesome6 name="temperature-full" size={16} color="#FF0000" /> Baixa</Text>
                      ) : data[0].first_plant_temperature_value > getPlantData(data[0].first_plant[0].toUpperCase() + data[0].first_plant.slice(1)).max_temp ? (
                        <Text><FontAwesome6 name="temperature-full" size={16} color="#FF0000" /> Alta</Text>
                      ) : (
                        <Text><FontAwesome6 name="temperature-full" size={16} color="#00FF00" /> Ideal</Text>
                      )}
                    </View>
                    </>
                  ) : (
                    <>
                    <View style={styles.plantCircleOne}>
                      <FontAwesome6 name="plus" size={40} color="white" style={styles.plusIconGardenCircle} />
                    </View>
                    <View style={styles.plantOneMeasures}>
                      <Text><FontAwesome6 name="sun" size={16} color="#808080" /> Indisponível</Text>
                      <Text><FontAwesome6 name="droplet" size={16} color="#808080" /> Indisponível</Text>
                      <Text><FontAwesome6 name="temperature-full" size={16} color="#808080" /> Indisponível</Text>
                    </View>
                    </>
                  )
                }
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.footerButtons}>
          <TouchableOpacity onPress={() => navigation.navigate('UserGardens', {userId: userId})} style={styles.homeButton}>
            <FontAwesome6 name="house" size={24} color="white" />
            <Text style={styles.homeText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('GardenCode', {userId: userId})} style={styles.addGardenButton}>
            <FontAwesome6 name="plus" size={40} color="white" style={styles.plusIcon}/>
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
    top: 15
  },
  plusIconGardenCircle: {
    position: 'absolute',
    alignSelf: 'center',
    top: 7
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  addGardenButton: {
    position: 'absolute',
    bottom: 50,
    width: 80,
    height: 80,
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
  measureCircles: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantCircleOne: {
    width: 65,
    height: 65,
    borderRadius: 100, // half of the width or height
    backgroundColor: '#808080',
    borderWidth: 4,
    borderColor: '#B4B4B4',
  },
  plantOneMeasures: {
    marginLeft: 5,
  },
  plantCircleTwo: {
    width: 65,
    height: 65,
    borderRadius: 100, // half of the width or height
    backgroundColor: '#808080',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: '#B4B4B4'
  },
  plantTwoMeasures: {
    position: 'absolute',
    left: 85
  },
  plantCircleThree: {
    position: 'absolute',
    right: 15,
    width: 65,
    height: 65,
    borderRadius: 100, // half of the width or height
    backgroundColor: '#808080',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    borderWidth: 4,
    borderColor: '#B4B4B4'
  },
  plantThreeMeasures: {
    position: 'absolute',
    right: 85
  },
  gardenMeasures: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 50,
    width: '100%',
    height: 100,
    borderColor: '#B4B4B4',
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 30,
  },
  gardenText: {
    color: '#3B6603',
    fontFamily: 'Inter-Medium',
    fontSize: 20,
    alignSelf: 'center'
  },
  gardenLuminosityText: {
    color: '#3B6603',
    fontFamily: 'Inter-Medium',
    fontSize: 14
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
    height: 80,
    bottom: 0
  }
});

export default UserGardensScreen;
