'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Search, Filter, RefreshCcw, Play, MoreHorizontal, ChevronsUpDown, Loader, Check, X, Ban, Apple, Globe, Triangle, ExternalLink, Pencil, ArrowUpRight, ListFilter } from 'lucide-react'
import { useState } from 'react'

interface TestRow {
  id: string
  timestamp: string
  name: string
  status: 'success' | 'failed' | 'pending' | 'banned'
  platform: 'iOS' | 'Web' | 'Android'
  build: string
  lastRun: string
}

const testData: TestRow[] = [
  { id: '1', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'pending', platform: 'iOS', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '2', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'success', platform: 'Web', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '3', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'success', platform: 'Android', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '4', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'banned', platform: 'iOS', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '5', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'failed', platform: 'Android', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '6', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'pending', platform: 'iOS', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '7', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'success', platform: 'Android', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '8', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'success', platform: 'Android', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '9', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'banned', platform: 'Web', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
  { id: '10', timestamp: 'Aug 20, 11:38 AM', name: 'Placeholder', status: 'failed', platform: 'iOS', build: 'None', lastRun: 'Aug 20, 11:38 AM' },
]

export function TestTable() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-2">
      {/* Search and Filter */}
      <div className="flex items-center justify-between gap-4 py-2">
        <div className="flex items-center border-2 h-14 border-sidebar-border max-w-[30%] px-3 py-2 flex-1">
          <Search size={19} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Placeholder"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 ml-2 bg-transparent outline-none text-foreground "
          />
          <kbd className="text-xs bg-zinc-800 border border-zinc-700 px-2 py-1 rounded-xs">⌘ K</kbd>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 rounded-xs py-1 bg-zinc-800 border border-zinc-700 hover:bg-secondary transition-colors text-foreground text-sm">
            <RefreshCcw size={16} />
          </button>
          <button className="flex items-center gap-2 px-4 rounded-xs py-1 bg-zinc-800 border border-zinc-700 hover:bg-secondary transition-colors text-foreground">
            <ListFilter size={14} />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="border-2 border-sidebar-border overflow-hidden mb-1">
        <Table>
          <TableHeader className="bg-[#ffffff]/6 border-b-2 border-zinc-800">
            <TableRow className="hover:bg-zinc-800">
              <TableHead className="px-4 py-3 text-left text-muted-foreground font-medium w-[30%]">Test Name</TableHead>
              <TableHead className="px-4 py-3 text-left text-muted-foreground font-medium">
                <button className="flex items-center gap-2 hover:text-foreground transition-colors">
                  Status
                  <ChevronsUpDown className="h-4 w-4" />
                </button>
              </TableHead>
              <TableHead className="px-4 py-3 text-left text-muted-foreground font-medium">
                <button className="flex items-center gap-2 hover:text-foreground transition-colors">
                  Platform
                  <ChevronsUpDown className="h-4 w-4" />
                </button>
              </TableHead>
              <TableHead className="px-4 py-3 text-center text-muted-foreground w-[15%] font-medium">Build</TableHead>
              <TableHead className="px-4 py-3 text-center text-muted-foreground font-medium">
                <button className="flex items-center gap-2 hover:text-foreground transition-colors">
                  Last Run
                  <ChevronsUpDown className="h-4 w-4" />
                </button>
              </TableHead>
              <TableHead className="px-4 py-3 text-right text-muted-foreground font-medium"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testData.map((row) => (
              <TableRow key={row.id} className="group border-b border-border hover:bg-zinc-800 transition-colors">
                <TableCell className="px-4 py-3">
                  <div className="font-medium text-foreground">{row.timestamp}</div>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <StatusBadge status={row.status} />
                </TableCell>
                <TableCell className="px-4 py-3">
                  <PlatformBadge platform={row.platform} />
                </TableCell>
                <TableCell className="px-4 py-3 text-center text-zinc-500">{row.build}</TableCell>
                <TableCell className="px-4 py-3 text-zinc-500">{row.lastRun}</TableCell>
                <TableCell className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-foreground border border-zinc-700 transition-colors">
                      View runs
                      <ArrowUpRight size={16} />
                    </button>
                    <button className="p-1.5 hover:bg-zinc-700 border border-zinc-700 text-zinc-200  hover:text-foreground transition-colors" title="Edit">
                      <Pencil size={16} />
                    </button>
                    <button className="p-1.5 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 hover:text-foreground transition-colors" title="Run">
                      <Play size={16} />
                    </button>
                    <button className="p-1.5 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 hover:text-foreground transition-colors" title="More options">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

interface StatusBadgeProps {
  status: 'success' | 'failed' | 'pending' | 'banned'
}

function StatusBadge({ status }: StatusBadgeProps) {
  const baseClasses = 'inline-flex items-center gap-1 px-2 py-1 text-sm font-medium'
  const statusClasses = {
    success: 'bg-accent/20 text-accent',
    failed: 'bg-destructive/20 text-red-500/70',
    pending: 'bg-purple-500/20 text-purple-500',
    banned: 'bg-[#333333] text-gray-400',
  }

  const icons = {
    success: <Check size={12} />,
    failed: <Loader size={12} />,
    pending: <X size={12} />,
    banned: <Ban size={12} />,
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
    iOS: <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_3118)">
        <path d="M9.43073 3.82065C8.83102 4.19124 8.46061 4.82653 8.46061 5.53241C8.46061 6.32653 8.93685 7.05006 9.66003 7.35006C9.51892 7.80889 9.30726 8.23241 9.04268 8.62065C8.65463 9.16771 8.24894 9.73241 7.64923 9.73241C7.04952 9.73241 6.87314 9.37947 6.16759 9.37947C5.47969 9.37947 5.23275 9.75006 4.66832 9.75006C4.10388 9.75006 3.71583 9.2383 3.27487 8.603C2.6928 7.72065 2.35767 6.69712 2.34003 5.62065C2.34003 3.87359 3.46889 2.9383 4.59776 2.9383C5.19747 2.9383 5.69135 3.32653 6.06176 3.32653C6.41453 3.32653 6.97897 2.92065 7.64923 2.92065C8.35477 2.903 9.02504 3.2383 9.43073 3.82065ZM7.33174 2.17947C7.63159 1.82653 7.79034 1.38536 7.80798 0.926532C7.80798 0.87359 7.80798 0.803002 7.79034 0.750061C7.27882 0.803002 6.80258 1.05006 6.46745 1.4383C6.16759 1.77359 5.99121 2.19712 5.97357 2.65594C5.97357 2.70888 5.97357 2.76183 5.99121 2.81477C6.02648 2.81477 6.0794 2.83241 6.11468 2.83241C6.59092 2.79712 7.03188 2.55006 7.33174 2.17947Z" fill="#8A8A8C" />
      </g>
      <defs>
        <clipPath id="clip0_1_3118">
          <rect width="7.32" height="9" fill="white" transform="translate(2.34003 0.75)" />
        </clipPath>
      </defs>
    </svg>
    ,
    Web: <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5Z" fill="#A4A4A6" fill-opacity="0.2" />
      <path d="M6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5Z" fill="#A4A4A6" fill-opacity="0.2" stroke="#A4A4A6" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7.875 6C7.875 9 6 10.5 6 10.5C6 10.5 4.125 9 4.125 6C4.125 3 6 1.5 6 1.5C6 1.5 7.875 3 7.875 6Z" fill="#A4A4A6" fill-opacity="0.2" stroke="#A4A4A6" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1.75592 4.5H10.244" stroke="#A4A4A6" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1.75592 7.5H10.244" stroke="#A4A4A6" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    ,
    Android: <svg width="12" height="16" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.144833 0.466917L4.51483 4.75242L0.177333 9.07742C0.10637 8.985 0.0512838 8.88142 0.0143328 8.77092C-0.0047776 8.64581 -0.0047776 8.51853 0.0143328 8.39342V1.03342C0.0013328 0.835917 0.0468328 0.638417 0.144333 0.466917M6.39733 2.88342L4.97083 4.29642L0.652833 0.0499172C0.792833 0.00141717 0.942833 -0.0120827 1.08933 0.0109173C1.31933 0.0739173 1.53883 0.170917 1.74033 0.297417L5.64833 2.45992C5.90233 2.59642 6.14983 2.73992 6.39733 2.88342ZM4.97133 5.21492L6.39083 6.60892L5.36183 7.18192L2.22233 8.92692C1.96233 9.07042 1.70133 9.20742 1.44733 9.36392C1.33865 9.43158 1.21677 9.47528 1.08985 9.49209C0.962935 9.50891 0.833889 9.49845 0.711333 9.46142L4.97133 5.21492ZM8.65133 4.75242C8.65498 4.92726 8.6108 5.09977 8.52356 5.25133C8.43633 5.40289 8.30935 5.52775 8.15633 5.61242L6.98333 6.26342L5.43983 4.75242L6.98983 3.21542C7.38733 3.43692 7.77833 3.65842 8.16883 3.86692C8.32457 3.95396 8.45249 4.08332 8.53778 4.24002C8.62308 4.39672 8.66278 4.57437 8.65133 4.75242Z" fill="#878789" />
    </svg>
    ,
  }

  return (
    <div className="flex items-center gap-1 text-zinc-400 rounded-xs bg-[#333333] text-xs px-2 py-1 w-fit">
      <span>{platformIcons[platform]}</span>
      <span className='text-sm'>{platform}</span>
    </div>
  )
}
