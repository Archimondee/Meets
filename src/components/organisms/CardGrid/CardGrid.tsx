import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from './CardGridStyles';

interface CardGridProps {
  img: any;
  title: string;
  name: string;
  price: string;
  gotoDetail: (item: any) => void;
}

const CardGrid = (props: CardGridProps) => {
  const {img, title, name, price, gotoDetail} = props;
  return (
    <TouchableOpacity onPress={gotoDetail} style={styles.container}>
      <Image source={img} style={styles.image} resizeMode={'cover'} />
      <View style={{paddingVertical: 20}}>
        <Text numberOfLines={3} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.name}>
          by {name}
        </Text>
        <Text numberOfLines={2} style={styles.price}>
          Price {`\n`}
          {price !== '' ? price : 'Free'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardGrid;
