import React from 'react';

import {
  Container,
  TopPart,
  TopPartContainer,
  Header,
  Description,
  DescriptionWrapper,
} from './styles';

import { Props } from './types';

function ScreenStructure({ headerText, description }: Props) {
  return (
    <Container>
      <TopPartContainer>
        <TopPart>
          <Header>{headerText}</Header>
          {description && (
            <DescriptionWrapper>
              <Description>{description}</Description>
            </DescriptionWrapper>
          )}
        </TopPart>
      </TopPartContainer>
    </Container>
  );
}

export default ScreenStructure;
