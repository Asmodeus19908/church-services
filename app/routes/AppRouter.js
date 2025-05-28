import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginScreen from '../screens/Login/LoginScreen';
import Dashboard from '../screens/Dashboard/Dashboard';
import MassAttendance from '../screens/MassAttendance/MassAttendance';
import Services from '../screens/Services/Services';
import ApplicationForMinistry from '../screens/Application/ApplicationForMinistry';
import ApplicationMinistryContacts from '../screens/Application/ApplicationMinistryContacts';


import MainLayout from '../app/components/layout/MainLayout';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginScreen />} />

        {/* Protected Routes (with layout wrapper) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mass-attendance" element={<MassAttendance />} />
          <Route path="/application-ministry" element={<ApplicationForMinistry />} />
          <Route path="/ministry-contacts" element={<ApplicationMinistryContacts />} />
        </Route>
      </Routes>
    </Router>
  );
}
