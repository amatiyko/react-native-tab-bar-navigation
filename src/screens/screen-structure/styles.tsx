import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { PRIMARY, WHITE } from '../../constants/colors';

const window = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${WHITE};
`;

export const TopPartContainer = styled.View`
  flex: 0.5;
  background-color: ${WHITE};
`;

export const TopPart = styled.View`
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${window.width / 2}px;
  background-color: ${PRIMARY};
  width: ${window.width * 2}px;
  height: ${window.width * 2}px;
  position: absolute;
  bottom: 0;
  margin-left: ${-(window.width / 2)}px;
  border-radius: ${window.width}px;
`;

export const Header = styled.Text`
  color: ${WHITE};
  font-size: 30px;
  font-weight: 600;
`;

export const DescriptionWrapper = styled.View`
  width: ${window.width};
`;

export const Description = styled.Text`
  color: ${WHITE};
  font-size: 15px;
  font-weight: 300;
  margin-top: 40px;
  padding: 0 40px;
`;
