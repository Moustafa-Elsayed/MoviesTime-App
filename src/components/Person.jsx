import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../constants';
import MoviesList from './MoviesList';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import {fetchPersonDetails, fetchPersonSilimarMovies} from './api/Moviesdb';
import Laoding from './Laoding';

const Person = () => {
  const {params: item} = useRoute();

  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');
  const [isFovarite, setIsFovarite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3]);
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getPersonDetials(item.id);
    getPersonMovies(item.id);
  }, [item]);
  const getPersonDetials = async id => {
    const data = await fetchPersonDetails(id);
    if (data && data) setPerson(data);
    setLoading(false)

  };
  const getPersonMovies = async id => {
    const data = await fetchPersonSilimarMovies(id);
    if (data && data.cast) setPersonMovies(data.cast);
  };

  return (
    <ScrollView
      style={{flex: 1, paddingBottom: 40, backgroundColor: COLORS.bg}}>
      {loading ? (
        <Laoding />
      ) : (
        <>
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
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: height * 0.44,
              }}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${person?.profile_path}`,
                }}
                style={{
                  width: width / 2,
                  height: height / 4,
                  borderRadius: width / 4,
                  borderWidth: 1,
                  borderColor: 'white',
                }}
              />
            </View>

            <View style={{alignItems: 'center', marginBottom: 10}}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                {person?.name}
              </Text>
              <Text style={{color: 'gray', fontSize: 15, fontWeight: 'bold'}}>
                {person?.known_for_department}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'gray',
                borderRadius: 30,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
                marginRight: 10,
              }}>
              <View
                style={{
                  borderRightWidth: 1,
                  borderColor: 'white',
                  display: 'flex',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 5,
                  marginTop: 5,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Gender</Text>
                <Text style={{color: 'black'}}>Male</Text>
              </View>
              <View
                style={{
                  borderRightWidth: 1,
                  display: 'flex',
                  borderColor: 'white',

                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 5,
                  marginTop: 5,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Birthday
                </Text>
                <Text style={{color: 'black'}}>{person?.birthday}</Text>
              </View>
              <View
                style={{
                  borderRightWidth: 1,
                  display: 'flex',
                  borderColor: 'white',

                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 5,
                  marginTop: 5,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Kwown For
                </Text>
                <Text style={{color: 'black'}}>
                  {person?.known_for_department}
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  padding: 10,
                  borderColor: 'white',

                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 5,
                  marginTop: 5,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Popoularity
                </Text>
                <Text style={{color: 'black'}}>{person?.popularity}</Text>
              </View>
            </View>
            <View
              style={{paddingHorizontal: 10, marginTop: 10, paddingBottom: 20}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingBottom: 10,
                }}>
                Biography
              </Text>
              <Text style={{color: 'gray'}}>{person?.biography}</Text>
            </View>
            {/* movies */}
            <MoviesList title="Movies" hiddenSeeAll={false} data={personMovies} />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default Person;
