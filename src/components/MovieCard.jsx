import {TouchableWithoutFeedback, Image, Dimensions} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const MovieCard = ({item}) => {
  return (
    <TouchableWithoutFeedback>
      <Image
        source={require('../images/nft10.jpg')}
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
