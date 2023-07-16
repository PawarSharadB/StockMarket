import React, {useState} from 'react';
import {Container, TypeItem, TypeText, List} from './MarketTypes.styles';

const marketTypes = ['Main Market', 'Junior Market', 'FX Rates', 'Funds'];

export const MarketTypes = () => {
  const [selectedType, setSelectedType] = useState(marketTypes[0]);

  const renderItem = ({item}) => {
    const isActive = item === selectedType;
    return (
      <TypeItem isActive={isActive} onPress={() => setSelectedType(item)}>
        <TypeText isActive={isActive}>{item}</TypeText>
      </TypeItem>
    );
  };

  return (
    <Container>
      <List
        data={marketTypes}
        renderItem={renderItem}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};
