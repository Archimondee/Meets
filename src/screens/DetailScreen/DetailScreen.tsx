import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from 'styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Headers from 'components/atoms/headers/Headers';
import styles from './DetailScreenStyles';

interface DetailScreenProps {}

const DetailScreen = (props: DetailScreenProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const addFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <SafeAreaView
      style={[
        globalStyles().container,
        {paddingHorizontal: 20, paddingTop: 5},
      ]}>
      <Headers isFavorite={isFavorite} addFavorite={addFavorite} />
      <View style={styles.content}>
        <Image
          source={require('assets/images/metalica.jpg')}
          style={styles.image}
        />
        <Text numberOfLines={2} style={styles.title}>
          Judul Berita
        </Text>
        <Text style={styles.name}>Metallica</Text>
        <Text style={styles.price}>Price : Rp. 1.500.000</Text>
      </View>
      <View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque
          amet perferendis in repudiandae velit eius ullam earum repellat
          eligendi vel ipsam minus possimus, dignissimos adipisci nisi, porro ut
          impedit.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
