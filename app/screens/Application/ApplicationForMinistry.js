import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import AppHeader from '../../components/AppHeader'; 
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function ApplicationForMinistry({ navigation }) {
  const [progress] = useState(0.5); 
  const [appDate, setAppDate] = useState(null);
  const [showAppDatePicker, setShowAppDatePicker] = useState(false);
  const [birthDate, setBirthDate] = useState(null);
  const [showBirthDatePicker, setShowBirthDatePicker] = useState(false);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [gender, setGender] = useState('');
  const [street, setStreet] = useState('');
  const [town, setTown] = useState('');
  const [province, setProvince] = useState('');

  const onBack = () => {
    if (navigation?.canGoBack()) navigation.goBack();
    else navigation.navigate('Services');
  };

  const onNext = () => {
    navigation.navigate('ApplicationMinistryContacts', {
      appDate,
      birthDate,
      lastName,
      firstName,
      middleName,
      gender,
      street,
      town,
      province,
    });
  };

  return (
    <View style={styles.screen}>
      <AppHeader navigation={navigation} />
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.formWrapper}>
          <Text style={styles.title}>APPLICATION FOR MINISTRY</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
          </View>

          <TouchableOpacity onPress={() => setShowAppDatePicker(true)} style={styles.input}>
            <View style={styles.inputContent}>
              <MaterialIcons name="calendar-today" size={20} color="#555" style={styles.icon} />
              <Text style={[styles.inputText, !appDate && styles.placeholderText]}>
                {appDate ? appDate.toLocaleDateString() : 'Application Date'}
              </Text>
            </View>
          </TouchableOpacity>
          {showAppDatePicker && (
            <DateTimePicker
              value={appDate || new Date()}
              mode="date"
              display="default"
              onChange={(event, date) => {
                setShowAppDatePicker(Platform.OS === 'ios');
                if (date) setAppDate(date);
              }}
            />
          )}

          <View style={styles.divider} />
          <Text style={styles.sectionLabel}>Personal Information</Text>

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#999"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#999"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Middle Name"
            placeholderTextColor="#999"
            value={middleName}
            onChangeText={setMiddleName}
          />

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => setShowBirthDatePicker(true)}
              style={[styles.halfInput, { marginRight: 10 }]}
            >
              <View style={styles.inputContent}>
                <MaterialIcons name="calendar-today" size={20} color="#555" style={styles.icon} />
                <Text style={[styles.inputText, !birthDate && styles.placeholderText]}>
                  {birthDate ? birthDate.toLocaleDateString() : 'Birth Date'}
                </Text>
              </View>
            </TouchableOpacity>
            {showBirthDatePicker && (
              <DateTimePicker
                value={birthDate || new Date()}
                mode="date"
                display="default"
                onChange={(event, date) => {
                  setShowBirthDatePicker(Platform.OS === 'ios');
                  if (date) setBirthDate(date);
                }}
              />
            )}

            <View style={styles.halfInput}>
              <Picker
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
          </View>

          <View style={styles.divider} />
          <Text style={styles.sectionLabel}>Current Address</Text>

          {[street, town, province].map((val, i) => (
            <View key={i} style={styles.input}>
              <Picker
                selectedValue={val}
                onValueChange={i === 0 ? setStreet : i === 1 ? setTown : setProvince}
                style={styles.picker}
              >
                <Picker.Item label={i === 0 ? 'Street/Barangay' : i === 1 ? 'Town/City' : 'Province'} value="" />
                <Picker.Item label={`Example ${i === 0 ? 'Street' : i === 1 ? 'Town' : 'Province'} 1`} value={`Example ${i === 0 ? 'Street' : i === 1 ? 'Town' : 'Province'} 1`} />
                <Picker.Item label={`Example ${i === 0 ? 'Barangay' : i === 1 ? 'City' : 'Province'} 2`} value={`Example ${i === 0 ? 'Barangay' : i === 1 ? 'City' : 'Province'} 2`} />
              </Picker>
            </View>
          ))}

          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.button} onPress={onBack}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: {
    alignItems: 'center',
    paddingBottom: 60,
  },
  formWrapper: {
    width: '100%',
    maxWidth: 800,
    paddingHorizontal: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 6,
    backgroundColor: '#7bb661',
  },
  input: {
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    paddingHorizontal: 12,
    fontSize: 14,
    marginBottom: 14,
    justifyContent: 'center',
  },
  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 14,
    color: '#000',
  },
  placeholderText: {
    color: '#999',
  },
  icon: {
    marginRight: 8,
  },
  sectionLabel: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 8,
    marginTop: 20,
  },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  halfInput: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 12,
    justifyContent: 'center',
    height: 45,
  },
  picker: {
    color: '#000',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#7bb661',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
