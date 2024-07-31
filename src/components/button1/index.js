// This is normal button with TouchableOpacity

import React from "react";
import { TouchableOpacity ,Text } from "react-native";
import styles from "./styles";


const Button1=({name}) => {
    // const buttonClicked=()=>{
    //     //checking internally
    //     console.log("Button is clicked")
    // }
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}> {name} </Text>
        </TouchableOpacity>
    );

};

export default React.memo(Button1)
