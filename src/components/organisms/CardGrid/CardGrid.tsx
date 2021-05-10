import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import styles from './CardGridStyles';

interface CardGridProps {
  img: any;
  title: string;
  name: string;
  price: string;
}

const CardGrid = (props: CardGridProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('assets/images/metalica.jpg')}
        style={styles.image}
        resizeMode={'cover'}
      />
      <View style={{paddingVertical: 20}}>
        <Text numberOfLines={3} style={styles.title}>
          Metallica Concert in Palace Grounds (Paid)
        </Text>
        <Text numberOfLines={2} style={styles.name}>
          by Metallica
        </Text>
        <Text numberOfLines={2} style={styles.price}>
          Price {`\n`}Rp 1.500.000
        </Text>
      </View>
    </View>
  );
};

export default CardGrid;
