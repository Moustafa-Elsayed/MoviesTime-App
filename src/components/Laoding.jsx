import {View, Text} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

const Laoding = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Progress.CircleSnail color="orange" thickness={12} size={160} />
    </View>
  );
};

export default Laoding;
