import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors';

Feather.loadFont
const Home =()=>{
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/prr2.jpg')} 
                    style={styles.profileImage}/>
                    <Feather name='menu' size={24} color={colors.textDark} />
                    
                </View>
            </SafeAreaView>
            
        </View>
    );
}
export default Home;
const styles=StyleSheet.create({
    container:{
        paddingTop:40,
        flex:1,
    },
    headerWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
    },
    profileImage:{
        width:50,
        height:50,
    },
});