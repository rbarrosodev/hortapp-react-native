// types.ts

export type RootStackParamList = {
    Splash: undefined; // No parameters expected for the Splash screen
    Main: undefined; // No parameters expected for the Main screen
    Login: undefined;
    FirstTime: userId;
    UserGardens: userId;
    GardenSelect: undefined; 
    GardenCode: userId;
    GardenPlants: gardenCode;
    PlantComponent: plantData, gardenCode, userId, gardenName;
    PlantSelect: gardenCode, previousValue, selectedLuminosity, userId, plantNumber;
    ConnectionInstructions: userId; // Add more screen names and their expected parameters here if needed
  };