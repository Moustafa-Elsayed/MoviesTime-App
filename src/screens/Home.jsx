import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TrendingMovies from '../components/TrendingMovies';
import MoviesList from '../components/MoviesList';
import {COLORS} from '../constants';
// import {AntDesign} from '@expo/vector-icons';
const Home = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcaoming, setUpcoming] = useState([1, 2, 3]);
  const [toprated, setToprated] = useState([1, 2, 3]);
  return (
    <View style={styles.container}>
      <View style={styles.upperContent}>
        <View>
            {/* <AntDesign name="stepforward" size={24} color="black" /> */}
        </View>
        <View>
          <Text style={styles.text}>
            <Text style={{color: 'orange'}}>M</Text>
            ovies
          </Text>
        </View>
        <View>
          <Text style={styles.text}>icon</Text>
        </View>
      </View>
      {/* Movies */}
      <ScrollView style={styles.lowerContent}>
        {/* trendingMovies */}
        <TrendingMovies data={trending} />
        {/* upComing Movies */}
        <MoviesList title="UpComing" data={upcaoming} />
        {/* TopRated  movies */}
        <MoviesList title="Top Rated"  data={toprated} />
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
