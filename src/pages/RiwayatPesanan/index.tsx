import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const RiwayatPesanan = ({ navigation }) => {
  return (
    <View style={styles.root}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation && navigation.goBack()}>
        <Text style={styles.backIcon}>{'<'}</Text>
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title}>Riwayat Pesanan</Text>
      {/* List Icon (simple custom icon) */}
      <View style={styles.iconWrapper}>
        <View style={styles.lineRow}>
          <View style={styles.line} />
          <View style={styles.dot} />
        </View>
        <View style={styles.lineRow}>
          <View style={styles.line} />
          <View style={styles.dot} />
        </View>
        <View style={styles.lineRow}>
          <View style={styles.line} />
          <View style={styles.dot} />
        </View>
      </View>
      {/* Ambil Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.buttonText}>Ambil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RiwayatPesanan;

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
    top: 36,
    left: 24,
    zIndex: 2,
  },
  backIcon: {
    fontSize: 22,
    color: '#8B4513',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    color: '#A0522D',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  iconWrapper: {
    marginBottom: 40,
    marginTop: 10,
  },
  lineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  line: {
    width: 60,
    height: 7,
    backgroundColor: '#000',
    borderRadius: 4,
    marginRight: 16,
  },
  dot: {
    width: 14,
    height: 14,
    backgroundColor: '#000',
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#A0522D',
    borderRadius: 10,
    paddingVertical: 12,
    width: width * 0.6,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
}); 