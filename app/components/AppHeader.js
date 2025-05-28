import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function AppHeader(props) {
  const navigation = props.navigation || useNavigation();

  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Feather name="menu" size={26} color="#333" />
          </TouchableOpacity>

          <View style={styles.rightIcons}>
            <TouchableOpacity style={styles.iconButton} onPress={() => alert('Chat pressed!')}>
              <Ionicons name="chatbubble-outline" size={24} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton} onPress={() => alert('Notifications pressed!')}>
              <Ionicons name="notifications-outline" size={24} color="#333" />
              <View style={styles.redDot} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton} onPress={() => alert('Profile pressed!')}>
              <MaterialIcons name="person" size={26} color="#6bac7e" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  inner: {
    width: '100%',
    maxWidth: 1140,
    alignSelf: 'center',
  },
  topBar: {
    paddingTop: Constants.statusBarHeight,
    height: 70 + Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: screenWidth > 768 ? 40 : 20,
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  menuButton: {
    padding: 8,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 22,
    position: 'relative',
  },
  redDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
});
