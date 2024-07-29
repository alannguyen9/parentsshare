import React from "react";
import { View,Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";


const ResourcePage=() => {
    return (
        <SafeAreaView>
        <View>
            <Text style={styles.Title}>PARENTS SHARE RESOURCES</Text>  
            <Text style={styles.SubTitle}>Resource page -Under construction</Text>          
        </View>
        </SafeAreaView>
        
        
    );
}

export default React.memo(ResourcePage);