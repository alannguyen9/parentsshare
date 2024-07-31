import React from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";

const Input1=({placeholder}) => {
    return (
        <View style={styles.inputContainer}> 
            <TextInput style={styles.inputStyle} 
            placeholder={placeholder} autoFocus={true}/>
        </View>
    );
};


export default React.memo(Input1);