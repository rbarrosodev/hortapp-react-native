// types.ts

export type RootStackParamList = {
    Splash: undefined; // No parameters expected for the Splash screen
    Main: undefined; // No parameters expected for the Main screen
    Login: undefined;
    Signup: undefined;
    GardenSelect: undefined; 
    GardenCode: userId;
    GardenPlants: gardenCode;
    PlantComponent: undefined;
    PlantSelect: undefined; // Add more screen names and their expected parameters here if needed
  };