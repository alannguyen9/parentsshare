import React from "react";
import { View,Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";


const Exchange=() => {
    return (
        <SafeAreaView>
        <View>
            <Text style={styles.Title}>PARENTS SHARE RESOURCES</Text>  
            <Text style={styles.SubTitle}>Schedule Exchange -Under construction</Text>          
        </View>
        </SafeAreaView>
        
        
    );
}

export default React.memo(Exchange);