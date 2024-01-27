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
import {COLORS, SIZES} from '../constants';
const {width, height} = Dimensions.get('window');
const MoviesList = ({title, data}) => {
  const moviesName = 'skdklhsdhlsdh';
  return (
    <View
      style={{
        paddingTop: 3,
        paddingBottom: 3,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 10,
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.large,
          }}>
          {title}
        </Text>
        <TouchableWithoutFeedback>
          <View>
            <Text
              style={{
                color: 'orange',
                fontSize: SIZES.large,
              }}>
              See All
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10}}
          style={{
            flex: 1,
         
          }}>
          {data.map((item, index) => (
            <TouchableOpacity key={index}>
              <View style={{marginRight: 10}}>
                <Image
                  source={require('../assets/images/nft08.jpg')}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 10,
                    marginBottom: 5,
                  }}
                />
                <Text style={{color: 'white'}}>
                  {moviesName.length > 14
                    ? moviesName.slice(0, 14) + '...'
                    : moviesName}
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
