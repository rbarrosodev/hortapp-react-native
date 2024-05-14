// DetailsScreen.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type

type DetailsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Details'>;
};

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;
