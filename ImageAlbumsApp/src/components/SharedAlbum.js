import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SharedAlbumTitleCard from './SharedAlbumTitleCard';
import Avatars from './Avatars';
import theme from '../../assets/themes';

const SharedAlbum = ({route}) => {
const {album}=route.params;

    return (
       <ScrollView>
            <SharedAlbumTitleCard album={album} />
            <View style={Styles.avatarContainer}>
            <Avatars avatars={album.avatars} />
            <Text style={styles.avatarContainerText}>{`${album.avatars.length} people`}</Text>

            </View>

       </ScrollView>
        
    );
};

const styles=StyleSheet.create({
    avatarContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:theme.colors.lightGray,
        marginVertical:theme.spacing.l,
        marginHorizontal:theme.spacing.m,
        paddingHorizontal:theme.spacing.m,
        paddingVertical:theme.spacing.xs,
        borderRadius:theme.borderRadius.m,

    },
    avatarContainerText:{
        ...theme.textVariants.body3,
        color:theme.colors.gray,
        
    }
})

export default SharedAlbum;