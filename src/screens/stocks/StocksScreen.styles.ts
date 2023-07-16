import styled from 'styled-components/native';
import {
  ActivityIndicatorComponent,
  ListItem,
  MarketTypes,
} from '../../components';
import SearchBar from '../../components/SearchBar/SearchBar';

export const Container = styled.View`
  flex: 1;
`;

export const TopContainer = styled.View`
  justify-content: center;
  height: 30%;
  background-color: #2596be;
  padding-horizontal: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Search = styled(SearchBar)`
  flex: 1;
  padding: 8px;
  border-radius: 8px;
  background-color: #f2f2f2;
  margin: 16px;
`;

export const Market = styled(MarketTypes)``;

export const List = styled(ListItem)`
  justify-content: center;
  align-items: center;
`;

export const ActivityIndicator = styled(ActivityIndicatorComponent)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
