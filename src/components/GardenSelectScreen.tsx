// GardenSelectScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import TextButton from './TextButton';

type GardenSelectScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'GardenSelect'>;
};

const GardenSelectScreen: React.FC<GardenSelectScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.firstAccess]}>Seu primeiro acesso?</Text>
      <View style={styles.row}>
      <TextButton onPress={() => navigation.navigate('GardenCode')} title="Sim" />
      <TextButton onPress={() => navigation.navigate('GardenCode')} title="Não" />
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


export default GardenSelectScreen;
