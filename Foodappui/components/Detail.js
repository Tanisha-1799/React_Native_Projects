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

    const renderIngredientItem=({item})=>{
        return(
            <View style={[styles.ingredientItemWrapper],{
                marginLeft : item.id== '1' ? 20 : 0,
            }}>
               <Image source={item.image} style={styles.ingredientImage}/>
            </View>

        );
    }

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
        {/*Title*/}
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>{item.title}</Text>
        </View>

        {/*Price*/}
        <View style={styles.priceWrapper}>
            <Text style={styles.priceText}>${item.price}</Text>
        </View>

        {/*Pizza Info Section */}
        <View style={styles.infoWrapper}>
            <View style={styles.infoLeftWrapper}>
                <View style={styles.infoItemWrapper}>
                    <Text style={styles.infoItemTitle}>Size</Text>
                    <Text 
                    style={styles.infoItemContext}>
                    {item.sizeName} {item.sizeNumber}"</Text>
                </View>
                <View style={styles.infoItemWrapper}>
                    <Text style={styles.infoItemTitle}>Crust</Text>
                    <Text 
                    style={styles.infoItemContext}>
                    {item.crust}</Text>
                </View>
                <View style={styles.infoItemWrapper}>
                    <Text style={styles.infoItemTitle}>Delivery In</Text>
                    <Text 
                    style={styles.infoItemContext}>
                    {item.deliveryTime} mins</Text>
                </View>
            
            </View>
            <View>
                <Image 
                    style={styles.itemImage}
                    source={item.image}
                />
            </View>
        </View>

        {/*Ingredients */}
        <View style={styles.ingredientWrapper}>
            <Text style={styles.ingredientTitle}>Ingredients</Text>
            <View style={styles.ingredientListWrapper}>
            <FlatList
                    data={item.ingredients}
                    renderItem={renderIngredientItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
         />
            </View>
        </View>
        {/*Place Order Button*/}
        <View></View>

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
    titleWrapper:{
        paddingHorizontal:20,
        marginTop:20,

    },
    title:{
        fontFamily:'MontserratBold',
        fontSize:32,
        color:colors.textDark,
        width:'60%',
    },
    priceWrapper:{
        marginTop:20,
        paddingHorizontal:20,
        

    },
    priceText:{
        color:colors.price,
        fontFamily:'MontserratBold',
        fontSize:32,
    },
    infoWrapper:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    infoLeftWrapper:{
        paddingLeft:20,

    },
    
    infoItemWrapper:{
        marginBottom:20,

    },
    infoItemTitle:{
        fontFamily:'MontserratMedium',
        fontSize:14,
        color:colors.textLight,
    },
    infoItemContext:{
        fontFamily:'MontserratSemiBold',
        fontSize:18,
        color:colors.textDark,
    },
    itemImage:{
        resizeMode:'contain',
        marginLeft:40,

    },
    ingredientWrapper:{
        marginTop:40,


    },
    ingredientTitle:{
        paddingHorizontal:20,
        fontFamily:'MontserratBold',
        fontSize:16,
        color:colors.textDark,

    },
    ingredientListWrapper:{
        paddingVertical:20,

    },
    ingredientItemWrapper:{
      backgroundColor:colors.white,
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:10,
      marginRight:15,
      borderRadius:15, 
      shadowColor:colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.05,
        shadowRadius:10,
        elevation:2, 
    },
    ingredientImage:{
        resizeMode:'contain',
    },


});
