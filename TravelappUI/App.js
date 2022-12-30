import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import Apploading from "expo-app-loading";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from './components/Details';
import Home from './components/Home';
import Liked from './components/Liked';
import Profile from './components/Profile';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();
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
 
  
 
  const Tab = createBottomTabNavigator();

  const TabNavigator=()=>{
    return(
      <TabNavigator
        tabBarOptions={{
          style:styles.tabBar,
          activeTintColor:colors.orange,
          inacctiveTintColor:colors.gray,
          showLabel:false,
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon:({color})=> <Entypo name='home' size={32} color={color} />
        }}/>
        <Tab.Screen name="Liked" component={Liked} options={{
          tabBarIcon:({color})=> <Entypo name='heart' size={32} color={color} />
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon:({color})=> <MaterialCommunityIcons name='account' size={32} color={color} />
        }}/>
      </TabNavigator>
    );
  }



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="TabNavigator" 
        component={TabNavigator}
        options={{headerShown:false}} />
        <Stack.Screen 
        name="Details" 
        component={Details}
        options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
 
  tabBar:{
    backgroundColor:colors.white,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
});