import {createRef} from 'react';
import {NavigationContainerRef, StackActions} from '@react-navigation/core';
import {RootType, RootStackParamList} from 'src/types/NavigatorTypes';

export const navigationRef = createRef<NavigationContainerRef>();

const navigate = (
  routeName: RootType,
  params?: RootStackParamList[RootType],
) => {
  navigationRef.current!.navigate(routeName, params);
};

const push = (routeName: RootType, params?: RootStackParamList[RootType]) => {
  const pushAction = StackActions.push(routeName, params);
  navigationRef.current!.dispatch(pushAction);
};

const popToTop = () => {
  navigationRef.current!.dispatch(StackActions.popToTop());
};

const back = () => {
  navigationRef.current!.dispatch(StackActions.pop(1));
};

const backTo = (number: number) => {
  navigationRef.current!.dispatch(StackActions.pop(number));
};

const reset = () => {
  navigationRef.current!.reset({
    index: 0,
    routes: [{name: 'Main'}],
  });
};

const replace = (
  routeName: RootType,
  params?: RootStackParamList[RootType],
) => {
  navigationRef.current!.dispatch(StackActions.replace(routeName, params));
};

export default {
  navigate,
  push,
  back,
  backTo,
  replace,
  reset,
  popToTop,
};
