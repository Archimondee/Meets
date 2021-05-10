import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import HomeTab from './Tabs/HomeTab';
import {TitleFavorite, TitleHome} from 'components/atoms/navigations/TabsTitle';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'md-home' : 'md-home-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? '#65b6e5' : '#9b9b9b'}
            />
          );
        },
      })}
      tabBarOptions={{keyboardHidesTabBar: true}}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: ({focused}) => <TitleHome focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeTab}
        options={{
          tabBarLabel: ({focused}) => <TitleHome focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
