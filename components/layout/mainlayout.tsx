'use client';

import React from 'react';
import { Metadata } from 'next';
import Sidebar from './sidebar';
import Header from './header';
import { ThemeProvider } from '../themeprovider';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Energy Dashboard',
  description: 'Monitor and manage your energy consumption',
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background">
  <Sidebar />
  <div className="flex-1 flex flex-col md:ml-64">
    <Header />
    <main className="flex-1 overflow-x-hidden overflow-y-auto">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  </div>
</div>
  );
};

export default MainLayout;