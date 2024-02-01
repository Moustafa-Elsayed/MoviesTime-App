import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';

const MoviesList = ({title, data}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 15,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 4,
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.large,
            fontFamily: FONTS.bold,
            paddingHorizontal: 10,
          }}>
          {title}
        </Text>
        <TouchableWithoutFeedback>
          <View>
            <Text
              style={{
                color: 'orange',
                fontSize: SIZES.large,
                paddingHorizontal: 10,
                fontFamily: FONTS.semiBold,
              }}>
              See All
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{paddingBottom: 5}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10}}
          style={{
            flex: 1,
          }}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate('Movies', item);
              }}>
              <View style={{marginRight: 10}}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 10,
                    marginBottom: 10,
                    marginTop: 5,
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontFamily: FONTS.medium,
                    textAlign: 'center',
                  }}>
                  {item?.title && item.title.length > 15
                    ? `${item?.title.slice(0, 15)}...`
                    : item?.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({});
