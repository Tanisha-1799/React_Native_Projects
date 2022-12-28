import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";
import Home from './components/Home';
import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Stack = createNativeStackNavigator();
const getFonts = () =>
  Font.loadAsync({
    latoBlack: require("./assets/fonts/Lato-Black.ttf"),
    latoBlackItalic: require("./assets/fonts/Lato-BlackItalic.ttf"),
    latoBold: require("./assets/fonts/Lato-Bold.ttf"),
    latoBoldItalic: require("./assets/fonts/Lato-BoldItalic.ttf"),
    latoItalic: require("./assets/fonts/Lato-Italic.ttf"),
    latoLight: require("./assets/fonts/Lato-Light.ttf"),
    latoLightItalic: require("./assets/fonts/Lato-LightItalic.ttf"),
    latoRegular: require("./assets/fonts/Lato-Regular.ttf"),
    latoThin: require("./assets/fonts/Lato-Thin.ttf"),
    latoThinItalic: require("./assets/fonts/Lato-ThinItalic.ttf"),
    
  });

  export default function App() {
    const [fontsloaded, setFontsLoaded] = useState(false);
  
    if (fontsloaded) {



      return (
        <NavigationContainer>
        <Text>Hello Navigation</Text>
        </NavigationContainer>
      );






















































































    }
     else {
      return (
        <Apploading
          startAsync={getFonts}
          onFinish={() => {
            setFontsLoaded(true);
          }}
          onError={console.warn}
        />
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  Texts:{
    fontFamily:'LatoBoldItalic',
  },
});
