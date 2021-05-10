import {StyleSheet} from 'react-native';

const styles = (focused?: boolean) =>
  StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
    },
    title: {
      textAlign: 'center',
      fontSize: 10,
      color: focused ? '#65b6e5' : '#9b9b9b',
      marginBottom: 3,
    },
  });

export default styles;
