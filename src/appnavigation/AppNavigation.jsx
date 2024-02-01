import React from 'react';
import {StatusBar, View} from 'react-native';
import Home from '../screens/Home';

// app navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import MoviesScreen from '../screens/MoviesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FONTS} from '../constants';
import {Text} from 'react-native-svg';
import Person from '../components/Person';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <>
      <StatusBar style="light" animated={true} />
      {/* <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="App" component={Home} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Movies" component={MoviesScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            headerShown: false,

            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }

              // You can return any component that you like here!
              return ;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <View>
                  <Icon name="home" size={25} color="black" />
                </View>
              ),
            }}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Icon name="file-movie-o" size={25} color="black" />
              ),
            }}
            name="Movies"
            component={MoviesScreen}
          />
          <Stack.Screen name="Person" component={Person} />

         
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
