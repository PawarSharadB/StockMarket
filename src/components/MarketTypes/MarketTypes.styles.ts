import {FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 16px;
`;

export const TypeItem = styled(TouchableOpacity)`
  border-radius: 16px;
  padding-vertical: 8px;
  padding-horizontal: 16px;
  margin-horizontal: 8px;
  background-color: ${props => (props.isActive ? '#f2f2f2' : 'gray')};
`;

export const TypeText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.isActive ? '#333' : 'white')};
`;

export const List = styled(FlatList)``;
