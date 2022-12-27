import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";

import * as Font from "expo-font";
import Apploading from "expo-app-loading";


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
          <StatusBar style="auto" />
        </View>
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
});
