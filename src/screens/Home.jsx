import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
// components
import TrendingMovies from '../components/TrendingMovies';
import MoviesList from '../components/MoviesList';
// theme
import {COLORS, FONTS} from '../constants';
// icons
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcaoming, setUpcoming] = useState([1, 2, 3]);
  const [toprated, setToprated] = useState([1, 2, 3]);
  return (
    <View style={styles.container}>
      <View style={styles.upperContent}>
        <View>
          <Icon name="bars" size={30} color="white" />
        </View>
        <View>
          <Text style={styles.text}>
            {/* <Text style={{color: 'orange'}}>M</Text> */}
            ovies
          </Text>
        </View>
        <View>
          <Icon name="search" size={30} color="white" />
        </View>
      </View>
      {/* Movies */}
      <ScrollView style={styles.lowerContent}>
        {/* trendingMovies */}
        <TrendingMovies data={trending} />
        {/* upComing Movies */}
        <MoviesList title="UpComing" data={upcaoming} />
        {/* TopRated  movies */}
        <MoviesList title="Top Rated" data={toprated} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  upperContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lowerContent: {
    paddingTop: 10,
    flex: 1,
  },
  text: {
    color: COLORS.white,
    fontSize: 30,
    
  },
});
