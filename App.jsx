import { StyleSheet, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import { COLORS,FONTS,SIZES } from './src/constants';
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
    backgroundColor:COLORS.bg,
    paddingHorizontal:10,
    paddingVertical:10
  
  },
});
