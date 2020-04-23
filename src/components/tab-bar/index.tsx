import React from 'react';
import { TouchableOpacity, Text, Dimensions, SafeAreaView } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Svg, Path } from 'react-native-svg';

import { Container } from './styles';

import { getShape } from './helpers';

const { width } = Dimensions.get('window');
const height = 70;

function TabBar() {
  // function TabBar({ state }: BottomTabBarProps) {
  // console.log(state.routes);
  // return (
  //   <Container>
  //     {state.routes.map(route => {
  //       return (
  //         <TouchableOpacity>
  //           <Text>{route.name}</Text>
  //         </TouchableOpacity>
  //       );
  //     })}
  //   </Container>
  // );
  const tabWidth = width / 5 + 10;

  return (
    <Container>
      <Svg
        {...{ width: width * 2 }}
        {...{ height }}
        style={{ transform: [{ translateX: -tabWidth }] }}
      >
        <Path d={getShape(tabWidth)} fill="green" />
      </Svg>
      <SafeAreaView />
    </Container>
  );
}

export default TabBar;
