
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
// import Playtogether from './src/screens/playtogether';
// import Resourcepage from './src/screens/resourcepage';
// import Exchange from './src/screens/exchange';
// import Notification from './src/screens/notification';
// import Helpme from './src/screens/helpme';
// import Homepage from './src/screens/homepage';
// import Signup from './src/screens/signup';
import Login from './src/screens/login';
// import Help from './src/screens/help';


const App=() =>{
  return (
    <SafeAreaView >
      <ScrollView>
        <Login/>
        {/* <Signup/> */}
        {/* <Homepage/> */}
        {/* <Notification/> */}
        {/* <Helpme/> */}
        {/* <Help/> */}
        {/* <Exchange/> */}
        {/* <Playtogether/> */}
        {/* <Resourcepage/> */}
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
