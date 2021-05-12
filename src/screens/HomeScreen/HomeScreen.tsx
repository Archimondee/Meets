import Card from 'components/organisms/Card/Card';
import CardGrid from 'components/organisms/CardGrid/CardGrid';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from 'styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {StoreStateType} from 'src/store';
import {useDispatch, useSelector} from 'react-redux';
import {addData} from 'store/user/actions';
import NavigationService from 'utils/NavigationService';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  //console.log('data : ', data);
  const {data} = useSelector((state: StoreStateType) => state.user);
  const [isVertical, setIsVertical] = useState(true);
  const dispatch = useDispatch();

  const changeGrid = (value: boolean) => {
    setIsVertical(value);
  };

  const gotoDetail = (item: any) => {
    NavigationService.navigate('DetailScreen');
  };

  return (
    <SafeAreaView
      style={[
        globalStyles().container,
        {paddingHorizontal: 20, paddingTop: 10},
      ]}>
      <View>
        <Text style={{fontSize: 32, fontWeight: 'bold'}}>Events</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#4a4a4a', marginVertical: 5}}>
            Browse the hottest events
          </Text>
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

        <View
          style={{borderColor: '#4a4a4a', borderWidth: 0.3, marginTop: 15}}
        />
        <FlatList
          data={data}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 5, paddingTop: 10}}
          renderItem={({item, index}) => {
            return isVertical ? (
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
              <View key={index} />
            );
          }}
          keyExtractor={(item, index) => `${item.title} ${index}`}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              //marginTop: 30,
              flexDirection: 'row',
              flexGrow: 1,
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {data.map((item, index) => {
              return !isVertical ? (
                <CardGrid
                  gotoDetail={() => gotoDetail(item)}
                  key={item.title}
                  title={item.title}
                  price={item.price}
                  name={item.name}
                  img={item.img}
                />
              ) : (
                <View key={index} />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
