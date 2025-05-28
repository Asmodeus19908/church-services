import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import AppHeader from '../../components/AppHeader';

export default function ApplicationMinistryContacts({ navigation }) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [departments, setDepartments] = useState({
    music: false,
    food: false,
    children: false,
  });

  const toggleDepartment = (name) => {
    setDepartments((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const onPrevious = () => {
    navigation.goBack();
  };

  const onSubmit = () => {
    alert('Application submitted!');
    navigation.navigate('Services');
  };

  return (
    <View style={styles.screen}>
      <AppHeader navigation={navigation} />
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.formWrapper}>
          <Text style={styles.title}>APPLICATION FOR MINISTRY</Text>

          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBarFill, { width: '100%' }]} />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            placeholderTextColor="#999"
          />
          <TextInput
            style={[styles.input, { marginTop: 12 }]}
            placeholder="Email Address (optional)"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#999"
          />

          <View style={styles.divider} />
          <Text style={styles.sectionLabel}>Department</Text>

          {['music', 'food', 'children'].map((dep) => (
            <TouchableOpacity
              key={dep}
              style={styles.checkboxRow}
              onPress={() => toggleDepartment(dep)}
            >
              <View style={[styles.checkbox, departments[dep] && styles.checkboxChecked]} />
              <Text style={styles.checkboxLabel}>
                {dep === 'music'
                  ? 'Music Team'
                  : dep === 'food'
                  ? 'Food Team'
                  : 'Children Ministry'}
              </Text>
            </TouchableOpacity>
          ))}

          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.button} onPress={onPrevious}>
              <Text style={styles.buttonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
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
    marginBottom: 20,
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
    color: '#000',
  },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 16,
  },
  sectionLabel: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 12,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 3,
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#7bb661',
    borderColor: '#7bb661',
  },
  checkboxLabel: {
    fontSize: 14,
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
