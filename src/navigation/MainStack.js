import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import myStartupProgress from '../pages/myStartupProgress';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="main" component={myStartupProgress} />
    </Stack.Navigator>
  );
};
