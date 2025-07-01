import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import promoText from '../../config/promoConfig';

const HomePage = () => {
  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.innerContainer}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.textHeaderContainer}>
            <Text style={styles.textGreeting}>Hi, John Doe</Text>
            <Text style={styles.textSub}>Have you track your money today?</Text>
          </View>
          <Image
            source={require('../../assets/pic.png')}
            style={styles.imageAvatar}
          />
        </View>

        {/* Banner Promosi - Always show */}
        <View style={styles.promoBanner}>
          <Text style={styles.promoText}>{promoText}</Text>
          <Text style={styles.promoSubText}>🎉 Limited Time Offer!</Text>
        </View>

        {/* Grid/Horizontal Scroll Menu */}
        <View style={styles.menuSection}>
          <Text style={styles.menuSectionTitle}>Menu Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuScroll}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Image source={require('../../assets/Menu.svg')} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuLabel}>Coffee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Image source={require('../../assets/Strawberry Squash 1.svg')} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuLabel}>Smoothies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Image source={require('../../assets/Latte.svg')} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuLabel}>Pastries</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Image source={require('../../assets/GreenTea 1.svg')} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuLabel}>Tea</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Best Seller Section */}
        <View style={styles.bestSellerSection}>
          <Text style={styles.bestSellerTitle}>🔥 Best Seller</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bestSellerScrollContent}
          >
            <TouchableOpacity style={styles.bestSellerItem}>
              <Image source={require('../../assets/Cappucino.svg')} style={styles.bestSellerImage} />
              <View style={styles.bestSellerInfo}>
                <Text style={styles.bestSellerName}>Cappucino</Text>
                <Text style={styles.bestSellerRating}>⭐ 4.8 (156 reviews)</Text>
                <Text style={styles.bestSellerPrice}>Rp 28.000,-</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCardContainer}>
          <Text style={styles.textCardTitle}>Your Balance</Text>
          <Text style={styles.textTotalBalance}>Rp. 10.000.000</Text>
          <View style={styles.lineDivider} />
          <View style={styles.balanceRowContainer}>
            <Text style={styles.textLabel}>Cash on Hand</Text>
            <Text style={styles.textAmount}>Rp. 4.000.000</Text>
          </View>
          <View style={styles.balanceRowContainer}>
            <Text style={styles.textLabel}>Cash on Bank</Text>
            <Text style={styles.textAmount}>Rp. 6.000.000</Text>
          </View>
        </View>

        {/* Transaction Section */}
        <View style={styles.transactionContainer}>
          <Text style={styles.textTransactionTitle}>Add Transaction</Text>
          <Gap height={20} />
          <Button text="Cash On Hand" />
          <Gap height={20} />
          <Button text="Cash On Bank" />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  pageContainer: {
    flexGrow: 1,
    backgroundColor: '#f8fafc',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 50,
    backgroundColor: '#f8fafc',
    paddingBottom: 120,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  textHeaderContainer: {
    flex: 1,
    marginRight: 14,
  },
  textGreeting: {
    fontSize: 24,
    color: '#1e293b',
    fontWeight: '700',
  },
  textSub: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 6,
    width: 900,
  },
  imageAvatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  promoBanner: {
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FF6B6B',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  promoText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  promoSubText: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 4,
    opacity: 0.9,
  },
  menuSection: {
    marginTop: 30,
  },
  menuSectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#1e293b',
  },
  menuScroll: {
    flexDirection: 'row',
  },
  menuItem: {
    alignItems: 'center',
    marginRight: 24,
  },
  menuIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 8,
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
  menuLabel: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  bestSellerSection: {
    backgroundColor: '#FFF6EB',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 12,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  bestSellerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#1e293b',
  },
  bestSellerScrollContent: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  bestSellerItem: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    alignItems: 'center',
    width: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  bestSellerImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginBottom: 8,
  },
  bestSellerInfo: {
    flex: 1,
  },
  bestSellerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E2723',
    marginBottom: 4,
    textAlign: 'center',
  },
  bestSellerRating: {
    fontSize: 15,
    color: '#3E2723',
    marginBottom: 4,
    textAlign: 'center',
  },
  bestSellerPrice: {
    fontSize: 16,
    color: '#3E2723',
    fontWeight: '600',
    textAlign: 'center',
  },
  balanceCardContainer: {
    borderRadius: 16,
    padding: 24,
    marginTop: 30,
    backgroundColor: '#667eea',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  textCardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  textTotalBalance: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 14,
    color: '#ffffff',
  },
  lineDivider: {
    borderBottomWidth: 1.2,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    marginVertical: 10,
  },
  balanceRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  textLabel: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
  },
  textAmount: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  transactionContainer: {
    borderRadius: 16,
    padding: 24,
    marginTop: 30,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  textTransactionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
  },
});
