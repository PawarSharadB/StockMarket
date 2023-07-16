import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchStocks} from '../../redux/stocksSlice';
import {RootState} from '../../redux/store';

import {
  TopContainer,
  Search,
  Title,
  Market,
  Container,
  List,
  ActivityIndicator,
} from './StocksScreen.styles';

export const StocksScreen = () => {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(
    (state: RootState) => state.stocks,
  );

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  const filteredData = data.filter((item: any) => {
    const itemName = item.name.toLowerCase();
    const itemCompany = item.company.toLowerCase();
    const query = searchQuery.toLowerCase();
    return itemName.includes(query) || itemCompany.includes(query);
  });

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const renderItem = ({item}: any) => {
    return <List data={item} />;
  };

  return (
    <Container>
      <TopContainer>
        <Title>Markets</Title>
        <Search value={searchQuery} onChangeText={setSearchQuery} />
        <Market />
      </TopContainer>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </Container>
  );
};
