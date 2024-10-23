'use client'
import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/themeprovider'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from '@/components/ui/toaster'
import MainLayout from '@/components/layout/mainlayout'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body         
      className={cn(
          "min-h-screen flex flex-col bg-white font-sans antialiased",
          fontSans.variable
        )}>
          <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
        <SessionProvider>
        <MainLayout>
        {children}
        </MainLayout>
        </SessionProvider>
        <Toaster />
</ThemeProvider>
      </body>
    </html>
  )
}
