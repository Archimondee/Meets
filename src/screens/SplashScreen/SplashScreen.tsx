import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from 'styles/globalStyles';
import NavigationService from 'utils/NavigationService';
import styles from './SplashScreenStyles';
import {StoreStateType} from 'src/store';
import dataData from 'assets/mock/data';
import {addData} from 'store/user/actions';

interface SplashScreenProps {}

const SplashScreen = (props: SplashScreenProps) => {
  const {data} = useSelector((state: StoreStateType) => state.user);
  const [isDataExist, setIsDataExist] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    checkData();
  }, []);

  const checkData = () => {
    if (data.length == 0) {
      console.log('dataaaa add');
      dispatch(addData(dataData));

      setIsDataExist(true);
      setTimeout(() => {
        NavigationService.replace('Main');
        setIsDataExist(false);
      }, 2000);
    } else {
      console.log('dataaaa check');
      setIsDataExist(false);
      setTimeout(() => {
        NavigationService.replace('Main');
        //setIsDataExist(false);
      }, 2000);
    }
  };
  return (
    <SafeAreaView style={[globalStyles().container, styles.container]}>
      <Text>SplashScreen</Text>
      <Text>{isDataExist ? 'Initializing Data' : ''}</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
