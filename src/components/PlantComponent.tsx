import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const images = {
  Alecrim: require('../../assets/Alecrim.png'),
  Cebolinha: require('../../assets/Cebolinha.png'),
  Orégano: require('../../assets/Orégano.png'),
  Salsinha: require('../../assets/Salsinha.png')
  // Add other images as needed
};

const PlantComponent = ({ vase_number, plant, light_value, moisture_value, temperature_value }) => {
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
        <Text style={styles.label}>Vaso {vase_number}: {plant}</Text>
        <Text style={styles.info}><Icon name="weather-sunny" size={20} color="#FFFF00" />Luz Média ({light_value})</Text>
        <Text style={styles.info}><Icon name="water-outline" size={20} color="#00FF00" />{moisture_value}% de Umidade</Text>
        <Text style={styles.info}><Icon name="thermometer" size={20} color="#00FF00" />{temperature_value}°C</Text>
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
    maxWidth: 300, // Limit the width
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
