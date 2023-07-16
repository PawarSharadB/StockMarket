import React from 'react';
import {
  Container,
  Title,
  Subtitle,
  TitleSubTitleContainer,
  PriceContainer,
  Price,
  ChangedPrice,
  Border,
} from './ListItem.styles';

export const ListItem = (props: any) => {
  const {data} = props;
  return (
    <>
      <Container>
        <TitleSubTitleContainer>
          <Title>{data.name}</Title>
          <Subtitle numberOfLines={1} ellipsizeMode={'tail'}>
            {data.company}
          </Subtitle>
        </TitleSubTitleContainer>
        <PriceContainer>
          <Price>${data.price}</Price>
          <ChangedPrice isPositive={data.percentage > 0 ? true : false}>
            {data.percentage}%
          </ChangedPrice>
        </PriceContainer>
      </Container>
      <Border />
    </>
  );
};
