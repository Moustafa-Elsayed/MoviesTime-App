import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS} from '../constants';
import MoviesList from '../components/MoviesList';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/Cast';
import {useNavigation} from '@react-navigation/native';
import {
  fetchMoviesSimilar,
  fetchMoviescredits,
} from '../components/api/Moviesdb';

const MoviesScreen = () => {
  const [isFovarite, setIsFovarite] = useState(false);
  const [cast, setcast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  const {params: item} = useRef();
  useEffect(() => {
    getSimilarMovies();
    getMoviesCredit();
  }, [item]);
  const getSimilarMovies = async () => {
    const data = await fetchMoviesSimilar();
    if (data && data.results) setSimilarMovies(data.results);
  };
  const getMoviesCredit = async () => {
    const data = await fetchMoviescredits();
    if (data && data.results) setcast(data.results);
  };
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      style={{backgroundColor: COLORS.bg}}>
      <View style={{width: width}}>
        <SafeAreaView
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 15,
            paddingVertical: 30,
            zIndex: 22,
            width,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'orange',
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setIsFovarite(!isFovarite);
            }}>
            <Icon name="heart-o" size={30} color="white" />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require('../images/nft04.jpg')}
            style={{
              width,
              height: height * 0.55,
            }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{
              position: 'absolute',
              bottom: 0,
              width,
              height: height * 0.55,
            }}
          />
        </View>
        <View style={{marginTop: -(height * 0.15), paddingBottom: 15}}>
          {/* title */}
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Lorem ipsum dolor sit amet
          </Text>
          <Text style={{fontSize: 20, color: 'gray', textAlign: 'center'}}>
            sdsdsdsdsdsd
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 20, color: 'gray', textAlign: 'center'}}>
              ssdsd{' '}
            </Text>
            <Text style={{fontSize: 20, color: 'gray', textAlign: 'center'}}>
              ssdsd{' '}
            </Text>
            <Text style={{fontSize: 20, color: 'gray', textAlign: 'center'}}>
              sdsd{' '}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: 'gray',
              textAlign: 'center',
              marginHorizontal: 15,
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            repellat maxime, hic quae esse excepturi eum velit consequatur ab
            aliquid magnam iste voluptas omnis porro quaerat deserunt
            reiciendis, modi quisquam.
          </Text>
        </View>
        {/* cast */}
        <Cast cast={cast} navigation={navigation} />
        {/* similiar movies */}
        <MoviesList
          title="Similar Movies"
          hiddenSeeAll={true}
          data={similarMovies}
        />
      </View>
    </ScrollView>
  );
};

export default MoviesScreen;
