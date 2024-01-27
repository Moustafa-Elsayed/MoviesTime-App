import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';

const MoviesList = () => {
  return (
    <View>
      <Text
        style={{
          color: COLORS.white,
          fontSize: SIZES.large,
        }}>
        MoviesList
      </Text>
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({});
