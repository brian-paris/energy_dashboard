'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BarChart2, BatteryCharging, CloudOff, Home, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Cost', href: '/energy', icon: BarChart2 },
    { name: 'Appliances', href: '/', icon: BatteryCharging },
    { name: 'Emissions', href: '/settings', icon: CloudOff },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const NavItem = ({ item }: { item: any }) => (
    <Link href={item.href} passHref>
      <Button
        variant={router.prefetch === item.href ? "secondary" : "ghost"}
        className="w-full justify-start"
      >
        <item.icon className="mr-2 h-4 w-4" />
        {item.name}
      </Button>
    </Link>
  );

  const SidebarContent = () => (
    <ScrollArea className="h-full py-6 pl-4 pr-6">
      <h2 className="mb-4 px-2 text-lg font-semibold tracking-tight">
        Energy Management
      </h2>
      <div className="space-y-1">
        {navigation.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>
    </ScrollArea>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Home className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-background">
        <div className="w-64 flex-1 flex flex-col min-h-0 border-r">
          <SidebarContent />
        </div>
      </div>
    </>
  );
};

export default Sidebar;