import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      {/* Top Color Bar */}
      <View style={[styles.colorBar, {backgroundColor: 'red'}]}>
        <View style={styles.blackBlock} />
        <View style={styles.yellowBlock} />
        <View style={styles.blackBlock} />
      </View>

      {/* Middle Content */}
      <View style={styles.middleContent}>
        <Image
          source={require('./assets/123foto.png')} // ← Gambar yang kamu minta
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Bottom Color Bar */}
      <View style={[styles.colorBar, {backgroundColor: 'blue'}]}>
        <View style={styles.blackBlock} />
        <View style={styles.yellowBlock} />
        <View style={styles.blackBlock} />
      </View>
    </View>
  );
};

const BLOCK_SIZE = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  colorBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 80,
  },
  blackBlock: {
    width: BLOCK_SIZE,
    height: BLOCK_SIZE,
    backgroundColor: 'black',
  },
  yellowBlock: {
    width: BLOCK_SIZE,
    height: BLOCK_SIZE,
    backgroundColor: 'yellow',
  },
  middleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.get('window').width * 0.6,
    height: 200,
  },
});

export default Exercise4;
