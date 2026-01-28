'use client'

import { useState } from 'react'
import { StatsCards } from '@/components/stats-cards'
import { TestTable } from '@/components/test-table'
import { CreateTestPanel } from '@/components/create-test-panel'
import { TestEditorPanel } from '@/components/test-editor-panel'
import { Bell, ChartLine, FileText, HelpCircle, Plus } from 'lucide-react'

export default function Home() {
  const [createTestOpen, setCreateTestOpen] = useState(false)
  const [testEditorOpen, setTestEditorOpen] = useState(false)

  return (
    <>
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-background border-b border-border sticky top-0 z-10 h-18 flex items-center justify-end px-6 gap-2">
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

        {/* Content */}
        <div className="space-y-6 border">
          <div className="px-6 py-6 flex items-center justify-between">
            <h1 className="text-3xl ">Test Suite</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTestEditorOpen(true)}
                className="flex items-center gap-2 px-4 py-1 bg-[#333333] rounded-xs border-2 border-zinc-700 hover:bg-secondary transition-colors text-foreground "
              >
                <ChartLine size={19} />
                Live monitor
              </button>
              <button
                onClick={() => setCreateTestOpen(true)}
                className="flex items-center gap-2 px-4 py-1 bg-linear-to-b from-[#A36BFF] to-[#4E3EFF] border-2 border-zinc-600 text-accent-foreground rounded-xs hover:opacity-90 transition-opacity  "
              >
                <Plus size={19} />
                Create test
              </button>
            </div>
          </div>
          <div className="px-6">
            <div className="border-2">
              <StatsCards />
              <div className="px-3 py-2">
                <TestTable />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Create Test Panel */}
      <CreateTestPanel isOpen={createTestOpen} onClose={() => setCreateTestOpen(false)} />

      {/* Test Editor Panel */}
      <TestEditorPanel isOpen={testEditorOpen} onClose={() => setTestEditorOpen(false)} />
    </>
  )
}
