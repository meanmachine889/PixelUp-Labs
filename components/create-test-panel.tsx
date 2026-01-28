'use client'

import React, { useState } from 'react'
import { X, ChevronDown } from 'lucide-react'

interface CreateTestPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function CreateTestPanel({ isOpen, onClose }: CreateTestPanelProps) {
  const [testName, setTestName] = useState('Candle login (iOS)')
  const [platform, setPlatform] = useState('iOS')
  const [build, setBuild] = useState('existing')

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-96 bg-card border-l border-border shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Create new test</h2>
            <p className="text-sm text-muted-foreground mt-1">Enter the details for your new test.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors text-foreground"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Test Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">Test name</label>
            <input
              type="text"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter test name"
            />
          </div>

          {/* Platform */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">Platform</label>
            <div className="relative">
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
              >
                <option value="iOS">iOS</option>
                <option value="Android">Android</option>
                <option value="Web">Web</option>
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
            <p className="text-xs text-muted-foreground">Select a platform (iOS, Android, Web)</p>
          </div>

          {/* Build */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">Build</label>
            <div className="flex gap-2 items-center">
              <div className="relative flex-1">
                <select
                  value={build}
                  onChange={(e) => setBuild(e.target.value)}
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
                >
                  <option value="existing">Choose from existing builds</option>
                  <option value="new">Create new build</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
              {build === 'existing' && (
                <button className="px-3 py-2 bg-transparent border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors whitespace-nowrap">
                  New build
                </button>
              )}
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">Schedule (optional)</label>
            <div className="relative">
              <select
                className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-muted-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
              >
                <option>Select a platform first</option>
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Advance Configuration */}
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between px-4 py-3 bg-secondary border border-border rounded-lg text-foreground hover:bg-secondary/80 transition-colors group">
              <span className="font-medium">Advance configuration</span>
              <ChevronDown size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border">
          <button className="w-full px-4 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Create test
          </button>
        </div>
      </div>
    </>
  )
}
