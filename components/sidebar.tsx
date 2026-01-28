'use client'

import React from "react"

import { ChevronLeft, Home, TestTube, Zap, Grid, Users, Code, Settings, Bell, ChevronRight } from 'lucide-react'

interface SidebarProps {
  isCollapsed?: boolean
  onToggle?: (collapsed: boolean) => void
}

export function Sidebar({ isCollapsed = false, onToggle }: SidebarProps) {
  return (
    <aside className={`bg-sidebar border-r border-sidebar-border min-h-screen flex flex-col transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-48'
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-sidebar-foreground rounded flex items-center justify-center">
              <span className="text-xs font-bold text-sidebar">◆</span>
            </div>
            <span className="font-bold text-sidebar-foreground">Revyl</span>
          </div>
        )}
        <button onClick={() => onToggle?.(!isCollapsed)} className="p-1 hover:bg-sidebar-accent rounded text-sidebar-foreground">
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-8">
        {/* PixelUp Labs Section */}
        <div>
          <div className={`flex items-center gap-2 px-3 py-2 rounded bg-sidebar-accent mb-3 ${isCollapsed ? 'justify-center' : ''}`}>
            <div className="w-5 h-5 bg-sidebar-primary rounded flex items-center justify-center text-xs flex-shrink-0">P</div>
            {!isCollapsed && (
              <div className="flex-1">
                <div className="text-sm font-semibold text-sidebar-foreground">PixelUp Labs</div>
                <div className="text-xs text-sidebar-foreground opacity-60">E2E Testing</div>
              </div>
            )}
            {!isCollapsed && <span className="text-xs text-sidebar-foreground opacity-60">↕</span>}
          </div>

          {/* Main Menu */}
          <nav className="space-y-1">
            <NavItem icon={Home} label="Dashboard" active={false} collapsed={isCollapsed} />
            <NavItem icon={TestTube} label="Test Suite" active={true} collapsed={isCollapsed} />
            <NavItem icon={Zap} label="Workflow" active={false} collapsed={isCollapsed} />
            <NavItem icon={Grid} label="Builds" active={false} collapsed={isCollapsed} />
          </nav>
        </div>

        {/* Organisation Section */}
        {!isCollapsed && (
          <div>
            <div className="px-3 py-2 text-xs font-semibold text-sidebar-foreground opacity-60 mb-2">
              ORGANISATION
            </div>
            <nav className="space-y-1">
              <NavItem icon={Users} label="Users" active={false} collapsed={isCollapsed} />
              <NavItem icon={Code} label="API" active={false} collapsed={isCollapsed} />
              <NavItem icon={Settings} label="Settings" active={false} collapsed={isCollapsed} />
            </nav>
          </div>
        )}

        {/* What's new */}
        {!isCollapsed && (
          <div>
            <div className="px-3 py-2 bg-sidebar-accent rounded-lg border border-sidebar-border">
              <div className="flex items-center gap-2 mb-1">
                <Bell size={14} className="text-sidebar-foreground" />
                <div className="text-xs font-semibold text-sidebar-foreground">What's new</div>
              </div>
              <div className="text-xs text-sidebar-foreground opacity-60">Mobile tests get an update</div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-sidebar-border">
        <div className="text-xs text-sidebar-foreground opacity-60 truncate">dakh@pixeluplabs.com</div>
      </div>
    </aside>
  )
}

interface NavItemProps {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
  active?: boolean
  collapsed?: boolean
}

function NavItem({ icon: Icon, label, active, collapsed }: NavItemProps) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
        collapsed ? 'justify-center' : ''
      } ${
        active
          ? 'bg-sidebar-accent text-sidebar-foreground'
          : 'text-sidebar-foreground opacity-70 hover:bg-sidebar-accent/50'
      }`}
      title={collapsed ? label : undefined}
    >
      <Icon size={16} />
      {!collapsed && <span className="text-sm">{label}</span>}
    </div>
  )
}
