import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import theme from '../../assets/themes';

const SharedAlbumTitleCard = ({album}) => {
    return (
        <ImageBackground
            source={album.background}
            style={styles.imageBackground}
        >
        <View style={styles.topImageBackground}>
            <View>
                <Text style={styles.imageTitle}>{album.title}</Text>
                <Text style={styles.imageSubTitle}>{`Created by ${album.user}`}</Text>
            </View>
            <View>
                <Text style={styles.imageNumber}>102 photos</Text>
            </View>

        </View>

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