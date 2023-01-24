import React from 'react';
import theme from '../../assets/themes';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

const Card = ({item}) => {
    return (
        <ImageBackground
            source={item.background}
            style={styles.imageBackground}
        >
            <Pressable>
                <View style={styles.imageContentContainer}>
                    <View>
                        <Text style={styles.imageTitle}>{item.title}</Text>
                        <Text style={styles.imageSubtitle}>{`Created by ${item.user}`}</Text>
                    </View>

                    <View>
                        {/*Avatars go here !!!*/}
                    </View>

                </View>
            </Pressable>
        </ImageBackground>
    );
};

const styles=StyleSheet.create({
    imageBackground:{
        resizeMode:'cover',
        overflow:'hidden',
        height:theme.imageHeight.s,
        marginTop:theme.spacing.m,
        marginHorizontal:theme.spacing.m,
        paddingHorizontal:theme.spacing.m,
        borderRadius:theme.borderRadius.m,
        justifyContent:'center',

    },
    imageContentContainer:{

    },
    imageTitle:{
        ...theme.textVariants.h1,
        color:theme.colors.white,
    },
    imageSubtitle:{
        ...theme.textVariants.body2,
        color:theme.colors.white,
    },
})

export default Card;