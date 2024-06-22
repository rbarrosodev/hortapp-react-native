// PlantSelectScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import the RootStackParamList type
import { RouteProp } from '@react-navigation/native';
import TextButton from './TextButton';
import axios from "axios";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const images = {
  Alecrim: require('../../assets/Alecrim.png'),
  AlecrimGray: require('../../assets/AlecrimGray.png'),
  Boldo: require('../../assets/Boldo.png'),
  BoldoGray: require('../../assets/BoldoGray.png'),
  Cebolinha: require('../../assets/Cebolinha.png'),
  CebolinhaGray: require('../../assets/CebolinhaGray.png'),
  Coentro: require('../../assets/Coentro.png'),
  CoentroGray: require('../../assets/CoentroGray.png'),
  Hortelã: require('../../assets/Hortelã.png'),
  HortelãGray: require('../../assets/HortelãGray.png'),
  Manjericão: require('../../assets/Manjericão.png'),
  ManjericãoGray: require('../../assets/ManjericãoGray.png'),
  Outros: require('../../assets/Outros.png'),
  OutrosGray: require('../../assets/OutrosGray.png'),
  Orégano: require('../../assets/Orégano.png'),
  OréganoGray: require('../../assets/OréganoGray.png'),
  Salsinha: require('../../assets/Salsinha.png'),
  SalsinhaGray: require('../../assets/SalsinhaGray.png'),
  TomateCereja: require('../../assets/TomateCereja.png'),
  TomateCerejaGray: require('../../assets/TomateCerejaGray.png'),
  Tomilho: require('../../assets/Tomilho.png'),
  TomilhoGray: require('../../assets/TomilhoGray.png')
  // Add other images as needed
};

type PlantSelectScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'PlantSelect'>;
    route: RouteProp<RootStackParamList, 'PlantSelect'>;
  };

  
  const PlantSelectScreen: React.FC<PlantSelectScreenProps> = ({ route, navigation }) => {
    const { gardenCode, previousValue, selectedLuminosity, userId, plantNumber } = route.params;
    const [selectedItem, setSelectedItem] = previousValue ? useState(previousValue) : useState('Alecrim')


    const handleSelectedPlant = (plant) => {
      setSelectedItem(plant);
    }; 
    
    // Function to handle picker value change
    const handlePickerChange = async (itemValue) => {
      try {
        const response = await axios.get("http://100.28.235.107/update_plant.php?garden_id=" + gardenCode + `&${plantNumber}=` + itemValue);
        console.log(response.data);
        Alert.alert('Pronto!', 'Planta atualizada com sucesso! Aguarde até 1 minuto para ver as mudanças.');
        navigation.navigate('UserGardens', {userId: userId});
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    return (
      <ImageBackground source={require('../../assets/hortapp-bg1.png')} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.whiteRect}>
            <View style={styles.iconContainer}>
              <Image source={images[previousValue[0].toUpperCase() + previousValue.slice(1)]} style={styles.icon} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>Vaso 1: <Text style={styles.plantName}>{previousValue[0].toUpperCase() + previousValue.slice(1)}</Text></Text>
              <Text style={styles.plantInfo}><FontAwesome6 name="sun" size={16} color="#00FF00" /> Luz Direta (Em média 5.000 lumens)</Text>
              <Text style={styles.plantInfo}><FontAwesome6 name="droplet" size={16} color="#00FF00" /> Entre 40% e 60%</Text>
              <Text style={styles.plantInfo}><FontAwesome6 name="temperature-full" size={16} color="#00FF00" /> Acima de 18°C (65°F)</Text>
            </View>

            { selectedLuminosity === 'low' ? (
              <>
              <View style={styles.row}>
                <TouchableOpacity onPress={() => handleSelectedPlant('salsinha')} style={styles.alecrimRect}>
                  <View style={styles.alecrimIconContainer}>
                    {selectedItem == 'salsinha' ? (
                      <Image source={images['Salsinha']} style={styles.alecrimIcon} />
                    ) : (
                      <Image source={images['SalsinhaGray']} style={styles.alecrimIcon} />
                    )}
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.plantNameAlecrim}>Salsinha</Text>
                    <Text style={styles.plantInfoAlecrim}>Erva de Baixa Luminosidade</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleSelectedPlant('cebolinha')} style={styles.alecrimRect}>
                  <View style={styles.alecrimIconContainer}>
                    {selectedItem == 'cebolinha' ? (
                      <Image source={images['Cebolinha']} style={styles.alecrimIcon} />
                    ) : (
                      <Image source={images['CebolinhaGray']} style={styles.alecrimIcon} />
                    )}
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.plantNameAlecrim}>Cebolinha</Text>
                    <Text style={styles.plantInfoAlecrim}>Erva de Baixa Luminosidade</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                <TouchableOpacity onPress={() => handleSelectedPlant('hortelã')} style={styles.secondRowRect}>
                  <View style={styles.alecrimIconContainer}>
                    {selectedItem == 'hortelã' ? (
                      <Image source={images['Hortelã']} style={styles.alecrimIcon} />
                    ) : (
                      <Image source={images['HortelãGray']} style={styles.alecrimIcon} />
                    )}
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.plantNameAlecrim}>Hortelã</Text>
                    <Text style={styles.plantInfoAlecrim}>Erva de Baixa Luminosidade</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleSelectedPlant('coentro')} style={styles.secondRowRect}>
                  <View style={styles.alecrimIconContainer}>
                    {selectedItem == 'coentro' ? (
                      <Image source={images['Coentro']} style={styles.alecrimIcon} />
                    ) : (
                      <Image source={images['CoentroGray']} style={styles.alecrimIcon} />
                    )}
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.plantNameAlecrim}>Coentro</Text>
                    <Text style={styles.plantInfoAlecrim}>Erva de Baixa Luminosidade</Text>
                  </View>
                </TouchableOpacity>
              </View>
              
              <View style={styles.rowCentered}>
                <TouchableOpacity onPress={() => handleSelectedPlant('outros')} style={styles.secondRowRect}>
                  <View style={styles.alecrimIconContainer}>
                    {selectedItem == 'outros' ? (
                      <Image source={images['Outros']} style={styles.alecrimIcon} />
                    ) : (
                      <Image source={images['OutrosGray']} style={styles.alecrimIcon} />
                    )}
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.plantNameAlecrim}>Outros</Text>
                  </View>
                </TouchableOpacity>
              </View>
              </>
            ): selectedLuminosity === 'high' ? (
              <>
              <View style={styles.row}>
                <TouchableOpacity onPress={() => handleSelectedPlant('alecrim')} style={styles.alecrimRect}>
                  <View style={styles.alecrimIconContainer}>
                    {selectedItem == 'alecrim' ? (
                      <Image source={images['Alecrim']} style={styles.alecrimIcon} />
                    ) : (
                      <Image source={images['AlecrimGray']} style={styles.alecrimIcon} />
                    )}
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.plantNameAlecrim}>Alecrim</Text>
                    <Text style={styles.plantInfoAlecrim}>Erva de Alta Luminosidade</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleSelectedPlant('tomate_cereja')} style={styles.alecrimRect}>
                  <View style={styles.alecrimIconContainer}>
                    {selectedItem == 'tomate_cereja' ? (
                      <Image source={images['TomateCereja']} style={styles.alecrimIcon} />
                    ) : (
                      <Image source={images['TomateCerejaGray']} style={styles.alecrimIcon} />
                    )}
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.plantNameAlecrim}>Tomate Cereja</Text>
                    <Text style={styles.plantInfoAlecrim}>Erva de Alta Luminosidade</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                <TouchableOpacity onPress={() => handleSelectedPlant('boldo')} style={styles.secondRowRect}>
                  <View style={styles.alecrimIconContainer}>
                    {selectedItem == 'boldo' ? (
                      <Image source={images['Boldo']} style={styles.alecrimIcon} />
                    ) : (
                      <Image source={images['BoldoGray']} style={styles.alecrimIcon} />
                    )}
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.plantNameAlecrim}>Boldo</Text>
                    <Text style={styles.plantInfoAlecrim}>Erva de Alta Luminosidade</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleSelectedPlant('orégano')} style={styles.secondRowRect}>
                  <View style={styles.alecrimIconContainer}>
                    {selectedItem == 'orégano' ? (
                      <Image source={images['Orégano']} style={styles.alecrimIcon} />
                    ) : (
                      <Image source={images['OréganoGray']} style={styles.alecrimIcon} />
                    )}
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.plantNameAlecrim}>Orégano</Text>
                    <Text style={styles.plantInfoAlecrim}>Erva de Alta Luminosidade</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                <TouchableOpacity onPress={() => handleSelectedPlant('manjericão')} style={styles.secondRowRect}>
                  <View style={styles.alecrimIconContainer}>
                    {selectedItem == 'manjericão' ? (
                      <Image source={images['Manjericão']} style={styles.alecrimIcon} />
                    ) : (
                      <Image source={images['ManjericãoGray']} style={styles.alecrimIcon} />
                    )}
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.plantNameAlecrim}>Manjericão</Text>
                    <Text style={styles.plantInfoAlecrim}>Erva de Alta Luminosidade</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleSelectedPlant('tomilho')} style={styles.secondRowRect}>
                  <View style={styles.alecrimIconContainer}>
                    {selectedItem == 'tomilho' ? (
                      <Image source={images['Tomilho']} style={styles.alecrimIcon} />
                    ) : (
                      <Image source={images['TomilhoGray']} style={styles.alecrimIcon} />
                    )}
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.plantNameAlecrim}>Tomilho</Text>
                    <Text style={styles.plantInfoAlecrim}>Erva de Alta Luminosidade</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.rowCentered}>
                <TouchableOpacity onPress={() => handleSelectedPlant('outros')} style={styles.secondRowRect}>
                  <View style={styles.alecrimIconContainer}>
                    {selectedItem == 'outros' ? (
                      <Image source={images['Outros']} style={styles.alecrimIcon} />
                    ) : (
                      <Image source={images['OutrosGray']} style={styles.alecrimIcon} />
                    )}
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.plantNameAlecrim}>Outros</Text>
                  </View>
                </TouchableOpacity>
              </View>
                  </>
            ) : (
            <>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => handleSelectedPlant('alecrim')} style={styles.alecrimRect}>
                <View style={styles.alecrimIconContainer}>
                  {selectedItem == 'alecrim' ? (
                    <Image source={images['Alecrim']} style={styles.alecrimIcon} />
                  ) : (
                    <Image source={images['AlecrimGray']} style={styles.alecrimIcon} />
                  )}
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.plantNameAlecrim}>Alecrim</Text>
                  <Text style={styles.plantInfoAlecrim}>Erva de Alta Luminosidade</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSelectedPlant('tomate_cereja')} style={styles.alecrimRect}>
                <View style={styles.alecrimIconContainer}>
                  {selectedItem == 'tomate_cereja' ? (
                    <Image source={images['TomateCereja']} style={styles.alecrimIcon} />
                  ) : (
                    <Image source={images['TomateCerejaGray']} style={styles.alecrimIcon} />
                  )}
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.plantNameAlecrim}>Tomate Cereja</Text>
                  <Text style={styles.plantInfoAlecrim}>Erva de Alta Luminosidade</Text>
                </View>
              </TouchableOpacity>
            </View><View style={styles.row}>
              <TouchableOpacity onPress={() => handleSelectedPlant('boldo')} style={styles.secondRowRect}>
                <View style={styles.alecrimIconContainer}>
                  {selectedItem == 'boldo' ? (
                    <Image source={images['Boldo']} style={styles.alecrimIcon} />
                  ) : (
                    <Image source={images['BoldoGray']} style={styles.alecrimIcon} />
                  )}
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.plantNameAlecrim}>Boldo</Text>
                  <Text style={styles.plantInfoAlecrim}>Erva de Alta Luminosidade</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSelectedPlant('salsinha')} style={styles.secondRowRect}>
                <View style={styles.alecrimIconContainer}>
                  {selectedItem == 'salsinha' ? (
                    <Image source={images['Salsinha']} style={styles.alecrimIcon} />
                  ) : (
                    <Image source={images['SalsinhaGray']} style={styles.alecrimIcon} />
                  )}
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.plantNameAlecrim}>Salsinha</Text>
                  <Text style={styles.plantInfoAlecrim}>Erva de Baixa Luminosidade</Text>
                </View>
              </TouchableOpacity>
            </View><View style={styles.row}>
              <TouchableOpacity onPress={() => handleSelectedPlant('orégano')} style={styles.secondRowRect}>
                <View style={styles.alecrimIconContainer}>
                  {selectedItem == 'orégano' ? (
                    <Image source={images['Orégano']} style={styles.alecrimIcon} />
                  ) : (
                    <Image source={images['OréganoGray']} style={styles.alecrimIcon} />
                  )}
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.plantNameAlecrim}>Orégano</Text>
                  <Text style={styles.plantInfoAlecrim}>Erva de Alta Luminosidade</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSelectedPlant('cebolinha')} style={styles.secondRowRect}>
                <View style={styles.alecrimIconContainer}>
                  {selectedItem == 'cebolinha' ? (
                    <Image source={images['Cebolinha']} style={styles.alecrimIcon} />
                  ) : (
                    <Image source={images['CebolinhaGray']} style={styles.alecrimIcon} />
                  )}
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.plantNameAlecrim}>Cebolinha</Text>
                  <Text style={styles.plantInfoAlecrim}>Erva de Baixa Luminosidade</Text>
                </View>
              </TouchableOpacity>
            </View><View style={styles.row}>
              <TouchableOpacity onPress={() => handleSelectedPlant('manjericão')} style={styles.secondRowRect}>
                <View style={styles.alecrimIconContainer}>
                  {selectedItem == 'manjericão' ? (
                    <Image source={images['Manjericão']} style={styles.alecrimIcon} />
                  ) : (
                    <Image source={images['ManjericãoGray']} style={styles.alecrimIcon} />
                  )}
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.plantNameAlecrim}>Manjericão</Text>
                  <Text style={styles.plantInfoAlecrim}>Erva de Alta Luminosidade</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSelectedPlant('hortelã')} style={styles.secondRowRect}>
                <View style={styles.alecrimIconContainer}>
                  {selectedItem == 'hortelã' ? (
                    <Image source={images['Hortelã']} style={styles.alecrimIcon} />
                  ) : (
                    <Image source={images['HortelãGray']} style={styles.alecrimIcon} />
                  )}
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.plantNameAlecrim}>Hortelã</Text>
                  <Text style={styles.plantInfoAlecrim}>Erva de Baixa Luminosidade</Text>
                </View>
              </TouchableOpacity>
            </View><View style={styles.row}>
              <TouchableOpacity onPress={() => handleSelectedPlant('tomilho')} style={styles.secondRowRect}>
                <View style={styles.alecrimIconContainer}>
                  {selectedItem == 'tomilho' ? (
                    <Image source={images['Tomilho']} style={styles.alecrimIcon} />
                  ) : (
                    <Image source={images['TomilhoGray']} style={styles.alecrimIcon} />
                  )}
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.plantNameAlecrim}>Tomilho</Text>
                  <Text style={styles.plantInfoAlecrim}>Erva de Alta Luminosidade</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSelectedPlant('coentro')} style={styles.secondRowRect}>
                <View style={styles.alecrimIconContainer}>
                  {selectedItem == 'coentro' ? (
                    <Image source={images['Coentro']} style={styles.alecrimIcon} />
                  ) : (
                    <Image source={images['CoentroGray']} style={styles.alecrimIcon} />
                  )}
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.plantNameAlecrim}>Coentro</Text>
                  <Text style={styles.plantInfoAlecrim}>Erva de Baixa Luminosidade</Text>
                </View>
              </TouchableOpacity>
            </View><View style={styles.rowCentered}>
              <TouchableOpacity onPress={() => handleSelectedPlant('outros')} style={styles.secondRowRect}>
                <View style={styles.alecrimIconContainer}>
                  {selectedItem == 'outros' ? (
                    <Image source={images['Outros']} style={styles.alecrimIcon} />
                  ) : (
                    <Image source={images['OutrosGray']} style={styles.alecrimIcon} />
                  )}
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.plantNameAlecrim}>Outros</Text>
                </View>
              </TouchableOpacity>
            </View>
            </>
          )}
          </View>
        </View>

        <TouchableOpacity onPress={() => handlePickerChange(selectedItem)} style={styles.nextButton}>
          <Text style={styles.nextText}>Seguir</Text>
        </TouchableOpacity>

        <View style={styles.footerButtons}>
          <TouchableOpacity onPress={() => navigation.navigate('UserGardens', {userId: userId})} style={styles.homeButton}>
            <FontAwesome6 name="house" size={24} color="white" />
            <Text style={styles.homeText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.profileButton}>
            <FontAwesome6 name="user" size={24} color="white" />
            <Text style={styles.homeText}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover', // or 'contain'
    },
    nextButton: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 95,
      width: 300,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#65B307',
      borderRadius: 10,
    },
    nextText: {
      color: "#fff",
      fontFamily: 'Inter-SemiBold',
      fontSize: 19,
    },
    footerButtons: {
      flexDirection: 'row',
      width: '100%',
      backgroundColor: '#19240A',
      padding: 10,
      borderTopStartRadius: 25,
      borderTopEndRadius: 25,
      alignItems: 'center',
      shadowColor: '#000',
      height: 80,
    },
    homeButton: {
      position: 'absolute',
      top: 20, // Adjust according to your layout
      left: 40, // Adjust according to your layout
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },
    homeText: {
      color: "#fff"
    },
    profileButton: {
      position: 'absolute',
      top: 20,
      right: 40,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    plantNameAlecrim: {
      fontSize: 16,
      color: '#19240A',
      fontWeight: "400",
      marginLeft: -40,
      marginTop: -10
    },
    plantInfoAlecrim: {
      fontSize: 10,
      color: '#19240A',
      fontWeight: "400",
      marginLeft: -40,
    },
    alecrimRect: {
      width: '50%',
      marginTop: 30,
      borderRadius: 10
    },
    secondRowRect: {
      width: '50%',
      borderRadius: 10,
      marginTop: 10
    },
    alecrimIcon: {
      width: 40,
      height: 40,
    },
    alecrimIconContainer: {
      width: 40,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10
    },
    iconContainer: {
      width: 70,
      height: 70,
      borderRadius: 25,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 50,
      marginTop: 25
    },
    infoContainer: {
      position: 'absolute',
      left: 95,
      top: 20
    },
    plantName: {
      fontSize: 20,
      color: '#19240A',
      fontWeight: "400"
    },
    plantInfo: {
      fontSize: 12,
      color: '#19240A',
      fontWeight: "400",
      marginLeft: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#19240A',
      flex: 1,
      marginLeft: 30,
    },
    icon: {
      width: 70,
      height: 70,
    },
    whiteRect: {
      width: '95%',
      height: '78%',
      backgroundColor: '#FFF',
      borderRadius: 20
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(16,36,10,0.77)',
      position: 'relative' // Optional: overlay to darken the image
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
    },
    rowCentered: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginLeft: 20
    },
    leftBtn: {
      marginRight: 20
    }
  });


export default PlantSelectScreen;
