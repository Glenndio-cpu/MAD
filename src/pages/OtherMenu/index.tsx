import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Logo from '../../assets/GeFiBra Cafe Logo 1 (1).svg';
import StrawberrySquashSVG from '../../assets/Strawberry Squash 1.svg';
import MangoSmoothieSVG from '../../assets/Mango Smoothie 1.svg';
import CaramelMacchiatoSVG from '../../assets/Iced caramel macchiato 1.svg';
import CustomerSVG from '../../assets/Customer.svg';
import MenuSVG from '../../assets/Menu.svg';
import SoloCupSVG from '../../assets/Solo Cup.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const menuData = [
  {
    name: 'Strawberry Squash',
    price: 'Rp 26.000,-',
    Svg: StrawberrySquashSVG,
    type: 'Other',
  },
  {
    name: 'Mango Smoothie',
    price: 'Rp 29.000,-',
    Svg: MangoSmoothieSVG,
    type: 'Other',
  },
  {
    name: 'Caramel Macchiato',
    price: 'Rp 32.000,-',
    Svg: CaramelMacchiatoSVG,
    type: 'Other',
  },
];

const tabLabels = ['All', 'Coffe', 'Tea', 'Other'];
const tabWidth = (width - 48) / 4;

const OtherMenu = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Other');
  const [username, setUsername] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('USERNAME').then(name => {
      if (name) setUsername(name);
    });
  }, []);

  return (
    <View style={styles.root}>
      {/* Back Button absolute */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation && navigation.navigate('AllMenu')}>
        <Text style={styles.backIcon}>{'<'}</Text>
      </TouchableOpacity>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <Logo width={55} height={55} style={styles.logo} />
        {username ? (
          <Text style={styles.welcomeText}>
            Welcome, <Text style={styles.usernameDark}>{username}</Text>!
          </Text>
        ) : null}
        <Text style={styles.headerTitle}>Menu</Text>
      </View>
      {/* Tabs */}
      <View style={styles.tabs}>
        {tabLabels.map((tab, idx) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab && styles.tabActive,
              idx === 0 && { marginLeft: 0 },
            ]}
            onPress={() => {
              if (tab === 'All') {
                navigation && navigation.navigate('AllMenu');
              } else if (tab === 'Coffe') {
                navigation && navigation.navigate('CoffeMenu');
              } else if (tab === 'Tea') {
                navigation && navigation.navigate('TeaMenu');
              } else {
                setSelectedTab(tab);
              }
            }}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Menu List */}
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
        {menuData.map((item, idx) => {
          const MenuSVG = item.Svg;
          return (
            <View key={idx} style={styles.menuItem}>
              <MenuSVG width={90} height={90} style={styles.menuImage} />
              <View style={styles.menuContent}>
                <Text style={styles.menuName}>{item.name}</Text>
                <Text style={styles.menuPrice}>{item.price}</Text>
                {item.name === 'Strawberry Squash' ? (
                  <TouchableOpacity style={styles.menuButton} onPress={() => navigation && navigation.navigate('StrawberrySquashDescription')}>
                    <Text style={styles.menuButtonText}>Masukan Pesanan</Text>
                  </TouchableOpacity>
                ) : item.name === 'Caramel Macchiato' ? (
                  <TouchableOpacity style={styles.menuButton} onPress={() => navigation && navigation.navigate('CaramelMacchiatoDescription')}>
                    <Text style={styles.menuButtonText}>Masukan Pesanan</Text>
                  </TouchableOpacity>
                ) : item.name === 'Mango Smoothie' ? (
                  <TouchableOpacity style={styles.menuButton} onPress={() => navigation && navigation.navigate('MangoSmoothieDescription')}>
                    <Text style={styles.menuButtonText}>Masukan Pesanan</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>Masukan Pesanan</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation && navigation.navigate('AllMenu')}>
          <SoloCupSVG width={38} height={38} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation && navigation.navigate('RiwayatPesanan')}>
          <MenuSVG width={38} height={38} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation && navigation.navigate('Profile')}>
          <CustomerSVG width={38} height={38} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtherMenu;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF6EB',
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 16,
    zIndex: 10,
    backgroundColor: 'transparent',
    padding: 8,
  },
  backIcon: {
    fontSize: 22,
    color: '#8B4513',
    fontWeight: 'bold',
  },
  headerWrapper: {
    alignItems: 'center',
    marginTop: 56,
    marginBottom: 12,
  },
  logo: {
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 28,
    color: '#A0522D',
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 18,
    color: '#A0522D',
    fontFamily: 'Poppins-Medium',
    marginTop: 4,
    marginBottom: 4,
    textAlign: 'center',
  },
  usernameDark: {
    color: '#4B2E09',
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    marginHorizontal: 24,
  },
  tab: {
    width: tabWidth,
    backgroundColor: '#E9D6C5',
    borderRadius: 6,
    paddingVertical: 7,
    alignItems: 'center',
    marginLeft: 8,
  },
  tabActive: {
    backgroundColor: '#A0522D',
  },
  tabText: {
    color: '#A0522D',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  tabTextActive: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF6EB',
    borderRadius: 16,
    marginBottom: 22,
    width: width - 32,
    padding: 12,
    shadowColor: '#000',
  },
  menuImage: {
    borderRadius: 16,
    marginRight: 16,
    backgroundColor: '#EEE',
    width: 90,
    height: 90,
  },
  menuContent: {
    flex: 1,
    justifyContent: 'center',
  },
  menuName: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#3E2723',
    marginBottom: 2,
  },
  menuPrice: {
    fontSize: 17,
    color: '#3E2723',
    marginBottom: 10,
  },
  menuButton: {
    backgroundColor: '#A0522D',
    borderRadius: 16,
    paddingVertical: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 4,
  },
  menuButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3E2723',
    height: 54,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 6,
    paddingHorizontal: 24,
  },
}); 