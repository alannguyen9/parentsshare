import React from "react";
import { View,Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import Button1 from "../../components/button1";
import Button2 from "../../components/button2";
import Input1 from "../../components/input1"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Login=({navigation}) => {
    const onSignup=() => {
    
        // console.log('Button Sign up on Login page is clicked'),
       navigation.navigate('Signup');
    }
    const onHomepage=() =>{
        navigation.navigate('Homepage')
    }  

    return (
        <SafeAreaView>
        <ScrollView>
            <Text style={styles.Title}>PARENTS SHARE RESOURCES</Text>
            <Image style={styles.image} source={require("../../assets/first_screen.jpg")}/>  
            <Input1 placeholder="Please enter your email" />
            <Input1 placeholder="Please enter your password" keyboardType={"phone-pad"} secureTextEntry={true}/>
            <Button1 onPress={onHomepage} name="Login"/>         
            <Text style={styles.SubTitle}>Forgot your password?</Text>
            <Button2 onPress={onSignup} name="Sign up"/>
                 
        </ScrollView>
        </SafeAreaView>
        
        
    );
}

export default React.memo(Login);