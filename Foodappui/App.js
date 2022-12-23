import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { useFonts } from 'expo-font';
import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import colors from './assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';

Icon.loadFont();

export default function App() {
  const getFonts = () =>
  Font.loadAsync({
    MontserratBold : require('./assets/fonts/Montserrat-Bold.ttf'),
    MontserratMedium : require('./assets/fonts/Montserrat-Medium.ttf'),
    MontserratRegular : require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratSemiBold : require('./assets/fonts/Montserrat-SemiBold.ttf')
  });
  const [fontsloaded, setFontsLoaded] = useState(false);

  
  if (fontsloaded) {
  return (
   
    <View style={styles.container}>
     
      <Home />
    </View>
  );}else {
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
  text:{
    fontFamily:"MontserratBold",
    color:colors.secondary,
    
  }
});
