import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const TopPartContainer = styled.View`
  flex: 0.5;
  background-color: #ffffff;
`;

export const TopPart = styled.View`
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${window.width / 2}px;
  background-color: #4c7cf7;
  width: ${window.width * 2}px;
  height: ${window.width * 2}px;
  position: absolute;
  bottom: 0;
  margin-left: ${-(window.width / 2)}px;
  border-radius: ${window.width}px;
`;

export const Header = styled.Text`
  color: #ffffff;
  font-size: 30px;
`;
