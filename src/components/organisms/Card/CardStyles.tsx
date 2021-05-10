import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: '#fafafa',
    marginTop: 80,
    height: 150,
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
  imageContainer: {
    width: '25%',
    //backgroundColor: 'red',
    height: 165,
    position: 'absolute',
    top: -45,
    left: 10,
    bottom: 100,
    right: 0,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 165,
    borderRadius: 10,
  },
  leftCard: {
    paddingHorizontal: 20,
    width: '100%',
    flex: 1,
    paddingLeft: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
    //paddingVertical: 10,
  },
  name: {
    fontSize: 13,
    paddingTop: 5,
    paddingBottom: 10,
    color: 'red',
  },
  description: {
    color: '#4a4a4a',
    fontSize: 10,
  },
});

export default styles;
