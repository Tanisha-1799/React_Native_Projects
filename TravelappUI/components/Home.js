import { StyleSheet, ScrollView, SafeAreaView, Image, Text, View, Button } from 'react-native';
import React from "react";
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';
import learnMoreData from '../assets/data/learnMoreData';
import prr2 from '../assets/images/prr2.jpg';


Feather.loadFont();

const Home=({navigation})=>{
    return (
        <View style={styles.container}>
        <ScrollView>

                    {/*Header */}
            <SafeAreaView>
                <View style={styles.menuWrapper}>
                    <Feather 
                        name="menu" 
                        size={32} 
                        color={colors.black} 
                        style={styles.menuIcon}
                    />
                    <Image source={prr2} style={styles.profileImage}/>

                </View>

            </SafeAreaView>

                    {/* Dicover */}
            <View style={styles.discoverWrapper}>
                <Text style={styles.discoverTitle}>Discover</Text>
                <View style={styles.discoverCategoriesWrapper}>
                    <Text style={styles.discoverCategoryText}>All</Text>
                    <Text style={styles.discoverCategoryText}>All</Text>
                    <Text style={styles.discoverCategoryText}>All</Text>
                    <Text style={styles.discoverCategoryText}>All</Text>
                    <Text style={styles.discoverCategoryText}>All</Text>
                </View>
            </View>


        </ScrollView>
            
        </View>
        
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        color:colors.white,

    },
    menuWrapper:{
        marginHorizontal:20,
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    menuIcon:{},
    profileImage:{
        width:52,
        height:52,
        borderRadius:10,
       
    },


});
export default Home;