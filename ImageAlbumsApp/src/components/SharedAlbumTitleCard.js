import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import theme from '../../assets/themes';

const SharedAlbumTitleCard = ({album}) => {
    return (
        <ImageBackground
            source={album.background}
            style={styles.imageBackground}
        >

        </ImageBackground>
    );
};

const styles=StyleSheet.create({
    imageBackground:{
        resizeMode:'cover',
        overflow:'hidden',
        height:theme.imageHeight.l,
        marginTop:theme.spacing.m,
        marginHorizontal:theme.spacing.m,
        paddingHorizontal:theme.spacing.m,
        borderRadius:theme.borderRadius.m,
        justifyContent:'flex-end',
        
    },
});

export default SharedAlbumTitleCard;