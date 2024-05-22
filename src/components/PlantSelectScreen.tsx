// PlantSelectScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import { RouteProp } from '@react-navigation/native';
import TextButton from './TextButton';
import axios from "axios";

type PlantSelectScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'PlantSelect'>;
    route: RouteProp<RootStackParamList, 'PlantSelect'>;
  };

  
  const PlantSelectScreen: React.FC<PlantSelectScreenProps> = ({ route, navigation }) => {
    const { gardenCode, previousValue } = route.params;

    console.log(gardenCode);

    

    const [selectedValue, setSelectedValue] = useState("Alecrim"); // Default value if previousValue is not "Salsinha"

    useEffect(() => {
        if (previousValue) {
            console.log(previousValue[0].toUpperCase() + previousValue.slice(1));
            setSelectedValue(previousValue[0].toUpperCase() + previousValue.slice(1));
        }
    }, [previousValue]);

    const updatePlant = async (itemValue) => {
        try {
          setSelectedValue(itemValue);
          const response = await axios.get("http://54.225.18.148/update_plant.php?garden_id=" + gardenCode + "&first_plant=" + itemValue);
          console.log(response.data);
          navigation.navigate('GardenPlants', {gardenCode: gardenCode, updateAlert: true});
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return (
        <View style={styles.container}>
        <Text style={styles.label}>Escolha a planta:</Text>
        <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => {
                setSelectedValue(itemValue);
                updatePlant(itemValue);
            }}>
            <Picker.Item label="Alecrim" value="alecrim" />
            <Picker.Item label="Cebolinha" value="cebolinha" />
            <Picker.Item label="Orégano" value="orégano" />
            <Picker.Item label="Salsinha" value="salsinha" />
        </Picker>
        </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
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
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 200,
  },
});


export default PlantSelectScreen;
