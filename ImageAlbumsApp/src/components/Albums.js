import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import theme from '../../assets/themes/index';

const Albums=({navigation})=>{
    return(
        <>
          <ScrollView>
            <View style={styles.albumContainer}>

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