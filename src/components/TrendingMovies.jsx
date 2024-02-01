import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import MovieCard from './MovieCard';
import {COLORS, FONTS, SIZES} from '../constants';

const {width, height} = Dimensions.get('window');

const TrendingMovies = ({data}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: width > 400 ? SIZES.xLarge : SIZES.large,
          paddingBottom: 10,
          color: COLORS.white,
          paddingHorizontal: 10,
          fontFamily: FONTS.bold,
        }}>
        Trending
      </Text>

      <Carousel
        data={data}
        renderItem={({item}) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.6}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
};

export default TrendingMovies;

const styles = StyleSheet.create({});
