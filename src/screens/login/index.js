import React from "react";
import { View,Text, SafeAreaView, Image } from "react-native";
import styles from "./styles";

const Login=() => {
    return (
        <SafeAreaView>
        <View>
            <Text style={styles.Title}>PARENTS SHARE RESOURCES</Text>
            {/*styles.image co loi gi*/}
            <Image style={styles.image} source={require("../../assets/first_screen.jpg")}/>            
            <Text style={styles.SubTitle}>Forgot your password?</Text>
            <Text style={styles.SubTitle1}>Sign up</Text>            
        </View>
        </SafeAreaView>
        
        
    );
}

export default React.memo(Login);