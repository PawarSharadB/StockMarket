import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  margin-horizontal: 16px;
`;

export const Border = styled.View`
  border: 0.5px gray;
`;

export const TitleSubTitleContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  align-items: center;
`;

export const GraphContainer = styled.View`
  flex: 1;
`;

export const PriceContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: 8px;
  /* padding-top: 8px; */
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ChangedPrice = styled.Text`
  color: ${props => (props.isPositive ? '#008000' : '#FF0000')};
  font-size: 16px;
`;
