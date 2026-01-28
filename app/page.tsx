'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar'
import { StatsCards } from '@/components/stats-cards'
import { TestTable } from '@/components/test-table'
import { CreateTestPanel } from '@/components/create-test-panel'
import { TestEditorPanel } from '@/components/test-editor-panel'
import { Monitor, Plus } from 'lucide-react'

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [createTestOpen, setCreateTestOpen] = useState(false)
  const [testEditorOpen, setTestEditorOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background text-foreground dark">
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={setSidebarCollapsed} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-background border-b border-border sticky top-0 z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Test Suite</h1>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTestEditorOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground text-sm"
              >
                <Monitor size={16} />
                Live monitor
              </button>
              <button
                onClick={() => setCreateTestOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm"
              >
                <Plus size={16} />
                Create test
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Stats Cards */}
          <StatsCards />

          {/* Test Table */}
          <TestTable />
        </div>
      </main>

      {/* Create Test Panel */}
      <CreateTestPanel isOpen={createTestOpen} onClose={() => setCreateTestOpen(false)} />

      {/* Test Editor Panel */}
      <TestEditorPanel isOpen={testEditorOpen} onClose={() => setTestEditorOpen(false)} />
    </div>
  )
}
