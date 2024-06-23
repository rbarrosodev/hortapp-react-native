// ConnectionInstructionsScreen.tsx

import React, { useState } from 'react';
import { ScrollView, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type

type ConnectionInstructionsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ConnectionInstructions'>;
  route: RouteProp<RootStackParamList, 'ConnectionInstructions'>;
};

const ConnectionInstructionsScreen: React.FC<ConnectionInstructionsScreenProps> = ({ route, navigation }) => {
    const { userId } = route.params;
    const [isSubmit, setIsSubmit] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/hortapp-connection-instructions.png')}
                    resizeMode="cover"
                />
                <TouchableOpacity onPress={() => navigation.navigate('GardenCode', {userId: userId})} style={styles.nextButton}>
                    <Text style={styles.nextText}>Seguir</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#19240A',
        justifyContent: 'flex-end', // Align content to the bottom
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end', // Align content to the bottom
    },
    image: {
        width: 370,  // Adjust width as needed
        height: 1024, // Adjust height as needed
    },
    titleText: {
        color: "#fff",
        position: 'absolute',
        fontFamily: 'BalooExtraBold',
        fontSize: 25,
        alignSelf: 'flex-start',
        left: 20
    },
    nextButton: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#65B307',
        borderRadius: 10,
        marginBottom: 50,
    },
    nextText: {
        color: "#fff",
        fontFamily: 'Inter-SemiBold',
        fontSize: 19,
    },
});

export default ConnectionInstructionsScreen;
