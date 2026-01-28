'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar'
import { Bell, FileText, HelpCircle } from 'lucide-react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-background text-foreground dark">
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={setSidebarCollapsed} />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-background border-b-2 border-sidebar-border h-18 sticky top-0 z-10 py-4 flex items-center justify-end px-6 gap-2">
          <button className="p-2 rounded-xs border-2 border-zinc-700 hover:bg-secondary transition-colors">
            <Bell size={20} className="text-zinc-400" />
          </button>
          <button className="p-2 rounded-xs border-2 border-zinc-700 hover:bg-secondary transition-colors">
            <FileText size={20} className="text-zinc-400" />
          </button>
          <button className="p-2 rounded-xs border-2 border-zinc-700 hover:bg-secondary transition-colors">
            <HelpCircle size={20} className="text-zinc-400" />
          </button>
        </div>
        {/* Page Content */}
        {children}
      </div>
    </div>
  )
}
