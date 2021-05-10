import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'screens/HomeScreen/HomeScreen';

const Home = createStackNavigator();

const HomeTab = () => {
  return (
    <Home.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
      }}>
      <Home.Screen name="Home" component={HomeScreen} />
    </Home.Navigator>
  );
};

export default HomeTab;
