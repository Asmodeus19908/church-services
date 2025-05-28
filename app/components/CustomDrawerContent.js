import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function CustomDrawerContent({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Feather name="user" size={48} color="#fff" />
        </View>
        <Text style={styles.name}>Carlo Balanza</Text>
        <Text style={styles.member}>MEMBER</Text>
      </View>

      {/* Menu Items */}
      <ScrollView style={styles.menuItems} contentContainerStyle={{ paddingBottom: 20 }}>
        <MenuItem
          icon={<MaterialCommunityIcons name="home-outline" size={20} color="#333" />}
          label="Home"
          onPress={() => navigation.navigate('Dashboard')}
        />
        <MenuItem
          icon={<Feather name="folder" size={20} color="#333" />}
          label="Services"
          onPress={() => navigation.navigate('Services')}
        />
        <MenuItem
          icon={<Feather name="gift" size={20} color="#333" />}
          label="Donate"
          onPress={() => alert('Donate pressed')}
        />
        <MenuItem
          icon={<MaterialCommunityIcons name="account-circle-outline" size={20} color="#333" />}
          label="Profile"
          onPress={() => alert('Profile pressed')}
        />
      </ScrollView>

      {/* Logout */}
      <View style={styles.logoutButtonContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.replace('Login')}
        >
          <Feather name="log-out" size={20} color="#fff" />
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function MenuItem({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      {icon}
      <Text style={styles.menuItemText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8f1c8',
  },
  profileSection: {
    backgroundColor: '#6bac7e',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#5e9e67',
    borderRadius: 40,
    padding: 10,
    marginBottom: 12,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  member: {
    color: '#d2e8d2',
    fontSize: 12,
  },
  menuItems: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuItemText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  logoutButtonContainer: {
    padding: 20,
    borderTopWidth: Platform.OS === 'web' ? 1 : 0,
    borderColor: '#ccc',
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#6bac7e',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
});
