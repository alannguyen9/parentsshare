// This is normal button with TouchableOpacity

import React from "react";
import { TouchableOpacity ,Text } from "react-native";
import styles from "./styles";



const Button1=() => {
    const buttonClicked=()=>{
        //checking internally
        console.log("Button is clicked")
    }
    return (
        <TouchableOpacity onPress={buttonClicked()} style={styles.buttonContainer}>
            <Text style={styles.buttonText}> Log in </Text>
        </TouchableOpacity>
    );

};

export default React.memo(Button1)
