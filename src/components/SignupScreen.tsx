// SignupScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import axios from "axios";

type SignupScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Signup'>;
};

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        const authenticate = async () => {
            axios
                .post(
                    "http://54.91.224.101/register.php",
                    JSON.stringify({
                        email: email,
                        phone: phone,
                        password: password
                    })
            )
            .then((response) => {
                console.log(response.data);
                setIsSubmit(false);
            })
            .catch((err) => {
                console.log(err);
            });
        };
        if (isSubmit) authenticate();
    }, [isSubmit]);

    const handleSubmit = () => {
        if (password === passwordConfirmation) {
          // Passwords match, do something (e.g., submit form)
          Alert.alert('Sucess', 'Passwords match');
          setIsSubmit(true);
        } else {
          // Passwords don't match, show an error message
          Alert.alert('Error', 'Passwords do not match');
        }
      };

    return (
        <View style={styles.container}>
        <TextInput placeholder="email" style={styles.input} autoCapitalize='none' onChangeText={(text) => setEmail(text)} />
        <TextInput placeholder="phone" style={styles.input} onChangeText={(text) => setPhone(text)} />
        <TextInput placeholder="password" style={styles.input} secureTextEntry={true} autoCapitalize='none' onChangeText={(text) => setPassword(text)} />
        <TextInput placeholder="password_confirmation" style={styles.input} onChangeText={(text) => setPasswordConfirmation(text)} />
        <View style={styles.buttonContainer}>
            <Button title="Cadastrar" onPress={handleSubmit} />
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
    }
  });

export default SignupScreen;
