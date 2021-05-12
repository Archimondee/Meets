import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationService from 'utils/NavigationService';

interface HeadersProps {
  isFavorite: boolean;
  addFavorite: () => void;
}

const Headers = (props: HeadersProps) => {
  const {isFavorite, addFavorite} = props;
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={() => NavigationService.back()}>
        <Icon name={'chevron-back'} size={25} color={'#4a4a4a'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={addFavorite}>
        <Icon
          name={`${isFavorite ? 'heart-sharp' : 'heart-outline'}`}
          size={25}
          color={`${isFavorite ? 'red' : '#4a4a4a'}`}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Headers;
