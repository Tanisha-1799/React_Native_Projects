import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors';

Feather.loadFont();
MaterialCommunityIcons.loadFont();
const Home =()=>{
    const renderCategoryItem=({item})=>{
        return(
            <View style={[styles.categoryItemWrapper, {
                backgroundColor : item.selected? colors.primary : colors.white,
                marginLeft : item.id==1? 10 : 0,

            }]}>
                <Image source={item.image} style={styles.categoryItemImage}/>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categorySelectWrapper,{
                    backgroundColor : item.selected ?colors.white : colors.secondary,

                }]}>
                    <Feather 
                        name='chevron-right'
                        size={8}
                        style={styles.categorySelectIcon}
                        color={item.selected ? colors.black : colors.white}
                    />
                </View>
            </View>
        );
    };
    
    return (
        <View style={styles.container}>

        <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/prr2.jpg')} 
                    style={styles.profileImage}/>
                    <Feather name='menu' size={24} color={colors.textDark} />
                    
                </View>
            </SafeAreaView>
            <View style={styles.titleWrapper}>
                <Text style={styles.titleSubtitle}>Food</Text>
                <Text style={styles.titleTitle}>Delivery</Text>
            </View>
            {/* Search */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={16} color={colors.textDark} />
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </View>
            

            {/* Categories */}
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitle}>Categories</Text>
                <View style={styles.categoriesListWrapper}>
                    <FlatList
                    data={categoriesData}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
         />

                </View>
            </View>
            {/*Popular section */}

            <View style={styles.popularWrapper}>
                <Text style={styles.popularTitle}>Popular</Text>
                {popularData.map((item)=>(
                    <View style={[styles.popularCardWrapper],{
                        marginTop:item.id==1?10:20,
                        backgroundColor:colors.white,
                        borderRadius:20,
                        paddingTop:20,
                        overflow:'hidden',
                        paddingLeft:20,
                        flexDirection:'row',
                    }}>
                        <View>
                            <View>
                                <View style={styles.popularTopWrapper}>
                                    <MaterialCommunityIcons 
                                        name="crown"
                                        size={12}
                                        color={colors.primary}
                                    />
                                    <Text style={styles.popularTopText}>Top of the Week</Text>
                                </View>
                                <View style={styles.popularTitlesWrapper}>
                                    <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                    <Text style={styles.popularTitlesWeight}>Weight {item.weight}</Text>
                                </View>

                            </View>
                            <View style={styles.popularCardBottom}>
                            <View style={styles.addPizzaButton}>
                                <Feather
                                    name='plus'
                                    size={10}
                                    color={colors.textDark}
                                />
                            </View>
                            <View style={styles.ratingWrapper}>
                                <MaterialCommunityIcons 
                                    name="star"
                                    size={10}
                                    color={colors.textDark}
                                />
                                <Text style={styles.rating}>{item.rating}</Text>

                            </View>

                            </View>
                        </View>
                        <View style={styles.popularCardRight}>
                            <Image source={item.image} style={styles.popularCardImage}/>
                        </View>
                    </View>
                ))}
            </View>
            </ScrollView>
            
        </View>
    );
}
export default Home;
const styles=StyleSheet.create({
    container:{
       
        flex:1,
    },
    headerWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingTop:40,
        alignItems:'center',
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:40,
    },
    titleWrapper:{
        marginTop:20,
        paddingHorizontal:20,
    },
    titleSubtitle:{
        fontFamily:'MontserratRegular',
        fontSize:16,
        color:colors.textDark,
    },
    titleTitle:{
        fontFamily:'MontserratBold',
        fontSize:32,
        color:colors.textDark,
        
    },
    searchWrapper:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        marginTop:20,
    },
    search:{
        flex:1,
        marginLeft:10,
        borderBottomColor:colors.textLight,
        borderBottomWidth:2,
    },
    searchText:{
        fontFamily:'MontserratSemiBold',
        fontSize:14,
        color:colors.textLight,
        marginBottom:5,
    },
    categoriesWrapper:{
        marginTop:30,
        marginHorizontal:20,
    },
    categoriesTitle:{
        fontFamily:'MontserratBold',
        fontSize:14,
        paddingHorizontal:10,
        
    },
    categoriesListWrapper:{
       paddingTop:15,
       paddingBottom:20,
    },
    categoryItemWrapper:{
        backgroundColor:colors.primary,
        marginRight:20,
        borderRadius:20,
        shadowColor:colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.05,
        shadowRadius:10,
        elevation:2,
    },
    categoryItemImage:{
        width:60,
        height:60,
        marginTop:25,
        alignSelf:'center',
        marginHorizontal:20,

    },
    categoryItemTitle:{
        textAlign:'center',
        fontFamily:'MontserratMedium',
        fontSize:14,
        marginTop:10,
    },
    categorySelectWrapper:{
        alignSelf:'center',
        justifyContent:'center',
        marginTop:20,
        width:26,
        height:26,
        borderRadius:26,
        marginBottom:20,
    },
    categorySelectIcon:{
        alignSelf:'center',

    },
    popularWrapper:{
        paddingHorizontal:20,

    },
    popularTitle:{
        fontFamily:'MontserratBold',
        fontSize:14,

    },
    popularCardWrapper:{
        backgroundColor:colors.white,
        borderRadius:20,
        paddingTop:20,
        
        paddingLeft:20,
        flexDirection:'row',
    

    },
    popularTopWrapper:{
        flexDirection:'row',
        
        alignItems:'center',
    },
    popularTopText:{
        marginLeft:10,
        fontFamily:'MontserratSemiBold',
        fontSize:14,
    },
    popularTitlesWrapper:{
        marginTop:20,
    },
    popularTitlesTitle:{
        fontFamily:'MontserratSemiBold',
        fontSize:14,
        color:colors.textDark,
    },
    popularTitlesWeight:{
        fontFamily:'MontserratMedium',
        fontSize:12,
        color:colors.textLight,
        marginTop:5,

    },
    popularCardBottom:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        
    },
    addPizzaButton:{
        backgroundColor:colors.primary,
        paddingHorizontal:40,
        paddingVertical:20,
        borderTopRightRadius:25,
        borderBottomLeftRadius:25,
        marginLeft:-20,

    },
    ratingWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20,
    },
    rating:{
        fontFamily:'MontserratSemiBold',
        fontSize:12,
        color:colors.textDark,
        marginLeft:5,
    },
    popularCardRight:{
       marginLeft:10,
    },
    popularCardImage:{
        width:210,
        height:125,
        resizeMode:'contain',

    },
});