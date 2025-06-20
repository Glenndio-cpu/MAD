import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button, Gap} from '../../components/atoms';

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
    backgroundColor: '#F9F9F9',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 50,
    backgroundColor: '#F9F9F9',
    paddingBottom: 120,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
  },
  textHeaderContainer: {
    flex: 1,
    marginRight: 14,
  },
  textGreeting: {
    fontSize: 24,
    color: '#020202',
  },
  textSub: {
    fontSize: 16,
    color: '#8D92A3',
    marginTop: 6,
    width: 900,
  },
  imageAvatar: {
    width: 65,
    height: 65,
  },
  balanceCardContainer: {
    borderRadius: 16,
    padding: 24,
    marginTop: 30,
  },
  textCardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#020202',
  },
  textTotalBalance: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 14,
  },
  lineDivider: {
    borderBottomWidth: 1.2,
    borderBottomColor: '#E0E0E0',
    marginVertical: 10,
  },
  balanceRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  textLabel: {
    fontSize: 16,
    color: '#020202',
  },
  textAmount: {
    fontSize: 16,
    color: '#020202',
  },
  transactionContainer: {
    borderRadius: 16,
    padding: 24,
    marginTop: 30,
  },
  textTransactionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#020202',
  },
});
