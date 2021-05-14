import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerGrid: {
    //marginTop: 30,
    paddingBottom: 70,
    marginHorizontal: 5,
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  line: {
    borderColor: '#4a4a4a',
    borderWidth: 0.3,
    marginTop: 15,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitleText: {
    color: '#4a4a4a',
    marginVertical: 5,
  },
  contentContainer: {
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 50,
  },
});

export default styles;
