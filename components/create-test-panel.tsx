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
        className={`fixed top-0 right-0 h-screen w-130 bg-background border-l border-zinc-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-start justify-between p-5">
          <div>
            <h2 className="text-xl text-white">Create new test</h2>
            <p className="text-xs text-zinc-400 mt-0.5">Enter the details for your new test.</p>
          </div>
          <button
            onClick={onClose}
            className="p-0.5 hover:bg-zinc-800 border-2 border-zinc-800 transition-colors text-zinc-500"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 space-y-5">
          <div className="space-y-1.5">
            <label className="block text-xs text-zinc-400">Test name</label>
            <input
              type="text"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              className="w-full px-3 py-1.5 bg-[rgba(255, 255, 255, 0.04)] text-base border border-zinc-800 text-zinc-400 placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700 rounded-xs"
              placeholder="Enter test name"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs text-zinc-400">Platform</label>
            <div className="relative">
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full px-3 py-1.5 bg-[rgba(255, 255, 255, 0.04)] text-base border border-zinc-800 text-zinc-400 focus:outline-none appearance-none rounded-xs"
              >
                <option value="" disabled className="text-zinc-700">Select a platform (iOS, Android, Web)</option>
                <option value="iOS">iOS</option>
                <option value="Android">Android</option>
                <option value="Web">Web</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs text-zinc-400">Build</label>
            <div className="flex gap-2 items-center">
              <div className="relative flex-1">
                <select
                  value={build}
                  onChange={(e) => setBuild(e.target.value)}
                  className="w-full px-3 py-1.5 bg-[rgba(255, 255, 255, 0.04)] text-base border border-zinc-800 text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-700 appearance-none rounded-xs"
                >
                  <option value="" disabled className="text-zinc-700">Choose from existing builds</option>
                  <option value="build1">Build 1</option>
                  <option value="build2">Build 2</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
              </div>
              <button className="px-3 py-1.5 border border-zinc-800 text-gray-200 hover:bg-zinc-800 transition-colors whitespace-nowrap text-sm">
                New build
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs text-zinc-400">Schedule (optional)</label>
            <input
              type="text"
              disabled={!platform}
              placeholder="Select a platform first"
              className="w-full px-3 py-1.5 bg-[rgba(255, 255, 255, 0.04)] text-base border border-zinc-800 text-zinc-400 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-700 rounded-xs"
            />
          </div>

          <div className="border-t border-dashed border-zinc-800 pt-1.5">
            <button className="w-full flex items-center justify-between py-2 text-zinc-400 hover:text-white transition-colors group">
              <span className="text-xs">Advance configuration</span>
              <ChevronDown size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        <div className="p-5 mt-auto">
          <button 
            className="w-full px-3 py-2 text-white rounded-xs bg-linear-to-b from-[#A36BFF] to-[#4E3EFF] text-base transition-all hover:opacity-90"
          >
            Create test
          </button>
        </div>
      </div>
    </>
  )
}
