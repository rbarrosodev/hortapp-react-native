/**
 * @format
 */

import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import {name as appName} from './app.json';

// Initialize Firebase Messaging background message handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});
  
  // Initialize Firebase Messaging foreground message handler
messaging().onMessage(async remoteMessage => {
    console.log('A new message arrived!', remoteMessage);
    // Handle foreground message here
});

AppRegistry.registerComponent(appName, () => App);
