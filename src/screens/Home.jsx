import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// components
import TrendingMovies from '../components/TrendingMovies';
import MoviesList from '../components/MoviesList';
// theme
import {COLORS, FONTS, SIZES} from '../constants';
// icons
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from '../components/api/Moviesdb';
import Laoding from '../components/Laoding';
const {width, height} = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  const [trending, setTrending] = useState([]);
  const [upcaoming, setUpcoming] = useState([]);
  const [toprated, setToprated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);
  // fetch Api
  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data && data.results) setTrending(data.results);
    setLoading(false)
  };
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    if (data && data.results) setUpcoming(data.results);
    setLoading(false)

  };
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    if (data && data.results) setToprated(data.results);
    setLoading(false)

  };
  return (
    <View style={styles.container}>
      <View style={styles.upperContent}>
        <View>
          <TouchableOpacity>
            <Icon name="bars" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>
            <Text style={{color: 'orange'}}>M</Text>
            ovies
          </Text>
        </View>
        <View>
          <Icon
            name="search"
            size={30}
            color="white"
            onPress={() => {
              navigation.navigate('Search');
            }}
          />
        </View>
      </View>
      {/* Movies */}
      {loading ? (
        <Laoding />
      ) : (
        <ScrollView style={styles.lowerContent}>
          {/* trendingMovies */}
          <TrendingMovies data={trending} />
          {/* upComing Movies */}
          <MoviesList title="UpComing" data={upcaoming} />
          {/* TopRated  movies */}
          <MoviesList title="Top Rated" data={toprated} />
        </ScrollView>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingVertical: 10,
    paddingTop: StatusBar.currentHeight + 10,
  },
  upperContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  lowerContent: {
    paddingTop: 10,
    flex: 1,
  },
  text: {
    color: COLORS.white,
    fontSize: width > 500 ? SIZES.xLarge + 15 : SIZES.large + 10,
    fontFamily: FONTS.bold,
  },
});
