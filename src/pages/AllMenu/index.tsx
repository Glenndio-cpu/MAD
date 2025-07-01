import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Logo from '../../assets/GeFiBra Cafe Logo 1 (1).svg';
import CappucinoSVG from '../../assets/Cappucino.svg';
import LatteSVG from '../../assets/Latte.svg';
import GreenTeaSVG from '../../assets/GreenTea 1.svg';
import LechyeTeaSVG from '../../assets/Lechye Tea 1.svg';
import StrawberrySquashSVG from '../../assets/Strawberry Squash 1.svg';
import MangoSmoothieSVG from '../../assets/Mango Smoothie 1.svg';
import CaramelMacchiatoSVG from '../../assets/Iced caramel macchiato 1.svg';
import LemonTeaSVG from '../../assets/Lemon Tea 1 (1).svg';
import CustomerSVG from '../../assets/Customer.svg';
import MenuSVG from '../../assets/Menu.svg';
import SoloCupSVG from '../../assets/Solo Cup.svg';
import AmericanoSVG from '../../assets/Americano 1.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import promoText from '../../config/promoConfig';

const { width } = Dimensions.get('window');

const menuData = [
  {
    name: 'Cappucino',
    price: 'Rp 28.000,-',
    Svg: CappucinoSVG,
    type: 'Coffe',
    rating: 4.8,
    reviews: 156,
  },
  {
    name: 'Latte',
    price: 'Rp 30.000,-',
    Svg: LatteSVG,
    type: 'Coffe',
    rating: 4.7,
    reviews: 142,
  },
  {
    name: 'GreenTea',
    price: 'Rp 25.000,-',
    Svg: GreenTeaSVG,
    type: 'Tea',
    rating: 4.6,
    reviews: 98,
  },
  {
    name: 'Iced Lychee Tea',
    price: 'Rp 27.000,-',
    Svg: LechyeTeaSVG,
    type: 'Tea',
    rating: 4.5,
    reviews: 87,
  },
  {
    name: 'Strawberry Squash',
    price: 'Rp 26.000,-',
    Svg: StrawberrySquashSVG,
    type: 'Other',
    rating: 4.9,
    reviews: 203,
  },
  {
    name: 'Mango Smoothie',
    price: 'Rp 29.000,-',
    Svg: MangoSmoothieSVG,
    type: 'Other',
    rating: 4.4,
    reviews: 76,
  },
  {
    name: 'Caramel macchiato',
    price: 'Rp 32.000,-',
    Svg: CaramelMacchiatoSVG,
    type: 'Coffe',
    rating: 4.8,
    reviews: 134,
  },
  {
    name: 'Iced Lemon Tea',
    price: 'Rp 24.000,-',
    Svg: LemonTeaSVG,
    type: 'Tea',
    rating: 4.3,
    reviews: 65,
  },
  {
    name: 'Americano',
    price: 'Rp 22.000,-',
    Svg: AmericanoSVG,
    type: 'Coffe',
    rating: 4.7,
    reviews: 189,
  },
];

const filters = ['All', 'Coffe', 'Tea', 'Other'];

