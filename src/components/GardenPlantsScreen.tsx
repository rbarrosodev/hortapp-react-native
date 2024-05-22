// GardenPlantsScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import { RouteProp } from '@react-navigation/native';
import PlantComponent from './PlantComponent';
import axios from "axios";


type GardenPlantsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'GardenPlants'>;
  route: RouteProp<RootStackParamList, 'GardenPlants'>;
};

const GardenPlantsScreen: React.FC<GardenPlantsScreenProps> = ({ route, navigation }) => {
    const { gardenCode, updateAlert } = route.params;
    const [loading, setLoading] = useState(true); // State to track loading status
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState(null);

    const plantSelect = (garden_code) => {
      navigation.navigate('PlantSelect', {gardenCode: garden_code, previousValue: data[0].first_plant})
    };

    useEffect(() => {
      if(updateAlert) {
        alert('Planta atualizada com sucesso! Aguarde alguns segundos para ver as mudanças.');
      }

      const fetchData = async () => {
        try {
          const response = await axios.get("http://54.225.18.148/get_measures.php?garden_code=" + gardenCode);
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
      const interval = setInterval(fetchData, 10000);

      // Clean up interval to avoid memory leaks
      return () => clearInterval(interval);
    }, []);
    
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" /> // Show spinner when loading
        ) : error ? (
          <Text>Error: {error}</Text>
        ) : (
          <View>
            <Text style={styles.text}>Horta {gardenCode}</Text>
              <TouchableOpacity onPress={() => plantSelect(gardenCode)}>
                <PlantComponent vase_number={1} plant={data.length > 0 ? data[0].first_plant[0].toUpperCase() + data[0].first_plant.slice(1) : ''}
                light_value={data.length > 0 ? data[0].light_value : ''} moisture_value={data.length > 0 ? data[0].first_plant_moisture_value : ''} temperature_value={data.length > 0 ? data[0].first_plant_temperature_value : ''}></PlantComponent>
              {/* Render other UI components based on data */}
              </TouchableOpacity>
            </View>
        )}
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20 // Adjust this value to set the distance from the top
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
