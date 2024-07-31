import React from "react";
import { View,Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Button1 from "../../components/button1";
import Button2 from "../../components/button2";
import Input1 from "../../components/input1"
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Homepage=({navigation}) => {
    // // self-check
    // console.log (navigation)
    

    return (
        <SafeAreaView>
        <View>
            <Text style={styles.Title}>PARENTS SHARE RESOURCES</Text>      
            <Text style={styles.SubTitle}>Homepage -Temporary</Text>
            
                 
        </View>
        </SafeAreaView>
        
        
    );
}

export default React.memo(Homepage);