const AllMenu = ({ navigation }) => {
  const [selected, setSelected] = useState('All');
  const [username, setUsername] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('USERNAME').then(name => {
      if (name) setUsername(name);
    });
  }, []);

  const filteredMenu = selected === 'All' ? menuData : menuData.filter(item => item.type === selected);
  
  // Get best sellers (top 3 by rating)
  const bestSellers = menuData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <View style={styles.root}>
      {/* Back Button absolute */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation && navigation.navigate('LoginPage')}>
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

      {/* Banner Promosi */}
      <View style={styles.promoBanner}>
        <Text style={styles.promoText}>{promoText}</Text>
        <Text style={styles.promoSubText}>🎉 Limited Time Offer!</Text>
      </View>

      {/* Best Seller Section */}
      <View style={styles.bestSellerSection}>
        <Text style={styles.bestSellerTitle}>🔥 Best Seller</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <TouchableOpacity 
            style={styles.bestSellerItem}
            onPress={() => navigation && navigation.navigate('CappucinoDescription')}
          >
            <CappucinoSVG width={60} height={60} style={styles.bestSellerImage} />
            <Text style={styles.bestSellerName}>Cappucino</Text>
            <Text style={styles.bestSellerRating}>⭐ 4.8 (156 reviews)</Text>
            <Text style={styles.bestSellerPrice}>Rp 28.000,-</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {filters.map((tab, idx) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selected === tab && styles.tabActive,
              idx === 0 && { marginLeft: 0 },
            ]}
            onPress={() => {
              if (tab === 'All') {
                setSelected('All');
              } else if (tab === 'Coffe') {
                navigation && navigation.navigate('CoffeMenu');
              } else if (tab === 'Tea') {
                navigation && navigation.navigate('TeaMenu');
              } else if (tab === 'Other') {
                navigation && navigation.navigate('OtherMenu');
              }
            }}
          >
            <Text style={[styles.tabText, selected === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Menu List */}
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
        {filteredMenu.map((item, idx) => {
          const MenuSVG = item.Svg;
          return (
            <View key={idx} style={styles.menuItem}>
              <MenuSVG width={90} height={90} style={styles.menuImage} />
              <View style={styles.menuContent}>
                <Text style={styles.menuName}>{item.name}</Text>
                <Text style={styles.menuPrice}>{item.price}</Text>
                <Text style={styles.menuRating}>⭐ {item.rating} ({item.reviews} reviews)</Text>
                {item.name === 'Cappucino' ? (
                  <TouchableOpacity style={styles.menuButton} onPress={() => navigation && navigation.navigate('CappucinoDescription')}>
                    <Text style={styles.menuButtonText}>Masukan Pesanan</Text>
                  </TouchableOpacity>
                ) : item.name === 'Strawberry Squash' ? (
                  <TouchableOpacity style={styles.menuButton} onPress={() => navigation && navigation.navigate('StrawberrySquashDescription')}>
                    <Text style={styles.menuButtonText}>Masukan Pesanan</Text>
                  </TouchableOpacity>
                ) : item.name === 'Caramel macchiato' ? (
                  <TouchableOpacity style={styles.menuButton} onPress={() => navigation && navigation.navigate('CaramelMacchiatoDescription')}>
                    <Text style={styles.menuButtonText}>Masukan Pesanan</Text>
                  </TouchableOpacity>
                ) : item.name === 'Latte' ? (
                  <TouchableOpacity style={styles.menuButton} onPress={() => navigation && navigation.navigate('LatteDescription')}>
                    <Text style={styles.menuButtonText}>Masukan Pesanan</Text>
                  </TouchableOpacity>
                ) : item.name === 'GreenTea' ? (
                  <TouchableOpacity style={styles.menuButton} onPress={() => navigation && navigation.navigate('GreenTeaDescription')}>
                    <Text style={styles.menuButtonText}>Masukan Pesanan</Text>
                  </TouchableOpacity>
                ) : item.name === 'Iced Lychee Tea' ? (
                  <TouchableOpacity style={styles.menuButton} onPress={() => navigation && navigation.navigate('IcedLycheeTeaDescription')}>
                    <Text style={styles.menuButtonText}>Masukan Pesanan</Text>
                  </TouchableOpacity>
                ) : item.name === 'Mango Smoothie' ? (
                  <TouchableOpacity style={styles.menuButton} onPress={() => navigation && navigation.navigate('MangoSmoothieDescription')}>
                    <Text style={styles.menuButtonText}>Masukan Pesanan</Text>
                  </TouchableOpacity>
                ) : item.name === 'Americano' ? (
                  <TouchableOpacity style={styles.menuButton} onPress={() => navigation && navigation.navigate('AmericanoDescription')}>
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

export default AllMenu;

const tabWidth = (width - 48) / 4;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF6EB',
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
    paddingVertical: 14,
    alignItems: 'center',
    marginLeft: 8,
  },
  tabActive: {
    backgroundColor: '#A0522D',
  },
  tabText: {
    color: '#A0522D',
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
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
  menuRating: {
    fontSize: 14,
    color: '#f59e0b',
    marginBottom: 8,
    fontWeight: '500',
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
  promoBanner: {
    backgroundColor: '#A0522D',
    padding: 6,
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 8,
    marginBottom: 10,
  },
  promoText: {
    color: '#FFF',
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
    marginBottom: 2,
  },
  promoSubText: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
  },
  bestSellerSection: {
    backgroundColor: '#FFF6EB',
    borderRadius: 12,
    padding: 6,
    marginHorizontal: 24,
    marginTop: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  bestSellerTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#3E2723',
    marginBottom: 12,
    textAlign: 'center',
  },
  bestSellerScroll: {
    flexGrow: 0,
  },
  bestSellerScrollContent: {
    paddingHorizontal: 8,
    paddingRight: 16,
  },
  bestSellerItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 6,
    marginRight: 8,
    alignItems: 'center',
    width: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  bestSellerImage: {
    width: 28,
    height: 28,
    borderRadius: 6,
    marginBottom: 4,
  },
  bestSellerName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#3E2723',
    marginBottom: 1,
    textAlign: 'center',
  },
  bestSellerRating: {
    fontSize: 8,
    color: '#3E2723',
    marginBottom: 1,
    textAlign: 'center',
  },
  bestSellerPrice: {
    fontSize: 9,
    color: '#3E2723',
    fontWeight: '600',
    textAlign: 'center',
  },
});
