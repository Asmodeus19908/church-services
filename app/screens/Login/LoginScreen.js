import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  Platform,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const screenWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
  const [role, setRole] = useState('Member');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Member', value: 'Member' },
    { label: 'Admin', value: 'Admin' },
  ]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      alert('Please enter username and password');
      return;
    }
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.wrapper}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>PAMUKID PRESBYTERIAN CHURCH</Text>
        <Text style={styles.loginText}>LOGIN</Text>

        <DropDownPicker
          open={open}
          value={role}
          items={items}
          setOpen={setOpen}
          setValue={setRole}
          setItems={setItems}
          placeholder="Select Role"
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          containerStyle={styles.dropdownContainer}
          zIndex={1000}
        />

        <TextInput
          placeholder="Username"
          placeholderTextColor="#999"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            style={styles.inputPassword}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.showText}>{showPassword ? 'Hide' : 'Show'}</Text>
          </Pressable>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.rememberMe}
            onPress={() => setRemember(!remember)}
            activeOpacity={0.7}
          >
            <View style={[styles.checkbox, remember && styles.checkedBox]} />
            <Text style={styles.rememberText}>Remember me?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Forgot your password?')}>
            <Text style={styles.forgotText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.regularText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => alert('Register pressed!')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  wrapper: {
    width: '90%',
    maxWidth: 400,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  loginText: {
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 20,
  },
  dropdownContainer: {
    width: '100%',
    marginBottom: 15,
  },
  dropdown: {
    borderRadius: 5,
    height: 40,
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
  },
  dropdownText: {
    color: '#000',
    fontSize: 14,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    color: '#000',
    backgroundColor: '#f5f5f5',
    marginBottom: 12,
    width: '100%',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 12,
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
  },
  inputPassword: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  showText: {
    color: 'green',
    fontWeight: '600',
    paddingHorizontal: 10,
    fontSize: 14,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 6,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  checkedBox: {
    backgroundColor: '#6bac7e',
    borderColor: '#6bac7e',
  },
  rememberText: {
    color: '#888',
    fontWeight: '400',
    fontSize: 14,
  },
  forgotText: {
    color: '#aaa',
    fontWeight: '500',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#6bac7e',
    borderRadius: 20,
    height: 44,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: 'row',
  },
  regularText: {
    color: '#000',
    fontSize: 14,
  },
  registerText: {
    color: '#6bac7e',
    fontWeight: '600',
    fontSize: 14,
  },
});
