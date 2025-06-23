import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Logo from '../../assets/GeFiBra Cafe Logo 1 (1).svg';

const { width } = Dimensions.get('window');

const Closing = () => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>
        <Logo width={width * 0.22} height={width * 0.22} style={styles.logo} />
        <Text style={styles.thankyou}>Thankyou{"\n"}For Order!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Riwayat Pesanan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pesan Lagi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Closing;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF6EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    maxWidth: 400,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: width * 0.08,
    paddingHorizontal: width * 0.05,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: width * 0.04,
    left: width * 0.04,
    zIndex: 2,
  },
  backIcon: {
    fontSize: width * 0.06,
    color: '#8B4513',
    fontWeight: 'bold',
  },
  logo: {
    marginTop: width * 0.04,
    marginBottom: width * 0.025,
  },
  thankyou: {
    fontSize: width * 0.055,
    color: '#A0522D',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginVertical: width * 0.045,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#A0522D',
    borderRadius: 8,
    paddingVertical: width * 0.035,
    paddingHorizontal: 18,
    marginTop: 10,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: width * 0.045,
    fontFamily: 'Poppins-Medium',
  },
}); 