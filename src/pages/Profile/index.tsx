import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  TabelNumber: undefined;
  // ... other routes
};

const { width } = Dimensions.get('window');

const PROFILE_IMAGE_KEY = 'PROFILE_IMAGE_URI';

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [usernameInput, setUsernameInput] = useState('');
  const [editingUsername, setEditingUsername] = useState(false);

  // Ambil foto profil dari AsyncStorage saat mount
  useEffect(() => {
    const loadProfileData = async () => {
      const uri = await AsyncStorage.getItem(PROFILE_IMAGE_KEY);
      if (uri) setProfileImage(uri);
      const storedUsername = await AsyncStorage.getItem('USERNAME');
      if (storedUsername) {
        setUsername(storedUsername);
        setEditingUsername(false);
      } else {
        setEditingUsername(true);
      }
    };
    loadProfileData();
  }, []);

  // Simpan foto profil ke AsyncStorage
  const saveProfileImage = async (uri: string) => {
    setProfileImage(uri);
    await AsyncStorage.setItem(PROFILE_IMAGE_KEY, uri);
  };

  const pickImage = () => {
    Alert.alert(
      'Pilih Foto',
      'Ambil foto dari kamera atau pilih dari gallery?',
      [
        {
          text: 'Kamera',
          onPress: () => {
            launchCamera({ mediaType: 'photo', quality: 0.7 }, (response) => {
              if (response.didCancel) return;
              if (response.assets && response.assets.length > 0) {
                const uri = response.assets[0].uri || '';
                if (uri) saveProfileImage(uri);
              }
            });
          },
        },
        {
          text: 'Gallery',
          onPress: () => {
            launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, (response) => {
              if (response.didCancel) return;
              if (response.assets && response.assets.length > 0) {
                const uri = response.assets[0].uri || '';
                if (uri) saveProfileImage(uri);
              }
            });
          },
        },
        { text: 'Batal', style: 'cancel' },
      ]
    );
  };

  const handleSaveUsername = async () => {
    if (!usernameInput.trim()) {
      Alert.alert('Error', 'Username tidak boleh kosong');
      return;
    }
    await AsyncStorage.setItem('USERNAME', usernameInput);
    setUsername(usernameInput);
    setEditingUsername(false);
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation && navigation.goBack()}>
        <Text style={styles.backIcon}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Your Account</Text>
      {username && !editingUsername && (
        <Text style={styles.username}>{username}</Text>
      )}
      {editingUsername && (
        <View style={styles.usernameInputContainer}>
          <TextInput
            style={styles.usernameInput}
            placeholder="Masukkan Username"
            placeholderTextColor="#A0522D"
            value={usernameInput}
            onChangeText={setUsernameInput}
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveUsername}>
            <Text style={styles.saveButtonText}>Simpan Username</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.iconWrapper} onPress={pickImage}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Text style={styles.userIcon}>{'\u{1F464}'}</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabelNumber')}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Pilih Foto dari Gallery</Text>
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
  username: {
    fontSize: 20,
    color: '#A0522D',
    fontFamily: 'Poppins-Medium',
    marginBottom: 16,
  },
  usernameInputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  usernameInput: {
    backgroundColor: '#FFF6EB',
    borderColor: '#A0522D',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#A0522D',
    fontFamily: 'Poppins-Regular',
    width: '80%',
    marginBottom: 8,
  },
  saveButton: {
    backgroundColor: '#A0522D',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  iconWrapper: {
    backgroundColor: '#000',
    borderRadius: 12,
    width: width * 0.22,
    height: width * 0.22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    overflow: 'hidden',
  },
  userIcon: {
    color: '#FFF',
    fontSize: width * 0.13,
  },
  profileImage: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: 12,
    resizeMode: 'cover',
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