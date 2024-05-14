// MainScreen.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type

type MainScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Main'>;
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Screen</Text>
      <Button
        title="Go to Another Screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default MainScreen;
