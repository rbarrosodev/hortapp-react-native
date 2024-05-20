// GardenPlantsScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import TextButton from './TextButton';
import { RouteProp } from '@react-navigation/native';
import PlantComponent from './PlantComponent';


type GardenPlantsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'GardenPlants'>;
  route: RouteProp<RootStackParamList, 'GardenPlants'>;
};

const GardenPlantsScreen: React.FC<GardenPlantsScreenProps> = ({ route, navigation }) => {
    const { gardenCode, lightValue, firstPlant, firstPlantTemperatureValue, firstPlantMoistureValue } = route.params;
    console.log(route.params);

    return (
        <View style={styles.container}>
          <Text style={styles.text}>Horta {gardenCode}</Text>
          <PlantComponent vase_number={1} plant={firstPlant[0].toUpperCase() + firstPlant.slice(1)}
          light_value={lightValue} moisture_value={firstPlantMoistureValue} temperature_value={firstPlantTemperatureValue}></PlantComponent>
          <PlantComponent vase_number={2}></PlantComponent>
          <PlantComponent vase_number={3}></PlantComponent>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20, // Adjust this value to set the distance from the top
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  firstAccess: {
    marginBottom: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  leftBtn: {
    marginRight: 20
  }
});


export default GardenPlantsScreen;
