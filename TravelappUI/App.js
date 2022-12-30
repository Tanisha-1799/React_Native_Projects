import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import Apploading from "expo-app-loading";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from './components/Details';
import Home from './components/Home';
import Liked from './components/Liked';
import Profile from './components/Profile';



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
 
  
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabNavigator=()=>{
    return(
      <TabNavigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Liked" component={Liked} />
        <Tab.Screen name="Profile" component={Profile} />
      </TabNavigator>
    );
  }



  export default function App() {
    const [fontsloaded, setFontsLoaded] = useState(false);
  
    if (fontsloaded) {
      return (
       
       <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="TabNavigator" component={TabNavigator} />

         
       </Stack.Navigator>

       </NavigationContainer>
       
      );
    } else {
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
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    Texts: {
      fontFamily: "latoBoldItalic",
    },
  });