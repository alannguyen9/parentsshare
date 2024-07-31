
import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Playtogether from './src/screens/playtogether';
import Resourcepage from './src/screens/resourcepage';
import Exchange from './src/screens/exchange';
import Notification from './src/screens/notification';
// import Helpme from './src/screens/helpme';
import Homepage from './src/screens/homepage';
import Signup from './src/screens/signup';
import Login from './src/screens/login';
// import Help from './src/screens/help';


const Stack = createNativeStackNavigator();
//https://reactnavigation.org/docs/themes/
// change background Colour to WHITE
const MyTheme = {
  
  colors: {
    background: 'white'
  },
};



const App=() =>{

  const buttonSignUpClicked=() => {
        
    console.log('Button Sign up on Login page is clicked'),
    navigation.navigate('Signup')
  }
  
  return (
    <NavigationContainer theme={MyTheme}>
      {/* Rest of your app code */}
        {/* // it's not CORRECT , but simplify to test */}
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Playtogether" component={Playtogether} />
        <Stack.Screen name="Resourcepage" component={Resourcepage} />
        <Stack.Screen name="Exchange" component={Exchange} />
        </Stack.Navigator>
      {/* </ScrollView> */}
    
    
    </NavigationContainer>
    
  );
};


export default App;
