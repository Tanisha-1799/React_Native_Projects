import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './components/Home';
import * as React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

Icon.loadFont();


export default function App() {

  const Stack = createNativeStackNavigator();
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
   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown : false,
          

        }} />
      </Stack.Navigator>
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

