import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import SharedAlbumTitleCard from './SharedAlbumTitleCard';

const SharedAlbum = ({route}) => {
const {album}=route.params;

    return (
       <ScrollView>
            <SharedAlbumTitleCard album={album} />

       </ScrollView>
        
    );
};

export default SharedAlbum;