import React from 'react';

import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
    title: 'Save time by tracking your studies ',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: require('./assets/images/Onboard_1.png'),
    
  },
  {
    title: 'Stay on top of your education',
    text: 'Reduce your stress, increase your productivity',
    image: require('./assets/images/Onboard_2.png'),
    
  },
  {
    title: 'Spend more time doing the things you love',
    text: "Get started within five minutes",
    image: require('./assets/images/Onboard_3.png'),
    
  },
];



export default function App() {

  const renderItem=({item})=>{
    return(
      <Text>Onboard Screen</Text>
    )
  }

  const keyExtractor=(item)=>item.title;
  return (
    <View style={{flex: 1}}>
    <StatusBar translucent backgroundColor="transparent" />
    <AppIntroSlider
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      data={data}
    />
  </View>
  );
}

