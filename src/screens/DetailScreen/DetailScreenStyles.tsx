import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    marginTop: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: 170,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 14,
    color: '#4a4a4a',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    color: '#4a4a4a',
    lineHeight: 25,
  },
});

export default styles;
