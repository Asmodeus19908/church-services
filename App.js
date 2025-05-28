import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './app/screens/Dashboard/Dashboard';
import LoginScreen from './app/screens/Login/LoginScreen';
import Services from './app/screens/Services/Services';
import MassAttendance from './app/screens/MassAttendance/MassAttendance';
import ApplicationForMinistry from './app/screens/Application/ApplicationForMinistry';
import ApplicationMinistryContacts from './app/screens/Application/ApplicationMinistryContacts';

import CustomDrawerContent from './app/components/CustomDrawerContent';


import LinkingConfiguration from './app/routes/LinkingConfiguration';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerScreens() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="MassAttendance" component={MassAttendance} />
      <Drawer.Screen name="ApplicationForMinistry" component={ApplicationForMinistry} />
    </Drawer.Navigator>
  );
}

function MainAppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DrawerScreens" component={DrawerScreens} />
      <Stack.Screen name="ApplicationMinistryContacts" component={ApplicationMinistryContacts} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainApp" component={MainAppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
