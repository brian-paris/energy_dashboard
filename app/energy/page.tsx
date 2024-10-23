// pages/energy.js
import EnergyOverview from '@/components/dashboard/energyoverview';
import EnergyConsumptionChart from '@/components/layout/energyconsumption';
import MainLayout from '@/components/layout/mainlayout';
import React from 'react';


const EnergyPage = () => {
  return (
    <>
      <EnergyOverview />
      <EnergyConsumptionChart></EnergyConsumptionChart>
      </>
  );
};

export default EnergyPage;