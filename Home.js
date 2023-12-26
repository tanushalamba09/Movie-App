//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Movielist from '../AwesomeProject1/Movielist';
import 'react-native-bootstrap-styles';
import Home from '../AwesomeProject1/home';
import SearchBox from '../AwesomeProject1/SearchBox'
import { Container, Row, Col } from 'react-native-bootstrap-styles';
import {NavigationContainer} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Homes = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const getMovieRequest = async () => {
    const url='https://www.omdbapi.com/?s=star wars&apikey=263d22d8';
    const response = await fetch(url);
    const responseJson = await response.json();
      console.log(response.Json);
      setMovies(responseJson.Search);
    
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const Stack = createNativeStackNavigator();
  //const Stack= createStackNavigator()
  return (
    <View style={styles.container}>
        <View className = 'row'>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox>
            
      
      <ScrollView> 
      <Movielist movies={movies} />
      </ScrollView> 
      
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      borderColor:'Black',
      borderRadius:1,
      
      
    },
   
  });

export default Homes;
