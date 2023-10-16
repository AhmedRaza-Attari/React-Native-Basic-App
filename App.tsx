import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Signin from './android/app/src/screens/Signin';
import Home from './android/app/src/screens/Home';

const MyComponent = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    // <View>
    //   <Signin/>
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signin'>
        <Stack.Screen name='Signin' component={Signin} />

        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyComponent;

const styles = StyleSheet.create({})



// GITHUB REPO FOR SPLASH SCREEN
// https://github.com/crazycodeboy/react-native-splash-screen#readme

// npm install react-native-splash-screen 
// npx react-native link react-native-splash-screen
// Update the MainActivity.java
//    android -> app -> src -> main -> java -> MainActivity.java
//  Update the Launch_screen.xml
//      - android:layout_width="wrap_content" android:layout_height="wrap_content"
//      - android:layout_marginTop="270dp" android:layout_marginLeft="110dp"
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack



