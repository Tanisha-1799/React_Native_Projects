import { StyleSheet, ImageBackground, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import React from "react";
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';


const height=Dimensions.get('window').height;
Entypo.loadFont();
const Details=({route, navigation})=>{
    const {item}=route.params
    return (
        <View style={styles.container}>
           <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
               <TouchableOpacity style={styles.backIcon} onPress={()=>navigation.goBack()} >
                <Entypo name="chevron-left" size={32} color={colors.white}/>

               </TouchableOpacity>
               <View style={styles.titleWrapper}>
                   <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.locationWrapper}>
                        <Entypo name="location-pin" size={24} color={colors.white} />
                        <Text style={styles.locationTitle}>{item.location}</Text>
                    </View>
               </View>
           </ImageBackground>
           <View style={styles.descriptionWrapper}>
            <View style={styles.heartWrapper}>
                <Entypo name="heart" size={32} color={colors.orange} />
            </View>
            <View style={styles.descriptionTextWrapper}>
            <Text style={styles.descriptionTitle}> Description</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>

            </View>
            <View style={styles.infoWrapper}>
                <View style={styles.infoItems}>
                    <Text style={styles.infoTitle}>PRICE</Text>
                    <View style={styles.infoTextWrapper}>
                        <Text style={styles.infoText}>${item.price}</Text>
                        <Text style={styles.infoSubText}>/persons</Text>
                    </View>                                        
                </View>
                <View style={styles.infoItems}>
                    <Text style={styles.infoTitle}>RATING</Text>
                    <View style={styles.infoTextWrapper}>
                        <Text style={styles.infoText}>{item.rating}</Text>
                        <Text style={styles.infoSubText}>/5</Text>
                    </View>                                        
                </View>
                <View style={styles.infoItems}>
                    <Text style={styles.infoTitle}>DURATION</Text>
                    <View style={styles.infoTextWrapper}>
                        <Text style={styles.infoText}>{item.duration}</Text>
                        <Text style={styles.infoSubText}>hours</Text>
                    </View>                                        
                </View>
            </View>


           </View>
        </View>
        
    );
};
export default Details; 

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
    },
    backgroundImage:{
        height:height*0.6,
        justifyContent:'space-between',
    },
    descriptionWrapper:{
        flex:1,
        backgroundColor:colors.white,
        marginTop:-20,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        
        
    },
    backIcon:{
        marginLeft:20,
        marginTop:60,

    },
    titleWrapper:{
        marginHorizontal:20,
        marginBottom:30,

    },
    itemTitle:{
        fontFamily:'latoBold',
        fontSize:32,
        color:colors.white,
    },
    locationWrapper:{
        flexDirection:'row',
        marginTop:5,
        alignItems:'center',
    },
    locationTitle:{
        fontFamily:'latoBold',
        fontSize:18,
        color:colors.white,
    },
    heartWrapper:{
        position:'absolute',
        right:40,
        top:-25,
        width:50,
        height:50,
        backgroundColor:colors.white,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,

        },
        shadowOpacity:0.25,
        shadowRadius:4.04,
        elevation:10,


    },
    descriptionTextWrapper:{
        marginTop:20,
        marginHorizontal:20,
    },
    descriptionTitle:{
        fontFamily:'latoBold',
        fontSize:24,
        color:colors.black,
    },
    descriptionText:{
        marginTop:10,
        fontFamily:'latoRegular',
        fontSize:16,
        color:colors.darkGray,
        height:75,
    },
    
});