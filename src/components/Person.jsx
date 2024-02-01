import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants';
import MoviesList from './MoviesList';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Person = () => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');
  const [isFovarite, setIsFovarite] = useState(false);
  const [movies, setMovies] = useState([1, 2, 3, 4]);

  return (
    <ScrollView
      style={{flex: 1, paddingBottom: 40, backgroundColor: COLORS.bg}}>
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
            source={require('../images/nft03.jpg')}
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
            Jonf jsdh
          </Text>
          <Text style={{color: 'gray', fontSize: 15, fontWeight: 'bold'}}>
            lodhfhdf
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
            <Text style={{color: 'white', fontWeight: 'bold'}}>Birthday</Text>
            <Text style={{color: 'black'}}>12-10-2023</Text>
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
            <Text style={{color: 'white', fontWeight: 'bold'}}>Kwown For</Text>
            <Text style={{color: 'black'}}>Acting</Text>
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
            <Text style={{color: 'black'}}>64.52</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 10}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              paddingBottom: 10,
            }}>
            Biography
          </Text>
          <Text style={{color: 'gray'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            laudantium tempora quasi qui voluptates minus doloribus nulla error
            iure. Iusto exercitationem ut nisi veniam quia officia excepturi,
            libero dicta iure.
          </Text>
        </View>
        {/* movies */}
        <MoviesList title="Movies" hiddenSeeAll={false} data={movies} />
      </View>
    </ScrollView>
  );
};

export default Person;
