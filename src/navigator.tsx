import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { HOME } from './constants/routes';

import HomeScreen from './screens/home';

const Stack = createStackNavigator();

function Navigator() {
  console.log('Navigator');
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HOME}
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name={HOME}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigator;
