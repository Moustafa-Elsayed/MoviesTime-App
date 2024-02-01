import {TouchableWithoutFeedback, Image, Dimensions} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const MovieCard = ({item}) => {
  return (
    <TouchableWithoutFeedback>
      <Image
        source={{uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`}}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 10,
        }}
      />
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
