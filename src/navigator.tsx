import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { HOME, LIST, TASK, TRANSFER, PROFILE } from './constants/routes';

import TabBar from './components/tab-bar';
import HomeScreen from './screens/home';
import TaskScreen from './screens/task';
import TransferScreen from './screens/transfer';
import ProfileScreen from './screens/profile';
import ListScreen from './screens/list';

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <TabBar {...props} />}
        initialRouteName={HOME}
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name={LIST} component={ListScreen} />
        <Tab.Screen name={TASK} component={TaskScreen} />
        <Tab.Screen name={HOME} component={HomeScreen} />
        <Tab.Screen name={TRANSFER} component={TransferScreen} />
        <Tab.Screen name={PROFILE} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
