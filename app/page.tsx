'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { StatsCards } from '@/components/stats-cards'
import { TestTable } from '@/components/test-table'
import { CreateTestPanel } from '@/components/create-test-panel'
import { CornerBorderCard } from '@/components/ui/corner-border-card'
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
                className="flex items-center gap-1 px-4 py-1 bg-[#333333] rounded-xs border-2 border-zinc-700 hover:bg-secondary transition-colors text-foreground "
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.25 12.25H2.68333C2.35664 12.25 2.19329 12.25 2.06851 12.1864C1.95874 12.1305 1.86951 12.0413 1.81358 11.9315C1.75 11.8067 1.75 11.6434 1.75 11.3167V1.75M12.25 4.08333L9.07998 7.25335C8.96448 7.36886 8.90673 7.42661 8.84013 7.44825C8.78155 7.46728 8.71845 7.46728 8.65987 7.44825C8.59327 7.42661 8.53552 7.36886 8.42002 7.25335L7.32998 6.16332C7.21448 6.04781 7.15673 5.99006 7.09013 5.96842C7.03155 5.94939 6.96845 5.94939 6.90987 5.96842C6.84327 5.99006 6.78552 6.04781 6.67002 6.16332L4.08333 8.75M12.25 4.08333H9.91667M12.25 4.08333V6.41667" stroke="white" stroke-opacity="0.88" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                Live monitor
              </button>
              <button
                onClick={() => setCreateTestOpen(true)}
                className="flex items-center gap-1 px-4 py-1 bg-linear-to-b from-[#A36BFF] to-[#4E3EFF] border-2 border-zinc-600 text-accent-foreground rounded-xs hover:opacity-90 transition-opacity  "
              >
                <Plus size={19} />
                Create test
              </button>
            </div>
          </div>
          <div className="px-6">
            <CornerBorderCard className="mb-12">
              <StatsCards />
              <div className="px-4 py-4">
                <TestTable />
              </div>
            </CornerBorderCard>
          </div>
        </div>
      </main>

      {/* Create Test Panel */}
      <CreateTestPanel isOpen={createTestOpen} onClose={() => setCreateTestOpen(false)} />
    </>
  )
}
