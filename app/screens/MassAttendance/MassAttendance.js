import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import AppHeader from '../../components/AppHeader';

export default function MassAttendance({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date().toISOString().split('T')[0];

  const massSchedules = {
    [today]: { title: 'Special Mass (Today)', time: '8:00 am - 9:00 am' },
    '2025-06-02': { title: 'Morning Mass', time: '09:00 am - 10:00 am' },
    '2025-06-08': { title: 'Church Event', time: '3:00 pm - 5:00 pm' },
  };

  const markedDates = {};
  Object.keys(massSchedules).forEach((date) => {
    markedDates[date] = {
      selected: true,
      selectedColor: '#2E7D32',
      selectedTextColor: '#ffffff',
    };
  });

  if (selectedDate && massSchedules[selectedDate]) {
    markedDates[selectedDate] = {
      ...markedDates[selectedDate],
      selected: true,
      selectedColor: '#1B5E20', // darker when tapped
      selectedTextColor: '#ffffff',
    };
  }

  const onAttendPress = () => {
    alert(`✅ Attendance confirmed for ${massSchedules[selectedDate].title} on ${selectedDate}`);
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
            <Text style={styles.monthText}>Mass and Events Schedule</Text>
            <Calendar
              onDayPress={(day) => {
                const clickedDate = day.dateString;
                if (massSchedules[clickedDate]) {
                  setSelectedDate(clickedDate);
                } else {
                  alert('📭 No schedule for this date.');
                }
              }}
              markedDates={markedDates}
              theme={{
                calendarBackground: '#ffffff',
                todayTextColor: '#2E7D32',
                arrowColor: '#2E7D32',
                textDayFontWeight: 'bold',
                textMonthFontWeight: 'bold',
                textDayFontSize: 18,
                textMonthFontSize: 20,
                textDayHeaderFontSize: 15,
              }}
              style={{
                borderRadius: 16,
                elevation: 3,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 4,
                borderWidth: 2,
                borderColor: '#2E7D32',
              }}
            />
          </View>

          {selectedDate && massSchedules[selectedDate] ? (
            <View style={styles.attendCard}>
              <Text style={styles.attendTitle}>{massSchedules[selectedDate].title}</Text>
              <Text style={styles.massDay}>{selectedDate}</Text>
              <Text style={styles.massTime}>{massSchedules[selectedDate].time}</Text>

              <TouchableOpacity style={styles.attendButton} onPress={onAttendPress}>
                <Text style={styles.attendButtonText}>Attend</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelButton} onPress={onCancelPress}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.scheduleCard}>
              <Text style={styles.scheduleTitle}>
                Tap on a <Text style={{ color: '#2E7D32', fontWeight: 'bold' }}>highlighted</Text> date to view the schedule
              </Text>
            </View>
          )}

          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
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
  },
  monthText: {
    fontSize: 20,
    fontWeight: '700',
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
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 24,
    alignSelf: 'center',
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
    alignItems: 'center',
  },
  attendTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
    color: '#000',
  },
  massDay: {
    fontSize: 18,
    color: '#000',
    marginBottom: 6,
  },
  massTime: {
    fontSize: 16,
    color: '#000',
    marginBottom: 14,
  },
  attendButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 16,
    elevation: 3,
    marginBottom: 10,
  },
  attendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#777',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 16,
    elevation: 3,
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
