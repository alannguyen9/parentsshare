import React from "react";
import { Pressable,Text } from "react-native";
import styles from "../button2/styles";

const Button2=() => {
    const button2Clicked=() => {
        //checking internally
        console.log("Button is clicked")
    }
    return (
        <Pressable onPress={button2Clicked} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
    );

};

export default React.memo(Button2);