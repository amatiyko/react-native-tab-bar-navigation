import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { routeIcon } from '../helpers';
import { IconsContainer, IconWrapper } from './styles';

import { Props } from './types';

class Buttons extends PureComponent<Props> {
  onPress = (index: number, name: string) => () => {
    const { onPress, navigation } = this.props;
    navigation.navigate(name);
    onPress(index);
  };

  render() {
    const { state: { routes } } = this.props;
    return (
      <View style={StyleSheet.absoluteFill}>
          <IconsContainer>
            {routes.map((route: any, index: number) => {
              return (
                <TouchableWithoutFeedback onPress={this.onPress(index, route.name)}>
                  <IconWrapper>
                    <Icon name={routeIcon[route.name]} size={25} />
                  </IconWrapper>
                </TouchableWithoutFeedback>
              );
            })}
          </IconsContainer>
        </View>
    );
  }
}

export default Buttons;