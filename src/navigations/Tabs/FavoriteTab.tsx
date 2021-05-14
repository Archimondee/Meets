import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FavoriteScreen from 'screens/FavoriteScreen/FavoriteScreen';
const Favorite = createStackNavigator();

const FavoriteTab = () => {
  return (
    <Favorite.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
      }}>
      <Favorite.Screen name="Home" component={FavoriteScreen} />
    </Favorite.Navigator>
  );
};

export default FavoriteTab;
