import React from "react";
import { View,Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import Button1 from "../../components/button1";
import Button2 from "../../components/button2";
import Input1 from "../../components/input1"

const Login=() => {
    return (
        <SafeAreaView>
        <ScrollView>
            <Text style={styles.Title}>PARENTS SHARE RESOURCES</Text>
            <Image style={styles.image} source={require("../../assets/first_screen.jpg")}/>  
            <Input1 placeholder="Please enter your email" />
            <Input1 placeholder="Please enter your password" keyboardType={"phone-pad"} secureTextEntry={true}/>
            <Button1 name="Login"/>         
            <Text style={styles.SubTitle}>Forgot your password?</Text>
            <Button2 name="Sign up"/>
                 
        </ScrollView>
        </SafeAreaView>
        
        
    );
}

export default React.memo(Login);