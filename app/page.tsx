'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { StatsCards } from '@/components/stats-cards'
import { TestTable } from '@/components/test-table'
import { CreateTestPanel } from '@/components/create-test-panel'
import { ChartLine, Plus } from 'lucide-react'

export default function Home() {
  const [createTestOpen, setCreateTestOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Content */}
        <div className="space-y-6 border">
          <div className="px-6 py-6 flex items-center justify-between">
            <h1 className="text-3xl ">Test Suite</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => router.push('/test/1')}
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
    </>
  )
}
