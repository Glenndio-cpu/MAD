import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.wrapper}>
      {/* Foto Profil */}
      <View style={styles.profileContainer}>
        <Image
          source={require('./assets/123fb.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Glenndio Umboh</Text>
        <Text style={styles.job}>Mobile Developer</Text>
      </View>

      {/* Kontak */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kontak</Text>
        <Text style={styles.sectionText}>📧 Glenn123@gmail.com</Text>
        <Text style={styles.sectionText}>📍 Manado, Indonesia</Text>
        <Text style={styles.sectionText}>📞 +62 812-3456-7890</Text>
      </View>

      {/* Pendidikan */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pendidikan</Text>
        <Text style={styles.sectionText}>
          🎓 S1 Teknik Informatika - Universitas Klabat
        </Text>
      </View>

      {/* Skill */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skill</Text>
        <Text style={styles.sectionText}>- React Native</Text>
        <Text style={styles.sectionText}>- JavaScript</Text>
        <Text style={styles.sectionText}>- Firebase</Text>
      </View>

      {/* Hobi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hobi</Text>
        <Text style={styles.sectionText}>📷 Fotografi</Text>
        <Text style={styles.sectionText}>🎮 Gaming</Text>
        <Text style={styles.sectionText}>📚 Membaca Buku</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#2c2c2c',
    padding: 20,
    borderRadius: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  job: {
    fontSize: 16,
    color: '#aaa',
  },
  section: {
    backgroundColor: '#2c2c2c',
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#f5c518',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
});
