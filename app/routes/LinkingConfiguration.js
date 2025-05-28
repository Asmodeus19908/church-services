import * as Linking from 'expo-linking';

const config = {
  screens: {
    Login: 'login',
    Dashboard: 'dashboard',
    Services: 'services',
    MassAttendance: 'mass-attendance',
    ApplicationForMinistry: 'application-ministry',
    ApplicationMinistryContacts: 'ministry-contacts',
  },
};

const LinkingConfiguration = {
  prefixes: [
    Linking.createURL('/'),             
    'pamukidchurchapp://',              
  ],
  config,
};

export default LinkingConfiguration;
