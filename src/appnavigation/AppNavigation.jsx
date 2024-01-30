import React from 'react';
import {StatusBar} from 'react-native';
import Home from '../screens/Home';

// app navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import MoviesScreen from '../screens/MoviesScreen';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <>
      <StatusBar style="light" animated={true} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="App" component={Home} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Movies" component={MoviesScreen} />


        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
