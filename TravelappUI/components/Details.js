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
    titleWrapper:{},
    itemTitle:{},
    locationWrapper:{},
    locationTitle:{},
});