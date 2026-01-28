'use client'

import Link from "next/link"

import { Search, Filter, Copy, Play, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

interface TestRow {
  id: string
  timestamp: string
  name: string
  status: 'success' | 'failed' | 'pending'
  platform: 'iOS' | 'Web' | 'Android'
  build: string
  lastRun: string
}

const testData: TestRow[] = [
  { id: '1', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'pending', platform: 'iOS', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '2', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'success', platform: 'Web', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '3', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'success', platform: 'Android', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '4', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'success', platform: 'iOS', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '5', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'failed', platform: 'Android', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '6', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'pending', platform: 'iOS', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '7', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'success', platform: 'Android', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '8', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'success', platform: 'Android', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '9', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'pending', platform: 'Web', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '10', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'failed', platform: 'iOS', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
]

export function TestTable() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-4">
      {/* Search and Filter */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center bg-card border border-border rounded-lg px-3 py-2 flex-1">
          <Search size={16} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Placeholder"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 ml-2 bg-transparent outline-none text-foreground text-sm"
          />
          <kbd className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">⌘K</kbd>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg hover:bg-secondary transition-colors text-foreground text-sm">
          <Filter size={14} />
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-muted-foreground font-medium">Test Name</th>
              <th className="px-4 py-3 text-left text-muted-foreground font-medium">Status</th>
              <th className="px-4 py-3 text-left text-muted-foreground font-medium">Platform</th>
              <th className="px-4 py-3 text-left text-muted-foreground font-medium">Build</th>
              <th className="px-4 py-3 text-left text-muted-foreground font-medium">Last Run</th>
              <th className="px-4 py-3 text-right text-muted-foreground font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testData.map((row, index) => (
              <tr
                key={row.id}
                className={`border-b border-border hover:bg-secondary/30 transition-colors ${
                  index % 2 === 0 ? 'bg-background/50' : ''
                }`}
              >
                <td className="px-4 py-3">
                  <div className="text-xs text-muted-foreground mb-1">{row.timestamp}</div>
                  <div className="font-medium text-foreground">{row.name}</div>
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-4 py-3">
                  <PlatformBadge platform={row.platform} />
                </td>
                <td className="px-4 py-3 text-foreground">{row.build}</td>
                <td className="px-4 py-3 text-foreground">{row.lastRun}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 hover:bg-secondary rounded text-foreground" title="View runs">
                      <Play size={14} />
                    </button>
                    <button className="p-1 hover:bg-secondary rounded text-foreground" title="Copy">
                      <Copy size={14} />
                    </button>
                    <button className="p-1 hover:bg-secondary rounded text-foreground" title="More options">
                      <MoreHorizontal size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

interface StatusBadgeProps {
  status: 'success' | 'failed' | 'pending'
}

function StatusBadge({ status }: StatusBadgeProps) {
  const baseClasses = 'inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium'
  const statusClasses = {
    success: 'bg-accent/20 text-accent border border-accent/40',
    failed: 'bg-destructive/20 text-destructive border border-destructive/40',
    pending: 'bg-secondary text-muted-foreground border border-border',
  }

  const icons = {
    success: '✓',
    failed: '✕',
    pending: '◉',
  }

  return (
    <div className={`${baseClasses} ${statusClasses[status]}`}>
      <span>{icons[status]}</span>
      <span>Placeholder</span>
    </div>
  )
}

interface PlatformBadgeProps {
  platform: 'iOS' | 'Web' | 'Android'
}

function PlatformBadge({ platform }: PlatformBadgeProps) {
  const platformIcons = {
    iOS: '◉',
    Web: '▦',
    Android: '▮',
  }

  return (
    <div className="flex items-center gap-2 text-muted-foreground text-xs">
      <span>{platformIcons[platform]}</span>
      <span>{platform}</span>
    </div>
  )
}
