// pages/dashboard.js
import React from 'react';
import MainLayout from '@/components/layout/mainlayout';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import AuthSessionProvider from './auth/auth-session-provider';



const DashboardPage = () => {
  return (
<AuthSessionProvider>
    <MainLayout>
      <DashboardOverview/>
    </MainLayout>
</AuthSessionProvider>
  );
};

export default DashboardPage;