import React, { useLayoutEffect, useRef } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../assets/themes/index';
import albumPage from '../../assets/data/albumPage';
import Card from './Card';
import Seperator from './Seperator';
import Feather from '@expo/vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet'; 
import BottomSheetContent from './BottomSheetContent';

const Albums=({navigation, navigation:{ setOptions } })=>{

    //Making sheetRef for bottom sheet
    const sheetRef=useRef();


    //We are going to use the header component that is provided by react navigation
    //Then we will just customize this header
    //we want to do this as soon as the component is mounted 

    useLayoutEffect(()=>{
      setOptions({
        headerRight:()=>(
          <TouchableOpacity onPress={openBottomSheet}>
          <View style={styles.openSheetButton}>
           <Feather name="plus" size={16} color={theme.colors.white}/>
          </View>

          </TouchableOpacity>
        )
      })
    })
    //making function to render the content of bottom sheet
    const renderBottomSheetContent=()=> <BottomSheetContent handleClose={closeBottomSheet}/>
    
    
    const closeBottomSheet =()=>{
      sheetRef.current.snapTo(1);
    }
    
    

    return(
        <>
          <ScrollView>
            <View style={styles.albumContainer}>
            {albumPage.map((item, index)=>              
                    <View key={index}>
                    <Card item={item} navigation={navigation}/>

                    //Add Separator if the index is 1   
                   {index === 1 && <Seperator />}  
                    </View> 

                         
            )}

            </View>
          </ScrollView>
          <BottomSheet 
            ref={sheetRef}
            snapPoints={[250,0]}
            initialSnap={1}
            borderRadius={10}
            renderContent={renderBottomSheetContent}
          />  
        </>
    );
};

const styles=StyleSheet.create({
    albumContainer:{
        marginBottom:theme.spacing.l,
    },
    openSheetButton:{
      width:32,
      height:32,
      backgroundColor:theme.colors.primary,
      marginRight:theme.spacing.m,
      borderRadius:16,
      justifyContent:'center',
      alignItems:'center',
    },
})

export default Albums;