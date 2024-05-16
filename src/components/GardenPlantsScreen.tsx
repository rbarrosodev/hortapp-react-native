// GardenPlantsScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import TextButton from './TextButton';
import { RouteProp } from '@react-navigation/native';


type GardenPlantsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'GardenPlants'>;
  route: RouteProp<RootStackParamList, 'GardenPlants'>;
};

const GardenPlantsScreen: React.FC<GardenPlantsScreenProps> = ({ route, navigation }) => {
    const { gardenCode } = route.params;

    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.firstAccess]}>ID da Horta: {gardenCode}</Text>
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


export default GardenPlantsScreen;
