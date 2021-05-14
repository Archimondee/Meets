import Card from 'components/organisms/Card/Card';
import CardGrid from 'components/organisms/CardGrid/CardGrid';
import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from 'styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {StoreStateType} from 'src/store';
import {useDispatch, useSelector} from 'react-redux';
import {setPreferences} from 'store/user/actions';
import NavigationService from 'utils/NavigationService';
import {DataDetailTypes} from 'src/types/DataTypes';
import styles from './FavoriteScreenStyles';

interface FavoriteScreenProps {}

const FavoriteScreen = (props: FavoriteScreenProps) => {
  const {data, preferences} = useSelector(
    (state: StoreStateType) => state.user,
  );
  const [isVertical, setIsVertical] = useState(
    preferences == 'list' ? true : false,
  );
  const dispatch = useDispatch();

  const changeGrid = (value: boolean) => {
    setIsVertical(value);
    let pref = value ? 'list' : 'grid';
    dispatch(setPreferences(pref));
  };

  const gotoDetail = (item: DataDetailTypes) => {
    NavigationService.navigate('DetailScreen', {item: item});
  };

  return (
    <SafeAreaView style={[globalStyles().container, styles.container]}>
      <View>
        <Text style={styles.titleText}>Events</Text>
        <View style={styles.containerItem}>
          <Text style={styles.subtitleText}>Browse your favorite events</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => changeGrid(false)}>
              <Icon
                name={`${
                  isVertical == false
                    ? 'ios-ellipsis-horizontal'
                    : 'ios-ellipsis-horizontal-outline'
                }`}
                size={25}
                color={`${isVertical == false ? '#4f8ef7' : '#4a4a4a'}`}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeGrid(true)}>
              <Icon
                name={`${isVertical == true ? 'md-list' : 'md-list-outline'}`}
                size={25}
                color={`${isVertical == true ? '#4f8ef7' : '#4a4a4a'}`}
                style={{marginLeft: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.line} />
        {isVertical ? (
          <FlatList
            data={data}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            renderItem={({item, index}) => {
              return item.isFavorite ? (
                <TouchableOpacity onPress={() => gotoDetail(item)}>
                  <Card
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    price={`Price : ${item.price !== '' ? item.price : 'Free'}`}
                    img={item.img}
                  />
                </TouchableOpacity>
              ) : (
                <View />
              );
            }}
            keyExtractor={(item, index) => `${item.title} ${index}`}
          />
        ) : (
          <View />
        )}

        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
          <View style={styles.containerGrid}>
            {data.map((item, index) => {
              return !isVertical && item.isFavorite ? (
                <CardGrid
                  gotoDetail={() => gotoDetail(item)}
                  key={item.title}
                  title={item.title}
                  price={item.price}
                  name={item.name}
                  img={item.img}
                />
              ) : null;
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
