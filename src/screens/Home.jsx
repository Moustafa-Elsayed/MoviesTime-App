import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const Home = () => {
  return (
    <View>
      <View style={styles.upperContent}>
        <View>
          <Text>icon</Text>
        </View>
        <View>
          <Text style={styles.text}>
            <Text style={{color: 'orange'}}>M</Text>
            ovies
          </Text>
        </View>
        <View>
          <Text>icon</Text>
        </View>
      </View>
      <ScrollView style={styles.lowerContent}>
        <View>
          <Text>jsljdsd</Text>
          <Text>jsljdsd</Text>
          <Text>jsljdsd</Text>
          <Text>jsljdsd</Text>
        </View>
        <View>
          <Text>jsljdsd</Text>
        </View>
        <View>
          <Text>jsljdsd</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  upperContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lowerContent:{
    backgroundColor:"gray",
  },
});
