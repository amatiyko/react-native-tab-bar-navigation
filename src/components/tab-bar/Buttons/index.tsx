import React, { PureComponent, Fragment } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { routeIcon, height } from '../helpers';
import { IconsContainer, IconWrapper, ActiveIcon, Circle } from './styles';

import { Props } from './types';
import { WHITE } from '../../../constants/colors';

const { width } = Dimensions.get('window');

class Buttons extends PureComponent<Props> {
  values: Animated.Value[] = [];

  constructor(props: Props) {
    super(props);
    const {
      value,
      state: { routes, index },
    } = this.props;
    this.values = routes.map((route, routeIndex) => new Animated.Value(routeIndex === index ? 1 : 0));
  }

  onPress = (index: number, name: string) => () => {
    const {
      navigation,
      value,
      state: { routes },
    } = this.props;
    navigation.navigate(name);
    const tabWidth =  width / routes.length;
    Animated.sequence([
      ...this.values.map(value => Animated.timing(value, {
        toValue: 0,
        duration: 50,
      })),
      Animated.parallel([
        Animated.spring(this.values[index], {
          toValue: 1,
        }),
        Animated.spring(value, {
          toValue: -width + index * tabWidth,
        }),
      ]),
    ]).start();
  };

  render() {
    const { value, state: { routes } } = this.props;
    const tabWidth = width / routes.length;
    const getPoint = (index: number) => -width + tabWidth * index;
    return (
      <View style={StyleSheet.absoluteFill}>
          <IconsContainer>
            {routes.map((route: any, index: number) => {
              const currentTab = this.values[index];
              const translateY = currentTab.interpolate({
                inputRange: [0, 1],
                outputRange: [height + 20, 0],
              })
              const opacity = value.interpolate({
                inputRange: [getPoint(index - 1), getPoint(index), getPoint(index + 1)],
                outputRange: [1, 0, 1],
              });
              const iconProps = {
                size: 25,
                color: WHITE,
                name: routeIcon[route.name],
              }
              return (
                <Fragment>
                  <TouchableWithoutFeedback onPress={this.onPress(index, route.name)}>
                    <IconWrapper style={{opacity}} as={Animated.View}>
                      <Icon {...iconProps} />
                    </IconWrapper>
                  </TouchableWithoutFeedback>
                  <ActiveIcon tabWidth={tabWidth} style={{ transform: [{ translateY }] }} index={index} as={Animated.View}>
                    <Circle>
                      <Icon {...iconProps} />
                    </Circle>
                  </ActiveIcon>
                </Fragment>
              );
            })}
          </IconsContainer>
        </View>
    );
  }
}

export default Buttons;