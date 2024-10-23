"use client"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Cpu, DollarSign, Zap } from 'lucide-react';
const EnergyOverview = () => {

  // const [energyData, setEnergyData] = React.useState([]);

  // React.useEffect(() => {
  //   const fetchEnergyData = async () => {
  //     try {
  //       const data = await fetch('/api/energy-data').then((res) => res.json());
  //       setEnergyData(data);
  //     } catch (error) {
  //       console.error('Error fetching energy data:', error);
  //     }
  //   };

  //   fetchEnergyData();
  // }, []);
  // Sample data - replace with actual data from your backend
  const energyData = [
    { name: '00:00', consumption: 240, generation: 0 },
    { name: '04:00', consumption: 139, generation: 0 },
    { name: '08:00', consumption: 980, generation: 430 },
    { name: '12:00', consumption: 390, generation: 752 },
    { name: '16:00', consumption: 480, generation: 501 },
    { name: '20:00', consumption: 380, generation: 90 },
  ];


  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Energy Management</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Energy Consumption vs. Generation</CardTitle>
        </CardHeader>
        <CardContent>
            
          <ResponsiveContainer width="100%" height={300}>
            <LineChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="consumption" stroke="#ff9800" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="generation" stroke="#4caf50" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Consumption
            </CardTitle>
            <Zap className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,609 kWh</div>
            <p className="text-xs text-muted-foreground">
              +2% from yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Peak Demand
            </CardTitle>
            <Battery className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,204 kW</div>
            <p className="text-xs text-muted-foreground">
              -5% from yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Energy Efficiency
            </CardTitle>
            <Cpu className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">
              +1% from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Estimated Cost
            </CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$521.80</div>
            <p className="text-xs text-muted-foreground">
              +3% from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnergyOverview;