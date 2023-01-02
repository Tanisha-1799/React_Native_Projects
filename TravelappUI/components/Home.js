import { StyleSheet, FlatList, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView, Image, Text, View, Button } from 'react-native';
import React from "react";
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';
import learnMoreData from '../assets/data/learnMoreData';
import prr2 from '../assets/images/prr2.jpg';



Feather.loadFont();
Entypo.loadFont();

const Home=({navigation})=>{

    const renderDiscoverItem=({item})=>{
        return (
            <TouchableOpacity
            onPress={()=>navigation.navigate('Details', {
                item:item,
            })}>
                <ImageBackground 
                source={item.image}
                style={styles.discoverItem}
                imageStyle={styles.discoverItemImage}
                >
                <Text style={styles.discoverItemTitle}>{item.title}</Text>
                <View style={styles.discoverItemLocationWrapper}>
                    <Entypo name="location-pin" size={18} color={colors.white}/>
                    <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                </View>



                </ImageBackground>
            </TouchableOpacity>
        )
    }




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

                    {/* Discover section */}
            <View style={styles.discoverWrapper}>
                <Text style={styles.discoverTitle}>Discover</Text>
                <View style={styles.discoverCategoriesWrapper}>
                    <Text style={[styles.discoverCategoryText,{
                        color:colors.orange,
                    }]}>All</Text>
                    <Text style={styles.discoverCategoryText}>Destinations</Text>
                    <Text style={styles.discoverCategoryText}>Cities</Text> 
                    <Text style={styles.discoverCategoryText}>Experiences</Text>
                </View>
                <View style={styles.discoverItemWrapper}>
                    <FlatList 
                        data={discoverData}
                        renderItem={renderDiscoverItem}
                        keyExtractor={(item)=>item.id}
                        horizontal 
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

            {/* Activities Section */}


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
    discoverWrapper:{
        marginHorizontal:20,
        marginTop:20,

    },
    discoverTitle:{
        fontFamily:'latoBold',
        fontSize:32,

    },
    discoverCategoriesWrapper:{
        flexDirection:'row',
        marginTop:20,
    },
    discoverCategoryText:{
        marginRight:30,
        fontFamily:'latoRegular',
        fontSize:16,
        color:colors.gray,
    },
    discoverItem:{
        width:170,
        height:250,
        justifyContent:'flex-end',
        paddingHorizontal:10,
        paddingVertical:15,
        marginRight:20,
        marginTop:10,
    },
    discoverItemTitle:{
        fontFamily:'latoBold',
        fontSize:18,
        color:colors.white,
    },
    discoverItemImage:{
        borderRadius:20,
    },
    discoverItemLocationWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5,
    },
    discoverItemLocationText:{
        marginLeft:5,
        fontFamily:'latoBold',
        fontSize:14,
        color:colors.white,
    },


});
export default Home;