import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const screenWidth = Dimensions.get('window').width;

export default function MassAttendance({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const onAttendPress = () => {
    alert(`✅ Attendance confirmed for ${selectedDate.toDateString()}`);
    setSelectedDate(null);
  };

  const onCancelPress = () => {
    setSelectedDate(null);
  };

  const onBack = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.screen}>
      <AppHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.centered}>
          <View style={styles.calendarCard}>
            <Text style={styles.monthText}>Mass Attendance</Text>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              calendarType="gregory"
              tileClassName={({ date }) =>
                selectedDate &&
                date.toDateString() === selectedDate.toDateString()
                  ? 'selected-day'
                  : null
              }
            />
          </View>

          {selectedDate === null ? (
            <>
              <View style={styles.scheduleCard}>
                <Text style={styles.scheduleTitle}>Mass Schedule (Sunday)</Text>
                <Text style={styles.scheduleTime}>09:00 am - 10:00 am</Text>
              </View>

              <TouchableOpacity style={styles.backButton} onPress={onBack}>
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View style={styles.attendCard}>
                <Text style={styles.attendTitle}>Attend Mass</Text>
                <Text style={styles.massDay}>{selectedDate.toDateString()}</Text>
                <Text style={styles.massTime}>09:00 am - 10:00 am</Text>
                <TouchableOpacity style={styles.attendButton} onPress={onAttendPress}>
                  <Text style={styles.attendButtonText}>Attend</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.cancelButton} onPress={onCancelPress}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </>
          )}
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
  container: {
    paddingTop: 30,
    paddingBottom: 60,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  centered: {
    width: '100%',
    maxWidth: 600,
  },
  calendarCard: {
    backgroundColor: '#def1d7',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    ...Platform.select({
      web: {
        alignItems: 'center',
      },
    }),
  },
  monthText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  scheduleCard: {
    backgroundColor: '#e7f5db',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  scheduleTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 6,
    color: '#000',
  },
  scheduleTime: {
    fontSize: 14,
    color: '#000',
  },
  backButton: {
    backgroundColor: '#7bb661',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 24,
    alignSelf: 'flex-start',
    marginBottom: 30,
    elevation: 3,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  attendCard: {
    backgroundColor: '#e7f5db',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  attendTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: '#000',
  },
  massDay: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 6,
    color: '#000',
  },
  massTime: {
    fontSize: 14,
    color: '#000',
    marginBottom: 14,
  },
  attendButton: {
    backgroundColor: '#7bb661',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 16,
    alignSelf: 'flex-start',
    elevation: 3,
  },
  attendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#7bb661',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 24,
    alignSelf: 'flex-start',
    marginBottom: 30,
    elevation: 3,
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
