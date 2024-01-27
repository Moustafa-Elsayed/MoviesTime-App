import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
const {height, width} = Dimensions.get('window');
const App = () => {
  return (
    <View style={styles.container}>
    <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingHorizontal:10,
    paddingVertical:10
  
  },
  text: {},
});
