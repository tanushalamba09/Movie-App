// @ts-nocheck
import React from 'react';
import { useState } from 'react';
import {Text, View} from 'react-native';
import {getFamousMovies} from '../AwesomeProject1/services';
const Home = () => {
    
    const[movie, setMovie] = useState('');
    getFamousMovies().then(movies => {
      console.log(movies);
      setMovie(movies);
    }).catch(err => {
      console.log(err);
      return 'Tanusha';
    })
    return (
        <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Movie Name: {movie.original_title}</Text>
        <Text>Language: {movie.original_language}</Text>
      </View>
    );
};
export default Home;
