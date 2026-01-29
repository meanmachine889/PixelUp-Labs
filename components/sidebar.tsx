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
    <aside className={`border border-sidebar-border bg-background min-h-screen flex flex-col transition-all duration-300 ${isCollapsed ? 'w-14' : 'w-56'}`}>
      <div className={`px-2.5 py-1.5 border-b-2 border-sidebar-border flex items-center h-14 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        {!isCollapsed && (
          <div className="flex items-center gap-1.5">
            <svg width="86" height="32" viewBox="0 0 86 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <button onClick={() => onToggle?.(!isCollapsed)} className="p-0.5 items-center justify-center rounded text-sidebar-foreground">
          {isCollapsed ? (
            <svg width="32" height="20" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2545 12L17.9981 19.7126L15.184 22.5155L4.62622 12L15.184 1.48454L17.9981 4.28739L10.2545 12Z" fill="white" />
              <path d="M31.3738 12L20.816 22.5155L18.0019 19.7126L25.7456 12L17.9981 4.28739L20.8122 1.48454L31.37 12H31.3738Z" fill="white" />
              <path d="M13.0724 12L17.9981 7.09406L22.9238 12L17.9981 16.9059L13.0724 12Z" fill="white" />
            </svg>
          ) : (
            <ChevronsLeft className="h-7 w-7 text-muted-foreground" />
          )}
        </button>
      </div>

      <div className={`flex-1 overflow-y-auto py-3 space-y-3 ${isCollapsed ? 'px-2.5' : 'px-2.5'}`}>
        <div>
          <div className={`flex items-center gap-1.5 py-1.5 rounded mb-1.5 ${isCollapsed ? 'justify-center' : ''}`}>
            <div className="border-2 border-gray-300">
              <img
                src="https://res.cloudinary.com/dnfv0h10u/image/upload/v1769595964/image_7_dv0mmf.svg"
                alt="PixelUp Labs Logo"
                className="w-7 h-7 shrink-0"
              />
            </div>
            {!isCollapsed && (
              <div className="flex-1">
                <div className="text-base text-sidebar-foreground">PixelUp Labs</div>
              </div>
            )}
            {!isCollapsed && (
              <span className="text-xs text-sidebar-foreground opacity-60">
                <ChevronsUpDown />
              </span>
            )}
          </div>

          {!isCollapsed && (
            <div className="text-[13px] py-1.5 opacity-60">E2E Testing</div>
          )}
          <nav className={`border-b-2 py-1.5 ${isCollapsed ? 'space-y-3' : 'space-y-0.5'}`}>
            <NavItem icon={<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 13.5H13.5V7.5C13.5001 7.43432 13.4872 7.36927 13.4621 7.30857C13.437 7.24787 13.4002 7.19272 13.3538 7.14625L8.35375 2.14625C8.30731 2.09976 8.25217 2.06288 8.19147 2.03772C8.13077 2.01255 8.06571 1.9996 8 1.9996C7.93429 1.9996 7.86923 2.01255 7.80853 2.03772C7.74783 2.06288 7.69269 2.09976 7.64625 2.14625L2.64625 7.14625C2.59983 7.19272 2.56303 7.24787 2.53793 7.30857C2.51284 7.36927 2.49995 7.43432 2.5 7.5V13.5Z" stroke="#989899" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            } label="Dashboard" href="/" active={false} collapsed={isCollapsed} />
            <NavItem icon={<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 2H10.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.5 2V6.19625L13.4281 12.7425C13.4737 12.8183 13.4983 12.9049 13.4995 12.9934C13.5007 13.0818 13.4783 13.169 13.4348 13.246C13.3913 13.323 13.3281 13.3871 13.2517 13.4317C13.1753 13.4764 13.0885 13.4999 13 13.5H3C2.91148 13.5 2.82454 13.4766 2.74806 13.432C2.67159 13.3874 2.60831 13.3233 2.56471 13.2463C2.52111 13.1693 2.49874 13.082 2.49989 12.9935C2.50104 12.905 2.52566 12.8184 2.57125 12.7425L6.5 6.19625V2" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.47688 9.56751C5.30375 9.41251 6.47688 9.47939 8 10.25C10.0156 11.2706 11.4219 11.0569 12.2188 10.7281" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            } label="Test Suite" href="/" active={true} collapsed={isCollapsed} />
            <NavItem icon={<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1.5H4C3.72386 1.5 3.5 1.72386 3.5 2V4C3.5 4.27614 3.72386 4.5 4 4.5H6C6.27614 4.5 6.5 4.27614 6.5 4V2C6.5 1.72386 6.27614 1.5 6 1.5Z" stroke="#989899" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6H11C10.7239 6 10.5 6.22386 10.5 6.5V8.5C10.5 8.77614 10.7239 9 11 9H13C13.2761 9 13.5 8.77614 13.5 8.5V6.5C13.5 6.22386 13.2761 6 13 6Z" stroke="#989899" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 11.5H11C10.7239 11.5 10.5 11.7239 10.5 12V14C10.5 14.2761 10.7239 14.5 11 14.5H13C13.2761 14.5 13.5 14.2761 13.5 14V12C13.5 11.7239 13.2761 11.5 13 11.5Z" stroke="#989899" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 7.5H10.5" stroke="#989899" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 4.5V12C5 12.2652 5.10536 12.5196 5.29289 12.7071C5.48043 12.8946 5.73478 13 6 13H10.5" stroke="#989899" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            } label="Workflow" href="/" active={false} collapsed={isCollapsed} />
            <NavItem icon={Box} label="Builds" href="/" active={false} collapsed={isCollapsed} />
          </nav>
        </div>

        <div>
          {!isCollapsed && (
            <div className="text-[13px] py-1.5 opacity-60">Organisation</div>
          )}
          <nav className={`border-b-2 py-1.5 ${isCollapsed ? 'space-y-3' : 'space-y-0.5'}`}>
            <NavItem icon={<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 10C7.04493 10 8.5 8.54493 8.5 6.75C8.5 4.95507 7.04493 3.5 5.25 3.5C3.45507 3.5 2 4.95507 2 6.75C2 8.54493 3.45507 10 5.25 10Z" stroke="#989899" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0.639376 12.5C1.13881 11.7321 1.82212 11.1011 2.62729 10.6643C3.43246 10.2275 4.33398 9.99872 5.25 9.99872C6.16602 9.99872 7.06754 10.2275 7.87271 10.6643C8.67788 11.1011 9.3612 11.7321 9.86063 12.5" stroke="#989899" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.75 10C11.666 9.99946 12.5676 10.2279 13.3728 10.6645C14.178 11.1011 14.8613 11.7321 15.3606 12.5" stroke="#989899" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.54313 3.73125C9.9877 3.55393 10.4659 3.477 10.9437 3.50595C11.4215 3.5349 11.8869 3.66901 12.3068 3.89871C12.7267 4.1284 13.0907 4.44801 13.3728 4.83469C13.6549 5.22138 13.848 5.66559 13.9385 6.13559C14.029 6.60558 14.0146 7.08977 13.8962 7.55353C13.7779 8.0173 13.5586 8.44921 13.254 8.81839C12.9494 9.18758 12.567 9.48492 12.1341 9.68918C11.7013 9.89344 11.2286 9.99958 10.75 10" stroke="#989899" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            } label="Users" href="/" active={false} collapsed={isCollapsed} />
            <NavItem icon={KeyRound} label="API" href="/" active={false} collapsed={isCollapsed} />
          </nav>
        </div>

        <NavItem icon={Settings} label="Settings" href="/" active={false} collapsed={isCollapsed} />
      </div>

      {!isCollapsed && (
        <div className="px-2.5 py-2.5">
          <div className="px-2.5 py-2.5 bg-sidebar-accent gap-1.5 flex border-2 border-sidebar-border">
            <div className="mt-0.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3856 9.75C10.2644 10.1339 10.0524 10.483 9.76774 10.7677C9.48303 11.0524 9.13394 11.2644 8.75 11.3856" stroke="#7F56D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 6L8.64188 1.5C9.99125 2.62 13 5.50938 13 9C13 10.3261 12.4732 11.5979 11.5355 12.5355C10.5979 13.4732 9.32608 14 8 14C6.67392 14 5.40215 13.4732 4.46447 12.5355C3.52678 11.5979 3 10.3261 3 9C3 7.08938 3.90125 5.35875 4.9375 4L7 6Z" stroke="#7F56D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex gap-0.5 flex-col">
              <div className="text-[13px] font-semibold text-sidebar-foreground">What's new</div>
              <div className="text-[11px] text-sidebar-foreground opacity-60">Mobile tests get an update</div>
            </div>
          </div>
        </div>
      )}

      <div className="px-2.5 py-2.5 border-t-2 border-sidebar-border flex items-center gap-1.5">
        <div className="flex h-8 w-8 justify-center rounded-xs items-center bg-[#333333] text-sidebar-foreground">
          D
        </div>
        {!isCollapsed && (
          <div className="text-[13px] text-sidebar-foreground truncate">dakh@pixeluplabs.com</div>
        )}
      </div>
    </aside>
  )
}

interface NavItemProps {
  icon: React.ComponentType<{ size?: number; className?: string }> | React.ReactElement<SVGElement>
  label: string
  href: string
  active?: boolean
  collapsed?: boolean
}

function NavItem({ icon: Icon, label, href, active, collapsed }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center text-[13px] gap-2.5 w-full cursor-pointer transition-colors ${collapsed ? 'justify-center px-1.5 py-1.5' : 'px-1 py-1.5'
        } ${active
          ? 'bg-sidebar-accent text-sidebar-foreground'
          : 'text-sidebar-foreground opacity-70 hover:bg-sidebar-accent'
        }`}
      title={collapsed ? label : undefined}
    >
      {React.isValidElement(Icon) ? (
        React.cloneElement(Icon, { className: 'h-4 w-4' })
      ) : (
        <Icon className="h-4 w-4 text-muted-foreground" />
      )}
      {!collapsed && <span>{label}</span>}
    </Link>
  )
}