import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
import SplashScreen from 'screens/SplashScreen/SplashScreen';
import {RootStackParamList} from 'src/types/NavigatorTypes';
import {navigationRef} from 'utils/NavigationService';
import MainNavigator from './MainNavigator';

const App = createStackNavigator<RootStackParamList>();

const options: StackNavigationOptions = {
  headerTintColor: '#65b6e5',
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    //fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: '#4a4a4a',
  },
};

const AppNavigator = () => {
  const linking = {
    prefixes: ['meetstest://'],
  };

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <App.Navigator
        screenOptions={options}
        mode={'modal'}
        initialRouteName={'SplashScreen'}>
        <App.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <App.Screen
          component={MainNavigator}
          name="Main"
          options={{headerShown: false}}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
