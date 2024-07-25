import React from "react";
import { View,Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Button1 from "../../components/button1";
import Button2 from "../../components/button2";

const Login=() => {
    return (
        <SafeAreaView>
        <View>
            <Text style={styles.Title}>PARENTS SHARE RESOURCES</Text>
            {/*styles.image co loi gi*/}
            <Image style={styles.image} source={require("../../assets/first_screen.jpg")}/>  
            <Button1 />         
            <Text style={styles.SubTitle}>Forgot your password?</Text>
            <Button2 />
                 
        </View>
        </SafeAreaView>
        
        
    );
}

export default React.memo(Login);