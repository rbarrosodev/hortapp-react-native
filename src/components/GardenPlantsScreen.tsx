// GardenPlantsScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import { RouteProp } from '@react-navigation/native';
import PlantComponent from './PlantDisplayComponent';
import { Picker } from '@react-native-picker/picker';
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
    const [selectedLuminosity, setSelectedLuminosity] = useState('any');

    const plantSelect = (garden_code: any) => {
      navigation.navigate('PlantSelect', {gardenCode: garden_code, previousValue: data[0].first_plant, selectedLuminosity: selectedLuminosity})
    };

    const handlePlantLuminosityChange = (itemValue: React.SetStateAction<string>) => {
      setSelectedLuminosity(itemValue);
    };

    useEffect(() => {
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

    console.log(data);
    
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" /> // Show spinner when loading
        ) : error ? (
          <Text>Error: {error}</Text>
        ) : (
          <View style={styles.container}>
            <Text style={styles.text}>Horta {gardenCode}</Text>
              <Picker selectedValue={selectedLuminosity} onValueChange={handlePlantLuminosityChange} style={styles.luminosityPicker}>
                <Picker.Item label="Selecione o nível de luminosidade" value="default" />
                <Picker.Item label="Qualquer nível" value="any" />
                <Picker.Item label="Baixo" value="low" />
                <Picker.Item label="Alto" value="high" />
              </Picker>
              <TouchableOpacity onPress={() => plantSelect(gardenCode)}>
                <PlantComponent vase_number={1} plant={data.length > 0 ? data[0].first_plant[0].toUpperCase() + data[0].first_plant.slice(1) : ''}
                light_value={data.length > 0 ? data[0].light_value : ''} moisture_value={data.length > 0 ? data[0].first_plant_moisture_value : ''} temperature_value={data.length > 0 ? data[0].first_plant_temperature_value : ''}></PlantComponent>
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
    marginTop: 10, // Adjust this value to set the distance from the top
  },
  luminosityPicker: {
    height: 50,
    width: 200,
    backgroundColor: 'white', // Set background color to white
    color: 'black', 
    marginBottom: 30,// Set text color to black
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
