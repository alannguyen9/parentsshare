import React, {useState} from "react";

import { TextInput } from "react-native";

const Input=() => {
    const [email, setEmail]= useState ('');
    const [password, setPassword]=useState ('');

    return (
        <TextInput value={email} placeholder='Please enter your email'>
                
        </TextInput>
    );
};

export default React.memo(Input);