import { StyleSheet, Text, View, Button } from 'react-native';
import React from "react";
const Home=({navigation})=>{
    return (
        <View>
            <Text>Home</Text>
            <Button onPress={()=> navigation.navigate("Details")}
                title="Click Me!!!"
            />
        </View>
        
    );
};
export default Home;