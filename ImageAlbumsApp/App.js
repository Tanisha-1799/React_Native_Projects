import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import Feather from '@expo/vector-icons/Feather'
//import { useFonts, Nunito_400Regular as NunitoRegular, Nunito_700Bold as NunitoBold } from '@expo-google-fonts/nunito';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

const getFonts = () =>
  Font.loadAsync({
   
  });



export default function App() {

 
  const [fontsloaded, setFontsLoaded] = useState(false);

  if (fontsloaded) {
    return (
     //you can return any component of your choice here
      <View style={styles.container}>
        <Text style={styles.Texts}>
          Open up App.js to start working on your app!
        </Text>
      
      </View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
