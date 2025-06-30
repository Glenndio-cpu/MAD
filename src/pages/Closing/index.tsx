import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from '../../assets/GeFiBra Cafe Logo 1 (1).svg';

interface Props {
  navigation: any;
}

const Closing: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>{'<'}</Text>
      </TouchableOpacity>
      <Logo width={110} height={80} style={styles.logo} />
      <Text style={styles.thankyou}>Thankyou{"\n"}For Order!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RiwayatPesanan')}>
        <Text style={styles.buttonText}>Riwayat Pesanan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllMenu')}>
        <Text style={styles.buttonText}>Pesan Lagi</Text>
      </TouchableOpacity>
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
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 16,
    zIndex: 2,
  },
  backIcon: {
    fontSize: 24,
    color: '#8B4513',
    fontWeight: 'bold',
  },
  logo: {
    marginBottom: 18,
    alignSelf: 'center',
  },
  thankyou: {
    fontSize: 32,
    color: '#A0522D',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginVertical: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#A0522D',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginTop: 14,
    width: 240,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
}); 