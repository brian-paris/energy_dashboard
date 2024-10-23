"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

type ChartType = 'pie' | 'bar' | 'line';

interface ChartData {
  name: string;
  value: number;
}

interface ChartConfig {
  type: ChartType;
  data: ChartData[];
  dataKey: string;
  colors: string[];
  footer?: {
    title: string;
    description?: string;
  };
}

const charts: Record<string, ChartConfig> = {
  costPredicted: {
    type: 'pie',
    data: [
      { name: 'Electricity', value: 180 },
      { name: 'Gas', value: 34 },
    ],
    dataKey: "value",
    colors: ['#4ade80', '#facc15'],
    footer: {
      title: 'Total $214',
    },
  },
  changeInCost: {
    type: 'bar',
    data: [
      { name: 'Sep', value: 203 },
      { name: 'Oct', value: 214 },
    ],
    dataKey: "value",
    colors: ['#4ade80'],
    footer: {
      title: '5.42% Increase in Cost',
    },
  },
  usageEstimate: {
    type: 'line',
    data: [
      { name: 'Week 1', value: 100 },
      { name: 'Week 2', value: 155 },
      { name: 'Week 3', value: 300 },
      { name: 'Week 4', value: 460 },
    ],
    dataKey: "value",
    colors: ['#f472b6'],
    footer: {
      title: 'Till Now: 155.8 kWh',
      description: 'Predicted: 460 kWh',
    },
  },
  activeAppliances: {
    type: 'bar',
    data: [
      { name: 'Heating & AC', value: 1.4 },
      { name: 'EV Charge', value: 0.9 },
      { name: 'Plug Loads', value: 0.8 },
      { name: 'Refrigeration', value: 0.7 },
      { name: 'Lighting', value: 0.4 },
      { name: 'Others', value: 0.2 },
    ],
    dataKey: "value",
    colors: ['#e879f9', '#d946ef', '#c026d3', '#a21caf', '#86198f', '#701a75'],
    footer: {
      title: 'Top 3 appliances make up 70.3% of the net usage.',
    },
  },
  energyIntensity: {
    type: 'pie',
    data: [
      { name: 'Energy Intensity', value: 47 },
      { name: 'Remaining', value: 53 },
    ],
    dataKey: "value",
    colors: ['#4ade80', '#e5e7eb'],
    footer: {
      title: '47 kWh/Sqft',
    },
  },
};

interface ChartCardProps {
  title: string;
  config: ChartConfig;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, config }) => {
  const renderChart = () => {
    switch (config.type) {
      case 'pie':
        return (
          <PieChart width={300} height={200}>
            <Pie data={config.data} dataKey={config.dataKey} cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
              {config.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={config.colors[index % config.colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );
      case 'bar':
        return (
          <BarChart width={300} height={200} data={config.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey={config.dataKey} fill={config.colors[0]} />
          </BarChart>
        );
      case 'line':
        return (
          <LineChart width={300} height={200} data={config.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={config.dataKey} stroke={config.colors[0]} />
          </LineChart>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          {renderChart()}
        </ResponsiveContainer>
        {config.footer && (
          <div className="text-center mt-4">
            <p className="text-2xl font-bold">{config.footer.title}</p>
            {config.footer.description && (
              <p className="text-sm">{config.footer.description}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export const EnergyDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(charts).map(([key, config]) => (
        <ChartCard key={key} title={key} config={config} />
      ))}
    </div>
  );
};

export default EnergyDashboard;