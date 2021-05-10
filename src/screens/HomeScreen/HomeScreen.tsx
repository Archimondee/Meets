import Card from 'components/organisms/Card/Card';
import CardGrid from 'components/organisms/CardGrid/CardGrid';
import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from 'styles/globalStyles';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaView
      style={[
        globalStyles().container,
        {paddingHorizontal: 20, paddingTop: 10},
      ]}>
      <View>
        <Text style={{fontSize: 32, fontWeight: 'bold'}}>Events</Text>
        <Text style={{color: '#4a4a4a', marginVertical: 5}}>
          Browse the hottest events
        </Text>
        <View
          style={{borderColor: '#4a4a4a', borderWidth: 0.3, marginTop: 15}}
        />

        {/* <Card
          title={'Metallica Concert in Palace Grounds (Paid)'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sed at ipsum earum aliquid ipsam esse molestias eum tempore rerum nesciunt consequatur'
          }
          name="Price : Rp. 1.500.000"
          img={require('assets/images/metalica.jpg')}
        /> */}
        <View
          style={{
            //marginTop: 30,
            flexDirection: 'row',
            flexGrow: 1,
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          <CardGrid
            title={'Metallica Concert in Palace Grounds (Paid)'}
            price={'Rp. 1.500.000'}
            name="Metallica"
            img={require('assets/images/metalica.jpg')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
