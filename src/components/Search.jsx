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
  StatusBar,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {COLORS, FONTS} from '../constants';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import {fetchSearchMovies} from './api/Moviesdb';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    } else {
      setResult([]);
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
          marginTop: StatusBar.currentHeight + 20,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 15,
        }}>
        <TextInput
          onChangeText={handleChangeDebounce}
          placeholder="Search Movies"
          placeholderTextColor={'white'}
          style={{
            padding: 10,
            flex: 1,
            color: 'white',
            fontSize: 20,
            paddingHorizontal: 15,
            fontFamily: FONTS.medium,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon name="close" size={30} color="white" />
        </TouchableOpacity>
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
              gap: 15,
              marginTop: 20,
            }}>
            {result.map((item, index) => {
              return (
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => {
                      navigation.navigate('Movies', item);
                    }}>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                      }}
                      style={{
                        width: width * 0.44,
                        height: height * 0.3,
                        borderRadius: 15,
                      }}
                    />
                  </TouchableWithoutFeedback>
                  <View>
                    <Text style={{color: 'white', fontFamily: FONTS.bold}}>
                      {item?.title && item.title.length > 25
                        ? `${item.title.slice(0, 10)}...`
                        : item?.title}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../images/1.webp')}
            style={{
              width: width * 0.6,
              height: height * 0.4,
              borderRadius: 10,
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;
