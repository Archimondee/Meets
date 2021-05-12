import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {RootStackParamList} from 'src/types/NavigatorTypes';
import TabNavigator from './TabNavigator';
import DetailScreen from 'screens/DetailScreen/DetailScreen';

const Main = createStackNavigator<RootStackParamList>();

const options: StackNavigationOptions = {
  //headerTintColor: '#65b6e5',
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 14,
    color: '#4a4a4a',
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const MainNavigator = () => {
  return (
    <Main.Navigator screenOptions={options}>
      <Main.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Main.Screen
        component={DetailScreen}
        name="DetailScreen"
        options={{headerShown: false}}
      />
    </Main.Navigator>
  );
};

export default MainNavigator;
