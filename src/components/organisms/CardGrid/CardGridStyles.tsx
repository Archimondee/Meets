import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fafafa',
    width: '46%',
    paddingTop: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  image: {
    height: 160,
    width: 110,
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  name: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 12,
    color: '#4a4a4a',
  },
  price: {
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default styles;
