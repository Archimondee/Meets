import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import styles from './CardStyles';

interface CardProps {
  img: any;
  title: string;
  price: string;
  description: string;
}

const Card = (props: CardProps) => {
  const {img, title, price, description} = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={img}
          style={styles.image}
          resizeMethod={'resize'}
          resizeMode={'cover'}
          height={165}
        />
      </View>
      <View style={styles.leftCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.name}>{price}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default Card;
