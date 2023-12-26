import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBox = (props) => {
  return (
    <TextInput
      value={props.value}
      onChange={(event) => props.setSearchValue(event.nativeEvent.text)}
      style={styles.input}
      placeholder="Search movies..." 
      placeholderTextColor="white"
     
    />
  );
};

const styles = StyleSheet.create({
  container: {
   
    marginRight: 'auto', 
    marginLeft: 100, 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    color: 'white',
  },
});

export default SearchBox;
