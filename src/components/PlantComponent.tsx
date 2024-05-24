import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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


const PlantComponent = ({ vase_number, plant, light_value, moisture_value, temperature_value }) => {
  const plantData = getPlantData(plant);

  return (
    <View style={styles.container}>
      {/* Column 1 */}
      <View style={styles.column}>
      {plant == 'empty' ? (
      <View style={styles.button}>
        <Text style={styles.plus}>+</Text>
      </View>
      ) : (
        <Image source={images[plant]} style={styles.image} />
      )}
      </View>


      {/* Column 2 */}
      <View style={styles.column}>
        {plant == 'empty' ? (
          <Text style={styles.label}>Vaso {vase_number}:</Text>
        ) : (
          <Text style={styles.label}>Vaso {vase_number}: {plant[6] == 'C' ? 'Tomate Cereja' : plant}</Text>
        )}

        {light_value <= 0.0 || light_value == "" ? (
          <Text style={styles.info}><Icon name="weather-sunny" size={20} color="#808080" />Indisponível</Text>
        ) : light_value < plantData.min_light ? (
          <Text style={styles.info}><Icon name="weather-sunny" size={20} color="#FF0000" />Luz Baixa ({light_value})</Text>
        ) : light_value > plantData.max_light ? (
          <Text style={styles.info}><Icon name="weather-sunny" size={20} color="#FF0000" />Luz Alta ({light_value})</Text>
        ) : (
          <Text style={styles.info}><Icon name="weather-sunny" size={20} color="#00FF00" />Luz Ideal ({light_value})</Text>
        )}

        {moisture_value <= 0.0 || moisture_value == "" ? (
          <Text style={styles.info}><Icon name="water" size={20} color="#808080" />Indisponível</Text>
        ) : moisture_value < plantData.min_hum || moisture_value > plantData.max_hum ? (
          <Text style={styles.info}><Icon name="water" size={20} color="#FF0000" />{moisture_value}% de Umidade</Text>
        ) : (
          <Text style={styles.info}><Icon name="water" size={20} color="#00FF00" />{moisture_value}% de Umidade</Text>
        )}

        {temperature_value <= 0.0 || temperature_value == "" ? (
          <Text style={styles.info}><Icon name="thermometer" size={20} color="#808080" />Indisponível</Text>
        ) : temperature_value < plantData.min_temp || temperature_value > plantData.max_temp ? (
          <Text style={styles.info}><Icon name="thermometer" size={20} color="#FF0000" />{temperature_value}°C</Text>
        ) : (
          <Text style={styles.info}><Icon name="thermometer" size={20} color="#00FF00" />{temperature_value}°C</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center', // Center horizontally
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 20, // Make it rounded
    borderWidth: 1, // Add border
    borderColor: '#000000', // Border color
    maxWidth: 325, // Limit the width
    alignSelf: 'center', // Center horizontally
    alignItems: 'center',
    marginTop: 20, // Add margin from the top
  },
  column: {
    flex: 1,
    alignItems: 'center', // Center children horizontally
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    fontSize: 50,
    color: '#FFFFFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  info: {
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default PlantComponent;
