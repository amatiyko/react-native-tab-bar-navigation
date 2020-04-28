import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Animated } from 'react-native';

export type Props = BottomTabBarProps & {
  value: Animated.Value;
  onPress: (index: number) => void;
};
