import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../assets/themes';

const Seperator = () => {
    return (
        <View style={styles.seperator}>

        </View>
    );
};

const styles=StyleSheet.create({
    seperator:{
        marginTop:theme.spacing.m,
        marginHorizontal:theme.spacing.m,
        height:theme.borderRadius.xs,
        backgroundColor:theme.colors.gray,
    },

});

export default Seperator;