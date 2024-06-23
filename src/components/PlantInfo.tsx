import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface PlantInfoProps {
  potNumber: number;
  plantName: string;
  light: string;
  lumens: number;
  humidity: number;
  temperatureC: number;
  temperatureF: number;
}

const PlantInfo: React.FC<PlantInfoProps> = ({
  potNumber,
  plantName,
  light,
  lumens,
  humidity,
  temperatureC,
  temperatureF,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('./path-to-icon.png')} // Add your icon path here
          style={styles.icon}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          Vaso {potNumber}: {plantName}
        </Text>
        <Text style={styles.detail}>
          🌞 {light} ({lumens} lumens)
        </Text>
        <Text style={styles.detail}>
          💧 {humidity}% de Umidade
        </Text>
        <Text style={styles.detail}>
          🌡 {temperatureC}°C ({temperatureF}°F)
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A5D6A7',
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#388E3C',
  },
  detail: {
    fontSize: 14,
    color: '#388E3C',
  },
});

export default PlantInfo;
