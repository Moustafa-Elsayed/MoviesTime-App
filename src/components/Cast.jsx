import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
const Cast = ({cast, navigation}) => {
  return (
    <View style={{marginVertical: 6,paddingBottom:80}}>
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
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${person?.profile_path}`,
                    }}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  />
                </View>

                <Text style={{color: 'white'}}>
                  {person?.character.length > 14
                    ? person?.character.slice(0, 8) + '...'
                    : person?.character}
                </Text>
                <Text style={{color: 'white'}}>
                  {person?.original_name.length > 14
                    ? person?.original_name.slice(0, 10) + '...'
                    : person?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
