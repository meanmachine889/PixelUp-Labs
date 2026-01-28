'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-background text-foreground dark">
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={setSidebarCollapsed} />
      {children}
    </div>
  )
}
