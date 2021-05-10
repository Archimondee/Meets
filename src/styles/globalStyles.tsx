import {StyleSheet} from 'react-native';

const globalStyles = (backgroundColor?: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor || '#eaeaea',
    },
    bottomSafeArea: {
      flex: 1,
      backgroundColor: backgroundColor || '#eaeaea',
    },
    safe: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    //  Font
  });
};

export default globalStyles;
