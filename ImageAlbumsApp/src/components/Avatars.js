import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import theme from '../../assets/themes';

const Avatars = ({avatars}) => {
    return (
        <View>
            {avatars.map((item,index)=>
                <Image key={index}
                    source={item.image}
                    style={[
                        styles.avatarStyle,
                    ]}
                />
                
            )}
           
        </View>
        
    );
};

const styles=StyleSheet.create({
    avatarStyle:{
        resizeMode:'cover',
        width:theme.imageHeight.xs,
        height:theme.imageHeight.xs,
        borderRadius:theme.imageHeight.xs/2,

    },

});

export default Avatars;