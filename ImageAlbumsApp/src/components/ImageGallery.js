import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';


//creating component to display the image in list form
const ListImage=({image})=>{
    return(
        <Image 
            source={image.background}
            style={styles.galleryImage}
        />
    )
}

const ImageGallery = ({images}) => {
    return (
        <View style={styles.galleryContainer}>
            <Text style={styles.galleryText}>Photos</Text>

            {/**Using Flatlist here */}

            <FlatList
            data={images}
            keyExtractor={item=>item.id}
            numColumns={3}
            scrollEnabled={false}
            renderItem={({item})=><ListImage image={item}/>}
            />



        </View>
    );
};
const styles=StyleSheet.create({
    galleryContainer:{

    },
    galleryText:{},

})

export default ImageGallery;