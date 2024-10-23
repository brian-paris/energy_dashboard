'use client';
import EnergyDashboard from './cards';


export default function DashboardOverview() {
  // Chart data and options will be defined here

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8"></h1>
        {/* Dashboard cards will be placed here */}
        <EnergyDashboard/>
    </div>
  );
}
