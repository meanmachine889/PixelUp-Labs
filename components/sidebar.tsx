'use client'

import React from "react"
import Link from "next/link"
import { Home, Users, Settings, ChevronsLeft, ChevronsUpDown, FlaskConical, GitPullRequest, Box, Flame, KeyRound } from 'lucide-react'

interface SidebarProps {
  isCollapsed?: boolean
  onToggle?: (collapsed: boolean) => void
}

export function Sidebar({ isCollapsed = false, onToggle }: SidebarProps) {
  return (
    <aside className={`border-r-2 border-sidebar-border bg-background min-h-screen flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-65'}`}>
      <div className={`px-3 py-2 border-b-2 border-sidebar-border flex items-center h-18 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <svg width="100" height="37" viewBox="0 0 86 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.62824 14L17.3719 21.7126L14.5577 24.5155L4 14L14.5577 3.48454L17.3719 6.28739L9.62824 14Z" fill="white" />
              <path d="M30.7476 14L20.1898 24.5155L17.3757 21.7126L25.1193 14L17.3719 6.28739L20.186 3.48454L30.7437 14H30.7476Z" fill="white" />
              <path d="M12.4462 14L17.3719 9.09406L22.2975 14L17.3719 18.9059L12.4462 14Z" fill="white" />
              <path d="M36.5475 20.0925V7.70336H42.7209C44.0108 7.70336 45.0244 7.99907 45.7615 8.59048C46.4986 9.1819 46.8672 10.0129 46.8672 11.0836C46.8672 11.6954 46.729 12.2307 46.4525 12.6896C46.1761 13.1383 45.7666 13.485 45.224 13.7297V13.7909C45.7461 13.7909 46.1505 13.9336 46.4372 14.2191C46.7239 14.4944 46.8672 14.8972 46.8672 15.4274V20.0925H44.748V15.1827H38.682V20.0925H36.5475ZM38.682 13.3779H42.5519C43.2584 13.3779 43.801 13.2096 44.1798 12.8731C44.5688 12.5366 44.7633 12.0625 44.7633 11.4507C44.7633 10.8287 44.5688 10.3545 44.1798 10.0282C43.801 9.69174 43.2584 9.52349 42.5519 9.52349H38.682V13.3779Z" fill="white" />
              <path d="M53.4974 20.276C52.5249 20.276 51.6751 20.0823 50.9482 19.6948C50.2316 19.2971 49.6787 18.7363 49.2897 18.0123C48.9007 17.2884 48.7062 16.442 48.7062 15.4733C48.7062 14.5046 48.8955 13.6685 49.2743 12.9649C49.6634 12.2511 50.2111 11.7005 50.9175 11.313C51.6239 10.9256 52.4583 10.7318 53.4207 10.7318C54.3421 10.7318 55.1355 10.9154 55.801 11.2824C56.4664 11.6393 56.9783 12.1543 57.3366 12.8273C57.7052 13.4901 57.8895 14.2803 57.8895 15.198V15.9628H50.7025C50.7844 16.7989 51.066 17.4464 51.5471 17.9053C52.0283 18.3539 52.6733 18.5783 53.4821 18.5783C54.0759 18.5783 54.5622 18.4661 54.941 18.2418C55.3198 18.0174 55.5808 17.6809 55.7242 17.2323H57.8434C57.6182 18.1908 57.1216 18.9402 56.3538 19.4807C55.5962 20.0109 54.6441 20.276 53.4974 20.276ZM50.7639 14.5097H55.8931C55.8112 13.8367 55.5552 13.3218 55.1253 12.9649C54.6953 12.5978 54.1271 12.4143 53.4207 12.4143C52.7143 12.4143 52.1307 12.5978 51.67 12.9649C51.2093 13.3218 50.9073 13.8367 50.7639 14.5097Z" fill="white" />
              <path d="M62.2318 20.0925L58.3005 10.9154H60.4965L63.3529 17.7982H63.4143L66.2246 10.9154H68.3592L64.4278 20.0925H62.2318Z" fill="white" />
              <path d="M69.6307 23.7633V22.0962H71.7652L72.6099 20.0772L68.5557 10.9154H70.7363L73.6387 17.6453H73.7155L76.5105 10.9154H78.599L74.6677 20.0925L73.823 22.0809C73.5978 22.6111 73.3521 23.0241 73.0859 23.3198C72.83 23.6155 72.4051 23.7633 71.8113 23.7633H69.6307Z" fill="white" />
              <path d="M79.9012 20.0925V7.2445H81.9897V20.0925H79.9012Z" fill="white" />
            </svg>
          </div>
        )}
        <button onClick={() => onToggle?.(!isCollapsed)} className="p-1 items-center justify-center rounded text-sidebar-foreground">
          {isCollapsed ? (
            <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2545 12L17.9981 19.7126L15.184 22.5155L4.62622 12L15.184 1.48454L17.9981 4.28739L10.2545 12Z" fill="white" />
              <path d="M31.3738 12L20.816 22.5155L18.0019 19.7126L25.7456 12L17.9981 4.28739L20.8122 1.48454L31.37 12H31.3738Z" fill="white" />
              <path d="M13.0724 12L17.9981 7.09406L22.9238 12L17.9981 16.9059L13.0724 12Z" fill="white" />
            </svg>
          ) : (
            <ChevronsLeft className="h-8 w-8" />
          )}
        </button>
      </div>

      <div className={`flex-1 overflow-y-auto py-4 space-y-4 ${isCollapsed ? 'px-3' : 'px-3'}`}>
        <div>
          <div className={`flex items-center gap-2 py-2 rounded mb-2 ${isCollapsed ? 'justify-center' : ''}`}>
            <div className="border-2 border-gray-300">
              <img
                src="https://res.cloudinary.com/dnfv0h10u/image/upload/v1769595964/image_7_dv0mmf.svg"
                alt="PixelUp Labs Logo"
                className="w-8 h-8 shrink-0"
              />
            </div>
            {!isCollapsed && (
              <div className="flex-1">
                <div className="text-lg text-sidebar-foreground">PixelUp Labs</div>
              </div>
            )}
            {!isCollapsed && (
              <span className="text-xs text-sidebar-foreground opacity-60">
                <ChevronsUpDown />
              </span>
            )}
          </div>

          {!isCollapsed && (
            <div className="text-sm py-2 opacity-60">E2E Testing</div>
          )}
          <nav className={`border-b-2 py-2 ${isCollapsed ? 'space-y-4' : 'space-y-1'}`}>
            <NavItem icon={Home} label="Dashboard" href="/" active={false} collapsed={isCollapsed} />
            <NavItem icon={FlaskConical} label="Test Suite" href="/" active={true} collapsed={isCollapsed} />
            <NavItem icon={GitPullRequest} label="Workflow" href="/" active={false} collapsed={isCollapsed} />
            <NavItem icon={Box} label="Builds" href="/" active={false} collapsed={isCollapsed} />
          </nav>
        </div>

        <div>
          {!isCollapsed && (
            <div className="text-sm py-2 opacity-60">Organisation</div>
          )}
          <nav className={`border-b-2 py-2 ${isCollapsed ? 'space-y-4' : 'space-y-1'}`}>
            <NavItem icon={Users} label="Users" href="/" active={false} collapsed={isCollapsed} />
            <NavItem icon={KeyRound} label="API" href="/" active={false} collapsed={isCollapsed} />
          </nav>
        </div>

        <NavItem icon={Settings} label="Settings" href="/" active={false} collapsed={isCollapsed} />
      </div>

      {!isCollapsed && (
        <div className="px-3 py-3">
          <div className="px-3 py-3 bg-sidebar-accent gap-2 flex border-2 border-sidebar-border">
            <Flame size={20} className="text-purple-500" />
            <div className="flex gap-1 flex-col">
              <div className="text-sm font-semibold text-sidebar-foreground">What's new</div>
              <div className="text-xs text-sidebar-foreground opacity-60">Mobile tests get an update</div>
            </div>
          </div>
        </div>
      )}

      <div className="px-3 py-3 border-t-2 border-sidebar-border flex items-center gap-2">
        <div className="flex h-9 w-9 justify-center items-center bg-[#333333] text-sidebar-foreground">
          D
        </div>
        {!isCollapsed && (
          <div className="text-sidebar-foreground truncate">dakh@pixeluplabs.com</div>
        )}
      </div>
    </aside>
  )
}

interface NavItemProps {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
  href: string
  active?: boolean
  collapsed?: boolean
}

function NavItem({ icon: Icon, label, href, active, collapsed }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center text-sm gap-3 w-full cursor-pointer transition-colors ${
        collapsed ? 'justify-center px-2 py-2' : 'px-1 py-2'
      } ${
        active
          ? 'bg-sidebar-accent text-sidebar-foreground'
          : 'text-sidebar-foreground opacity-70 hover:bg-sidebar-accent'
      }`}
      title={collapsed ? label : undefined}
    >
      <Icon size={18} />
      {!collapsed && <span>{label}</span>}
    </Link>
  )
}
