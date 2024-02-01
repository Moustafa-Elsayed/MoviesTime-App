import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Splash = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: 'orange',
    fontFamily:"Roboto-Bold"
  },
});
