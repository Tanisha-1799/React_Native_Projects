import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors';

Feather.loadFont
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
});