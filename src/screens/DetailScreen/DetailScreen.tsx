import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from 'styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Headers from 'components/atoms/headers/Headers';
import styles from './DetailScreenStyles';
import {RouteProp, useFocusEffect} from '@react-navigation/core';
import {RootStackParamList} from 'src/types/NavigatorTypes';
import {useDispatch, useSelector} from 'react-redux';
import {StoreStateType} from 'src/store';
import {DataDetailTypes} from 'src/types/DataTypes';
import {addData} from 'store/user/actions';

type DetailsScreenRouteType = RouteProp<RootStackParamList, 'DetailScreen'>;

type Prop = {
  route: DetailsScreenRouteType;
};

const DetailScreen = ({route}: Prop) => {
  const {item} = route.params;
  const {data} = useSelector((state: StoreStateType) => state.user);
  const [isFavorite, setIsFavorite] = useState(item.isFavorite);
  const dispatch = useDispatch();
  const addFavorite = () => {
    setIsFavorite(!isFavorite);
    const newArray: any = [];
    data.map((data: DataDetailTypes, index) => {
      if (data.title === item.title) {
        const dataFavoriteChange = {
          img: data.img,
          title: data.title,
          paid: data.paid,
          description: data.description,
          price: data.price,
          nama: data.name,
          isFavorite: !isFavorite,
        };
        //console.log('change : ', dataFavoriteChange);
        newArray.push(dataFavoriteChange);
      } else {
        newArray.push(data);
      }
    });
    dispatch(addData(newArray));
  };

  return (
    <SafeAreaView
      style={[
        globalStyles().container,
        {paddingHorizontal: 20, paddingTop: 5},
      ]}>
      <Headers isFavorite={isFavorite} addFavorite={addFavorite} />
      <View style={styles.content}>
        <Image source={item.img} style={styles.image} />
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.name}>By {item.name}</Text>
        <Text style={styles.price}>
          Price : {item.price !== '' ? item.price : 'Free'}
        </Text>
      </View>
      <View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
