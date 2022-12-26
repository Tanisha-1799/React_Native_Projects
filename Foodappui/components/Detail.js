import React from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Text, View, Image, FlatList, TouchableOpacityBase } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors';


Feather.loadFont();
MaterialCommunityIcons.loadFont();
const Detail=({route, navigation})=>{
    const {item}=route.params;

    return(
        <View style={styles.container}>
        {/*Header*/}

        <SafeAreaView>
        <View style={styles.headerWrapper}>
           <TouchableOpacity
           onPress={()=> navigation.goBack()}>
           <View style={styles.headerLeft}>
                <Feather name="chevron-left" size={12} color={colors.textDark} />
            </View>
           </TouchableOpacity>
            <View style={styles.headerRight}>
                <MaterialCommunityIcons name="star" size={12} color={colors.white} />
            </View>
        </View>
            
       
        </SafeAreaView>

        
        </View>
    );
} 
export default Detail;
const styles= new StyleSheet.create({
    container:{
        flex:1,

    },
    headerWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        paddingTop:45,

    },
    headerLeft:{
        borderColor:colors.textLight,
        borderWidth:2,
        padding:12,
        borderRadius:10,
    },
    headerRight:{
        backgroundColor:colors.primary,
        borderColor:colors.primary,
        borderWidth:2,
        padding:12,
        borderRadius:10,
    },

});
