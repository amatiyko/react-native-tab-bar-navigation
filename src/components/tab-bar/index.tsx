import React, { PureComponent } from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Animated,
  View,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Feather';

import { getShape } from './helpers';
import { Container } from './styles';
import Buttons from './Buttons';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { transform } from '@babel/core';

const { width } = Dimensions.get('window');
const height = 50;

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

class TabBar extends PureComponent<BottomTabBarProps> {
  getTabWidth = () => {
    const { state: { routes } } = this.props;
    return width / routes.length;
  }

  value = new Animated.Value(-width + 2 * this.getTabWidth());

  onPress = (index: number) => {
    const { state: { routes } } = this.props;
    Animated.spring(this.value, {
      toValue: -width + index * this.getTabWidth(),
    }).start();
  }

  render() {
    const { state: { routes } } = this.props;
    const tabWidth = width / routes.length + 10;

    return (
      <>
        <Container>
          <AnimatedSvg
            width={width * 2 + tabWidth}
            {...{ height }}
            fill="#4c7cf7"
            style={{transform: [{ translateX: this.value }]}}
          >
            <Path d={getShape(this.getTabWidth())} />
          </AnimatedSvg>
          <Buttons {...this.props} onPress={this.onPress} />
        </Container>
        <SafeAreaView style={{ backgroundColor: '#4c7cf7' }} />
      </>
    );
  }
}

export default TabBar;
