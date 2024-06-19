import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

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
  Cebolinha: { min_temp: 18, max_temp: 25, min_hum: 50, max_hum: 90, min_light: 2000, max_light: 3000 },
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


const PlantDisplayComponent = ({ vase_number, plant, light_value, moisture_value, temperature_value }) => {
  const plantData = getPlantData(plant);

  return (
    <View style={styles.firstCard}>
      <View style={styles.iconContainer}>
        <Image source={images[plant]} style={styles.icon} />
      </View>
      <View style={styles.infoContainer}>
        {plant == 'empty' ? (
          <Text style={styles.title}>Vaso {vase_number}: 
          </Text>
        ) : (
          <Text style={styles.title}>Vaso {vase_number}:<Text style={styles.plantName}> {plant[6] == 'C' ? 'Tomate Cereja' : plant}</Text></Text>
        )}
        <View style={styles.infoRow}>
          {light_value <= 0.0 || light_value == "" ? (
            <Text style={styles.infoText}><FontAwesome6 name="sun" size={16} color="#808080" /> Indisponível</Text>
          ) : light_value < plantData.min_light ? (
            <Text style={styles.infoText}><FontAwesome6 name="sun" size={16} color="#FF0000" /> Luz Baixa ({light_value}) </Text>
          ) : light_value > plantData.max_light ? (
            <Text style={styles.infoText}><FontAwesome6 name="sun" size={16} color="#FF0000" /> Luz Alta ({light_value}) </Text>
          ) : (
            <>
            <Text style={styles.sunIcon}>
              <FontAwesome6 name="sun" size={16} color="#3B6603" />
            </Text>
            <Text style={styles.sunText}>Luz Ideal ({light_value})</Text>
            </>
          )}
        </View>
        <View style={styles.infoRow}>
          {moisture_value <= 0.0 || moisture_value == "" ? (
            <Text style={styles.infoText}><FontAwesome6 name="droplet" size={16} color="#808080" /> Indisponível</Text>
          ) : moisture_value < plantData.min_hum || moisture_value > plantData.max_hum ? (
            <Text style={styles.infoText}><FontAwesome6 name="droplet" size={16} color="#FF0000" /> {moisture_value}% de Umidade </Text>
          ) : (
            <>
            <Text style={styles.waterIcon}>
              <FontAwesome6 name="droplet" size={16} color="#3B6603" />
            </Text>
            <Text style={styles.waterText}>{moisture_value}% de Umidade</Text>
            </>
          )}
        </View>
        <View style={styles.infoRow}>
          {temperature_value <= 0.0 || temperature_value == "" ? (
            <Text style={styles.infoText}><FontAwesome6 name="temperature-full" size={16} color="#808080" /> Indisponível</Text>
          ) : temperature_value < plantData.min_temp || temperature_value > plantData.max_temp ? (
            <Text style={styles.infoText}><FontAwesome6 name="temperature-full" size={16} color="#FF0000" /> {temperature_value}°C</Text>
          ) : (
            <>
            <Text style={styles.temperatureIcon}>
              <FontAwesome6 name="temperature-full" size={16} color="#3B6603" />
            </Text>
            <Text style={styles.temperatureText}>{temperature_value}°C</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain'
  },
  sunIcon: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 17
  },
  sunText: {
    position: 'absolute',
    left: 40,
    top: -3,
    fontSize: 14,
    color: '#333',
  },
  waterIcon: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 19
  },
  waterText: {
    position: 'absolute',
    left: 40,
    top: 1,
    fontSize: 14,
    color: '#333',
  },
  temperatureIcon: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 19
  },
  temperatureText: {
    position: 'absolute',
    left: 40,
    top: -2,
    fontSize: 14,
    color: '#333',
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
    fontSize: 20,
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

export default PlantDisplayComponent;

