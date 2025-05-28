import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import AppHeader from '../../components/AppHeader';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function Dashboard({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <AppHeader navigation={navigation} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.wrapper}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText}>Carlo, welcome to</Text>
          <Text style={styles.mainTitle}>
            Pamukid{'\n'}Presbyterian Church
          </Text>
          <Text style={styles.tagline}>
            Transforming Lives, Restoring Hope,{'\n'}You were made for more!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 40,
  },
  wrapper: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: screenWidth > 768 ? 80 : 40,
  },
  logo: {
    width: screenWidth > 768 ? 200 : 140,
    height: screenWidth > 768 ? 200 : 140,
    marginBottom: 30,
  },
  welcomeText: {
    color: '#8c8c8c',
    fontSize: 16,
    marginBottom: 10,
  },
  mainTitle: {
    color: '#000',
    fontSize: screenWidth > 768 ? 30 : 24,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: 16,
  },
  tagline: {
    color: '#8c8c8c',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
});
