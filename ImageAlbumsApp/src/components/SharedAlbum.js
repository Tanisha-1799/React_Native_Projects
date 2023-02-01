import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SharedAlbumTitleCard from './SharedAlbumTitleCard';
import Avatars from './Avatars';

const SharedAlbum = ({route}) => {
const {album}=route.params;

    return (
       <ScrollView>
            <SharedAlbumTitleCard album={album} />
            <View style={Styles.avatarContainer}>
            <Avatars avatars={album.avatars} />
            <Text>{`${album.avatars.length} people`}</Text>

            </View>

       </ScrollView>
        
    );
};

const styles=StyleSheet.create({
    avatarContainer:{
        flexDirection:'row',
        alignItems:'center',
        
    }
})

export default SharedAlbum;