"use client"
import React, { useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"

const SettingsPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { toast } = useToast();

  const [notifications, setNotifications] = useState(true);
  const [emailFrequency, setEmailFrequency] = useState("daily");
  const [energyThreshold, setEnergyThreshold] = useState("500");
  const [darkMode, setDarkMode] = useState(false);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/auth/signin");
    return null;
  }

  const handleSaveSettings = async () => {
    // Here you would typically send the settings to your API
    console.log("Saving settings:", { notifications, emailFrequency, energyThreshold, darkMode });
    // lets toast a succes message for now
    toast({title: "Settings saved successfully", description: "We've saved your settings", variant: "default"})
    // Implement API call here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>User Preferences</CardTitle>
          <CardDescription>Manage your account settings and set email preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Enable Notifications</Label>
            <Switch 
              id="notifications"
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email-frequency">Email Frequency</Label>
            <Select value={emailFrequency} onValueChange={setEmailFrequency}>
              <SelectTrigger id="email-frequency">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="energy-threshold">Energy Alert Threshold (kWh)</Label>
            <Input 
              id="energy-threshold" 
              type="number" 
              value={energyThreshold}
              onChange={(e) => setEnergyThreshold(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <Switch 
              id="dark-mode"
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>
        </CardContent>
      </Card>
      <div className="mt-4">
        <Button onClick={handleSaveSettings}>Save Settings</Button>
      </div>
    </div>
  );
};

export default SettingsPage;