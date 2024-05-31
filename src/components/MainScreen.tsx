// MainScreen.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import TextButton from './TextButton';

type MainScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Main'>;
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seja bem-vindo ao HORTAPP</Text>
      <Text style={{ textAlign: 'center', marginBottom: 10 }}>Aqui, sua horta é cuidada com tecnologia. Acompanhe o crescimento das suas plantas e colha os frutos do seu esforço, tudo diretamente do seu celular.</Text>
      <Text style={{ textAlign: 'center', marginBottom: 30 }}>O verde mais perto de você do que nunca!</Text>
      <Button
        title="Próximo"
        onPress={() => navigation.navigate('GardenSelect')}
      />
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
});


export default MainScreen;
