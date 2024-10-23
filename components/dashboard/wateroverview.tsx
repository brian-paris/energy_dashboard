"use client"
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"
import { Battery, Cpu, DollarSign, Droplet, Filter, Thermometer, Waves, Zap } from 'lucide-react';

const WaterOverview = () => {
  // Sample data - replace with actual data from your backend
  const waterData = [
    { name: 'Mon', consumption: 4000, treatment: 3000 },
    { name: 'Tue', consumption: 3000, treatment: 2800 },
    { name: 'Wed', consumption: 2000, treatment: 1800 },
    { name: 'Thu', consumption: 2780, treatment: 2500 },
    { name: 'Fri', consumption: 1890, treatment: 1700 },
    { name: 'Sat', consumption: 2390, treatment: 2200 },
    { name: 'Sun', consumption: 3490, treatment: 3200 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Water Management</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Water Consumption vs. Treatment</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={waterData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="consumption" fill="#3b82f6" />
              <Bar dataKey="treatment" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Consumption
            </CardTitle>
            <Droplet className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">19,550 m³</div>
            <p className="text-xs text-muted-foreground">
              +5% from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Water Pressure
            </CardTitle>
            <Waves className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2 bar</div>
            <p className="text-xs text-muted-foreground">
              Optimal range
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Water Temperature
            </CardTitle>
            <Thermometer className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.5°C</div>
            <p className="text-xs text-muted-foreground">
              -0.5°C from yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Treatment Efficiency
            </CardTitle>
            <Filter className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">
              +2% from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WaterOverview;