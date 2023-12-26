import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';

const Movielist = (props) => {
  const { navigation } = props;

  const handleMoviePress = (movie) => {
    console.log('Pressed movie:', movie);
  };

  return (
    <>
      {props.movies.map((movie, index) => (
        <TouchableOpacity key={index} onPress={() => handleMoviePress(movie)}>
          <View>
            <Image source={{ uri: movie.Poster }} style={styles.poster} />
            <Text style={styles.title}>{movie.Title}</Text>
            <Text style={styles.year}>{movie.Year}</Text>
            <Button
              title='Proceed'
              onPress={() => navigation.navigate('Welcome Screen')}
              color='gray' // Set the color of the button to black
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  poster: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginTop: 30,
    alignSelf: 'center',
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 1,
    color: 'white',
    alignSelf: 'center',
  },
  year: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
  },
});

export default Movielist;
