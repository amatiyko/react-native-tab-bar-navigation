import styled, { css } from 'styled-components/native';
import { PRIMARY } from '../../../constants/colors';

export const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const IconWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const ActiveIcon = styled.View<{ tabWidth: number; index: number }>`
  position: absolute;
  top: -30px;
  ${({ tabWidth, index }) => css`
    width: ${tabWidth}px;
    height: ${tabWidth}px;
    justify-content: center;
    align-items: center;
    left: ${tabWidth * index}px;
  `}
`;

export const Circle = styled.View`
 width: 60px;
 height: 60px;
 border-radius: 30px;
 background-color: ${PRIMARY};
 align-items: center;
 justify-content: center;
`;
