import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
const Cast = ({cast, navigation}) => {
  let MoviesName = 'hdhshdshkshdhdhshdshkshd';

  return (
    <View style={{marginVertical: 6}}>
      <Text
        style={{
          fontSize: 25,
          color: 'white',
          marginHorizontal: 15,
          marginBottom: 15,
        }}>
        Top Cast
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  marginRight: 4,
                  alignItems: 'center',
                }}
                onPress={() => {
                  navigation.navigate('Person', person);
                }}>
                <View
                  style={{
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 50,
                  }}>
                  <Image
                    source={require('../images/nft03.jpg')}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  />
                </View>

                <Text style={{color: 'white'}}>
                  {MoviesName.length > 14
                    ? MoviesName.slice(0, 8) + '...'
                    : MoviesName}
                </Text>
                <Text style={{color: 'white'}}>
                  {MoviesName.length > 14
                    ? MoviesName.slice(0, 8) + '...'
                    : MoviesName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
