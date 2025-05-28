import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../../components/AppHeader';
import { useNavigation } from '@react-navigation/native';

export default function Services() {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <AppHeader navigation={navigation} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.stack}>
          {/* Mass Attendance */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('MassAttendance')}
            activeOpacity={0.7}
          >
            <Text style={styles.cardTitle}>Mass and Events Schedule</Text>
            <Icon name="calendar-clock" size={48} color="#000" style={styles.icon} />
            <Text style={styles.cardDescription}>
              Join us for Sunday worship and fun church events.
            </Text>
          </TouchableOpacity>

          {/* Ministry Application */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ApplicationForMinistry')}
            activeOpacity={0.7}
          >
            <Text style={styles.cardTitle}>Apply for Ministry</Text>
            <Icon name="hands-pray" size={48} color="#000" style={styles.icon} />
            <Text style={styles.cardDescription}>
              Ready to serve? Answer your calling through our ministry program.
            </Text>
          </TouchableOpacity>

          {/* Baptism */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Baptismal</Text>
            <Icon name="water" size={48} color="#000" style={styles.icon} />
            <Text style={styles.cardDescription}>
              Take the plunge! Sign up for baptism and start a new chapter in your faith.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  stack: {
    width: '100%',
    maxWidth: 500, 
  },
  card: {
    backgroundColor: '#cdeacb',
    borderRadius: 16,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 4,
    ...Platform.select({
      web: {
        boxShadow: '0 5px 10px rgba(0,0,0,0.05)',
      },
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
      },
      android: {
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
      },
    }),
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
  icon: {
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#444',
    paddingHorizontal: 10,
    lineHeight: 20,
  },
});
