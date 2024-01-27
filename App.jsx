import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
const {height, width} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
      <Text style={styles.text}>jshdl</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  text: {},
});
