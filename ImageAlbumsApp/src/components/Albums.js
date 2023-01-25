import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import theme from '../../assets/themes/index';
import albumPage from '../../assets/data/albumPage';
import Card from './Card';

const Albums=({navigation})=>{
    return(
        <>
          <ScrollView>
            <View style={styles.albumContainer}>
            {albumPage.map((item, index)=>              
                    <View key={index}>
                    <Card item={item}/>
                    </View> 

                    //Add Separator if the index is 1   
                   // {index === 1 <>}        
            )}

            </View>
          </ScrollView>  
        </>
    );
};

const styles=StyleSheet.create({
    albumContainer:{
        marginBottom:theme.spacing.l,
    },
})

export default Albums;