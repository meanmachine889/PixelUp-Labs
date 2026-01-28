'use client'

import { useState } from 'react'
import { X, ChevronDown } from 'lucide-react'

interface CreateTestPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function CreateTestPanel({ isOpen, onClose }: CreateTestPanelProps) {
  const [testName, setTestName] = useState('Candle login (iOS)')
  const [platform, setPlatform] = useState('')
  const [build, setBuild] = useState('')

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-150 bg-[#18181b] border-l border-zinc-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-start justify-between p-6">
          <div>
            <h2 className="text-2xl text-white">Create new test</h2>
            <p className="text-sm text-zinc-400 mt-1">Enter the details for your new test.</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-zinc-800 border-2 border-zinc-700 transition-colors text-zinc-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm text-zinc-400">Test name</label>
            <input
              type="text"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700 rounded-xs"
              placeholder="Enter test name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-zinc-400">Platform</label>
            <div className="relative">
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700 appearance-none rounded-xs"
              >
                <option value="" disabled>Select a platform (iOS, Android, Web)</option>
                <option value="iOS">iOS</option>
                <option value="Android">Android</option>
                <option value="Web">Web</option>
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-zinc-400">Build</label>
            <div className="flex gap-3 items-center">
              <div className="relative flex-1">
                <select
                  value={build}
                  onChange={(e) => setBuild(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 appearance-none rounded-xs"
                >
                  <option value="" disabled>Choose from existing builds</option>
                  <option value="build1">Build 1</option>
                  <option value="build2">Build 2</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
              </div>
              <button className="px-4 py-3 border border-zinc-700 text-sm font-medium text-gray-400 hover:bg-zinc-800 transition-colors whitespace-nowrap">
                New build
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-zinc-400">Schedule (optional)</label>
            <input
              type="text"
              disabled={!platform}
              placeholder="Select a platform first"
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700 rounded-xs"
            />
          </div>

          <div className="border-t border-dashed border-zinc-700 pt-2">
            <button className="w-full flex items-center justify-between py-3 text-zinc-400 hover:text-white transition-colors group">
              <span className="text-sm">Advance configuration</span>
              <ChevronDown size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        <div className="p-6 mt-auto">
          <button className="w-full px-4 py-3 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-sm font-medium hover:from-violet-500 hover:to-purple-500 transition-all">
            Create test
          </button>
        </div>
      </div>
    </>
  )
}
