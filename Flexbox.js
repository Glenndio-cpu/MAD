import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer}>
        <View style={styles.blackContainer} />
        <View style={styles.yellowContainer} />
        <View style={styles.blackContainer} />
      </View>

      <View style={styles.whiteContainer}>
        <Image
          source={require('./assets/123foto.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.blueContainer}>
        <View style={styles.blackContainer} />
        <View style={styles.yellowContainer} />
        <View style={styles.blackContainer} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  redContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  blueContainer: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackContainer: {
    width: 70,
    height: 70,
    backgroundColor: 'black',
    marginRight: 20,
    marginLeft: 10,
  },
  yellowContainer: {
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
    marginRight: 10,
  },
  logo: {
    width: 400,
    height: 400,
  },
});
