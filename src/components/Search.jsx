import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {COLORS} from '../constants';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import { fetchSearchMovies } from './api/Moviesdb';
const Search = () => {
  const [result, setResult] = useState([]);
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  const handleChange = value => {
    if (value && value.length > 2) {
      fetchSearchMovies({
        query: value,
        include_adult: 'false',
        language: 'en',
        page: '1',
      }).then(data => {
        if (data && data.results) setResult(data.results);
      });
    }else{
      setResult([])
    }
  };

  const handleChangeDebounce = useCallback(_.debounce(handleChange, 400), [
    handleChange,
  ]);
  return (
    <SafeAreaView style={{backgroundColor: COLORS.bg, flex: 1}}>
      <View
        style={{
          backgroundColor: COLORS.cardBg,
          borderRadius: 20,
          marginTop: 25,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 10,
        }}>
        <TextInput
          onChangeText={handleChangeDebounce}
          placeholder="search movies"
          placeholderTextColor={'white'}
          style={{
            padding: 10,
            flex: 1,
            color: 'white',
            fontSize: 20,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}></TouchableOpacity>
      </View>
      {result.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
          style={{
            marginTop: 20,
          }}>
          <Text style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
            Result ({result.length})
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              flexDirection: 'row',
              gap: 10,
              marginTop: 20,
            }}>
            {result.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => {
                    navigation.navigate('Movies', item);
                  }}>
                  <Image
                          source={{uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`}}

                    // source={require('../images/nft02.jpg')}
                    style={{
                      width: width * 0.44,
                      height: height * 0.3,
                      borderRadius: 50,
                    }}
                  />
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            No Search Found
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;
