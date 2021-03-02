import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PersonListScreen} from '../screens/PersonListScreen';
import {PersonInfoScreen} from '../screens/PersonInfoScreen';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'list'}>
      <Stack.Screen name={'Users List'} component={PersonListScreen} />
      <Stack.Screen name={'User Info'} component={PersonInfoScreen} />
    </Stack.Navigator>
  );
};
