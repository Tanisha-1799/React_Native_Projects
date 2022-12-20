import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../assets/colors';
const Home=()=>{
    return(
        <View style={styles.title}>
            <Text>Welcome to home Page!!</Text>
        </View>
    );
};
export default Home;

const styles=StyleSheet.create({
    title:{
        marginVertical:300,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.bluefaded,
        
    },
});