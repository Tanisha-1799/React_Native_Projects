import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home =()=>{
    return (
        <View style={styles.title}>
            <Text style={styles.text}>Hello to home</Text>
        </View>
    );
}
export default Home;
const styles=StyleSheet.create({
    text:{
        fontFamily:"MontserratBold",
        color:'000000',    
    },
});