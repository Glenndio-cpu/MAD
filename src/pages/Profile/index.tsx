import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  TabelNumber: undefined;
  // ... other routes
};

const { width } = Dimensions.get('window');

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation && navigation.goBack()}>
        <Text style={styles.backIcon}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Your Account</Text>
      <View style={styles.iconWrapper}>
        <Text style={styles.userIcon}>{'\u{1F464}'}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabelNumber')}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

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
    fontSize: 32,
    color: '#A0522D',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 32,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    lineHeight: 40,
  },
  iconWrapper: {
    backgroundColor: '#000',
    borderRadius: 12,
    width: width * 0.22,
    height: width * 0.22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  userIcon: {
    color: '#FFF',
    fontSize: width * 0.13,
  },
  button: {
    backgroundColor: '#A0522D',
    borderRadius: 8,
    paddingVertical: 12,
    width: width * 0.6,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
}); 