import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
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

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: 1,
    shadowColor: '#000',
    maxWidth: 300,
    height: 130
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
});

export default MainScreen;
