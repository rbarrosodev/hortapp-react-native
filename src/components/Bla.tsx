// Bla.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import { RouteProp } from '@react-navigation/native';
import TextButton from './TextButton';
import axios from "axios";

type BlaProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Bla'>;
    route: RouteProp<RootStackParamList, 'Bla'>;
  };

  
  const Bla: React.FC<BlaProps> = ({ route, navigation }) => {
    const { gardenCode, previousValue, selectedLuminosity } = route.params;
    const [selectedItem, setSelectedItem] = previousValue ? useState(previousValue) : useState('alecrim')
    
    // Function to handle picker value change
    const handlePickerChange = async (itemValue) => {
      try {
        setSelectedItem(itemValue);
        const response = await axios.get("http://100.28.235.107/update_plant.php?garden_id=" + gardenCode + "&first_plant=" + itemValue);
        console.log(response.data);
        Alert.alert('Pronto!', 'Planta atualizada com sucesso! Aguarde alguns segundos para ver as mudanças.');
        navigation.navigate('UserGardens');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Escolha a planta:</Text>
          {selectedLuminosity === 'low' ? (
            <View style={styles.pickerContainer}>
              <Picker selectedValue={selectedItem} onValueChange={handlePickerChange} style={styles.picker}>
                <Picker.Item label="Selecione..." value="default" />
                <Picker.Item label="Cebolinha" value="cebolinha" />
                <Picker.Item label="Coentro" value="coentro" />
                <Picker.Item label="Hortelã" value="hortelã" />
                <Picker.Item label="Salsinha" value="salsinha" />
                <Picker.Item label="Tomate Cereja" value="tomateCereja" />
                <Picker.Item label="Outros" value="outros" />
              </Picker>
            </View>
        ) : selectedLuminosity === 'high' ? (
            <View style={styles.pickerContainer}>
              <Picker selectedValue={selectedItem} onValueChange={handlePickerChange} style={styles.picker}>
                <Picker.Item label="Selecione..." value="default" />
                <Picker.Item label="Alecrim" value="alecrim" />
                <Picker.Item label="Boldo" value="boldo" />
                <Picker.Item label="Manjericão" value="manjericão" />
                <Picker.Item label="Orégano" value="orégano" />
                <Picker.Item label="Tomilho" value="tomilho" />
                <Picker.Item label="Outros" value="outros" />
              </Picker>
            </View>
        ) : (
          <View style={styles.pickerContainer}>
            <Picker selectedValue={selectedItem} onValueChange={handlePickerChange} style={styles.picker}>
              <Picker.Item label="Alecrim" value="alecrim" />
              <Picker.Item label="Boldo" value="boldo" />
              <Picker.Item label="Cebolinha" value="cebolinha" />
              <Picker.Item label="Coentro" value="coentro" />
              <Picker.Item label="Hortelã" value="hortelã" />
              <Picker.Item label="Manjericão" value="manjericão" />
              <Picker.Item label="Orégano" value="orégano" />
              <Picker.Item label="Salsinha" value="salsinha" />
              <Picker.Item label="Tomate Cereja" value="tomateCereja" />
              <Picker.Item label="Tomilho" value="tomilho" />
              <Picker.Item label="Outros" value="outros" />
            </Picker>
          </View>
        )}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
    },
    pickerContainer: {
      // Add any styles specific to the container of the Picker component
    },
    picker: {
      height: 50,
      width: 200,
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
    }
  });


export default Bla;
