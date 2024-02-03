import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import MovieCard from './MovieCard';
import {COLORS, FONTS, SIZES} from '../constants';
import Laoding from './Laoding';

const {width, height} = Dimensions.get('window');

const TrendingMovies = ({data}) => {
  const [loading, setLoading] = useState(false);

  return (
    <View>
      <Text
        style={{
          fontSize: width > 500 ? SIZES.xLarge : SIZES.large,
          paddingBottom: 10,
          color: COLORS.white,
          paddingHorizontal: 10,
          fontFamily: FONTS.bold,
        }}>
        Trending
      </Text>
      {loading ? (
        <Laoding />
      ) : (
        <Carousel
          data={data}
          renderItem={({item}) => <MovieCard item={item} />}
          firstItem={1}
          inactiveSlideOpacity={0.6}
          sliderWidth={width}
          itemWidth={width * 0.6}
          slideStyle={{display: 'flex', alignItems: 'center'}}
        />
      )}
    </View>
  );
};

export default TrendingMovies;

const styles = StyleSheet.create({});
