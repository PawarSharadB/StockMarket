import * as React from 'react';
import {Searchbar} from 'react-native-paper';

const SearchBar = ({onChangeText, value}: any) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeText}
      value={value}
      mode="bar"
    />
  );
};

export default SearchBar;
