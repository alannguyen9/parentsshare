
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Login from './src/screens/login';


const App=() =>{
  return (
    <SafeAreaView >
      <View>
        <Login/>
      </View>
    </SafeAreaView>
  );
};


export default App;
