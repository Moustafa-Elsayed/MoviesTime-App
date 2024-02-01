import React from 'react';
import {StatusBar, View} from 'react-native';
import Home from '../screens/Home';

// app navigation
import MoviesScreen from '../screens/MoviesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Person from '../components/Person';
import Search from '../components/Search';
import {NavigationContainer} from '@react-navigation/native';

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
              return;
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
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Icon name="file-movie-o" size={25} color="black" />
              ),
            }}
            name="Person"
            component={Person}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Icon name="file-movie-o" size={25} color="black" />
              ),
            }}
            name="Search"
            component={Search}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
