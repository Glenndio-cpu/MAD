import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import LatteSVG from '../../assets/Latte.svg';
import SoloCupSVG from '../../assets/Solo Cup.svg';
import MenuSVG from '../../assets/Menu.svg';
import CustomerSVG from '../../assets/Customer.svg';
import Logo from '../../assets/GeFiBra Cafe Logo 1 (1).svg';

interface Props {
  navigation: StackNavigationProp<any>;
}

const LatteDescription: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </TouchableOpacity>
      </View>
      {/* Logo */}
      <Logo width={120} height={80} style={styles.logo} />
      {/* Title */}
      <Text style={styles.title}>Latte</Text>
      {/* Latte SVG */}
      <LatteSVG width={110} height={110} style={styles.coffeePhoto} />
      {/* Price Section */}
      <Text style={styles.priceLabel}>Harga:</Text>
      <Text style={styles.priceValue}>Rp 28.000,-</Text>
      {/* Order Button */}
      <TouchableOpacity style={styles.orderButton} onPress={() => navigation.navigate('Closing')}>
        <Text style={styles.orderButtonText}>Pesan{"\n"}Sekarang</Text>
      </TouchableOpacity>
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('AllMenu')}>
          <SoloCupSVG width={50} height={50} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RiwayatPesanan')}>
          <MenuSVG width={50} height={50} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <CustomerSVG width={50} height={50} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6EB',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 24,
  },
  headerRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  backArrow: {
    fontSize: 22,
    color: '#8B4513',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#A0522D',
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  coffeePhoto: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  priceLabel: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#3E2723',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 8,
  },
  priceValue: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#3E2723',
    textAlign: 'center',
    marginBottom: 12,
  },
  orderButton: {
    backgroundColor: '#A0522D',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 32,
    alignItems: 'center',
    width: 200,
  },
  orderButtonText: {
    color: '#FFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3E2723',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 54,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 0,
  },
});

export default LatteDescription; 