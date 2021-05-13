import {DataDetailTypes} from './DataTypes';

export type RootStackParamList = {
  SplashScreen: undefined;
  Main: undefined;
  HomeScreen: undefined;
  TabNavigator: undefined;
  DetailScreen: {item: DataDetailTypes};
};

export type RootType = 'SplashScreen' | 'HomeScreen' | 'Main' | 'DetailScreen';
