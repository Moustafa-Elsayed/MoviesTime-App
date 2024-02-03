import React from 'react';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import Home from '../screens/Home';

// app navigation
import MoviesScreen from '../screens/MoviesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Person from '../components/Person';
import Search from '../components/Search';
import {NavigationContainer} from '@react-navigation/native';
import {COLORS, FONTS, SIZES} from '../constants';

const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get('window');
const AppNavigation = () => {
  return (
    <>
      <StatusBar
        style="light"
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />
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
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.container,
            tabBarItemStyle: styles.item,
            tabBarActiveTintColor: '#0071ff',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: styles.labelItem,
            keyboardAvoidingViewEnabled: true,
          }}
          safeAreaInsets={{bottom: 0}}>
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <View>
                  <Icon
                    name="home"
                    size={29}
                    color={focused ? '#0071ff' : 'gray'}
                  />
                </View>
              ),
            }}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <Icon
                  name="file-movie-o"
                  size={29}
                  color={focused ? '#0071ff' : 'gray'}
                />
              ),
            }}
            name="Movies"
            component={MoviesScreen}
          />
          <Tab.Screen
            options={{
              tabBarVisible: false,
              // tabBarIcon: ({focused}) => (
              //   <Icon
              //     name="file-movie-o"
              //     size={29}
              //     color={focused ? '#0071ff' : 'gray'}
              //   />
              // ),
              tabBarStyle: {
                display: 'none', // Hide the entire tab bar
              },
              tabBarItemStyle: {
                display: 'none', // Hide individual tab items
              },
              tabBarButton: () => null,
            }}
            name="Person"
            component={Person}
          />
          <Tab.Screen
            options={{
              // tabBarIcon: ({focused}) => (
              //   <Icon
              //     name="search"
              //     size={29}
              //     color={focused ? '#0071ff' : 'gray'}
              //   />
              // ),
              tabBarStyle: {
                display: 'none', // Hide the entire tab bar
              },
              tabBarItemStyle: {
                display: 'none', // Hide individual tab items
              },
              tabBarButton: () => null,
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBg,
    // backgroundColor: 'white',
    position: 'absolute',
    width,
    height: 70,
    borderRadius: 5,
  },
  item: {
    marginBottom: 5,
  },
  labelItem: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
  },
});
