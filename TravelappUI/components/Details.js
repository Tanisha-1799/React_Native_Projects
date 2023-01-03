import { StyleSheet, ImageBackground, Text, View, Dimensions } from 'react-native';
import React from "react";
import colors from '../assets/colors/colors';


const height=Dimensions.get('window').height;
const Details=({route, navigation})=>{
    const {item}=route.params
    return (
        <View style={styles.container}>
           <ImageBackground source={item.imageBig} style={styles.backgroundImage}></ImageBackground>
           <View style={styles.descriptionWrapper}>

           </View>
        </View>
        
    );
};
export default Details; 

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
    },
    backgroundImage:{
        height:height*0.6,
    },
    descriptionWrapper:{},
});