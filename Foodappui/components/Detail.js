import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors';

const Detail=({route})=>{
    const {item}=route.params;

    return(
        <View>
            <Text>Details Page !!!</Text>
        </View>
    );
} 
export default Detail;
