import React from "react";
import { View,Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import Button1 from "../../components/button1";
import Button2 from "../../components/button2";
import Input1 from "../../components/input1"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Signup=({navigation}) => {
    return (
        <SafeAreaView>
        <ScrollView>
            <Text style={styles.Title}>PARENTS SHARE RESOURCES</Text>
            <Image style={styles.image} source={require("../../assets/first_screen.jpg")}/>  
            <Input1 placeholder="Please enter your email" />
            <Input1 placeholder="Please enter your mobile number" />
            <Input1 placeholder="Please enter your first name" />
            <Input1 placeholder="Please enter your last name" />
            <Input1 placeholder="Please enter your password" keyboardType={"phone-pad"} secureTextEntry={true}/>
            <Input1 placeholder="Please verify your password" keyboardType={"phone-pad"} secureTextEntry={true}/>
            <Button1 name="Sign up"/>         
            <Text style={styles.SubTitle}>Have an account  already? </Text>
            <Button2 name="Login"/>
                 
        </ScrollView>
        </SafeAreaView>
        
        
    );
}

export default React.memo(Signup);