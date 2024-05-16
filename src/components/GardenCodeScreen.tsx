// GardenCodeScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import TextButton from './TextButton';
import axios from "axios";

type GardenCodeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'GardenCode'>;
};

const GardenCodeScreen: React.FC<GardenCodeScreenProps> = ({ navigation }) => {
  const [gardenCode, setGardenCode] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const fetchGardenUsingCode = async () => {
      try {
        const response = await axios.get('http://34.201.94.94/');
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    if (isSubmit) fetchGardenUsingCode();
  }, [isSubmit]);

  const handleSubmit = () => {
    if (gardenCode !== "") {
      setIsSubmit(true);
    } else {
      Alert.alert('Ops!', 'O campo de código não pode ficar em branco');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Insira o código</Text>
      <Text style={styles.text}>Insira o código de registro da sua horta</Text>
      <TextInput placeholder="Insira aqui o código" style={styles.input} autoCapitalize='none' onChangeText={(text) => setGardenCode(text)} />
      <View style={styles.buttonContainer}>
            <Button title="Seguir" onPress={handleSubmit} />
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
  input: {
      width: '80%',
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      paddingVertical: 10,
      borderBottomColor: "#ccc"
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  buttonContainer: {
      width: '80%',
      marginTop: 20
  },
  bigText: {
    textAlign: 'center',
    fontSize: 40,
  },
});


export default GardenCodeScreen;
