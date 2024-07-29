
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Signup from './src/screens/signup';
// import Login from './src/screens/login';


const App=() =>{
  return (
    <SafeAreaView >
      <ScrollView>
        {/* <Login/> */}
        <Signup/>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
