
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
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


const Stack = createNativeStackNavigator();


const App=() =>{
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
    
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      {/* </ScrollView> */}
    
    
    </NavigationContainer>
    
  );
};


export default App;
