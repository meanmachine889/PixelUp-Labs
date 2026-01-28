'use client'

import React, { useState } from 'react'
import { Eye, Play, ChevronDown, Settings, Hand, Ban, Undo, Circle, Copy, Trash2, RotateCcw, Columns2 } from 'lucide-react'
import { Iphone } from '@/components/ui/iphone'

interface TestEditorPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('editor')

  return (
    <>


      {/* Full Screen Test Editor */}
      <div
        className={`w-full bg-background'
          }`}
      >
        {/* Header */}
        <div className="border-b-2 border-sidebar-border bg-background h-20 sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-lg font-medium text-white">Candle login (iOS) (one step)</h1>
                <button className="text-muted-foreground hover:text-foreground">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>Platform</span>
                <span className="text-purple-400">iOS</span>
                <span className="mx-2">|</span>
                <span>Website:</span>
                <span className="text-purple-400">http://pixelup.in</span>
                <span className="mx-2">|</span>
                <span>Schedule:</span>
                <span className="text-white">None</span>
                <span className="mx-2">|</span>
                <span>ID:</span>
                <span className="text-white">None</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border-2 border-sidebar-border rounded-lg hover:bg-[#252525] transition-colors text-white text-sm">
                <Eye size={16} />
                Preview
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm">
                <Play size={16} fill="currentColor" />
                Run Test
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex h-[calc(100vh-80px)]">
          {/* Main Editor Area */}
          <div className="flex-1 flex flex-col overflow-hidden border-r-2 border-sidebar-border">
            {/* Tabs */}
            <div className="border-b-2 border-sidebar-border h-15 bg-background px-6 flex items-center gap-8">
              <button
                onClick={() => setActiveTab('editor')}
                className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'editor'
                  ? 'border-white text-white'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
              >
                Editor
              </button>
              <button
                onClick={() => setActiveTab('yaml')}
                className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'yaml'
                  ? 'border-white text-white'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
              >
                YAML
              </button>
            </div>

            {/* Editor Content */}
            <div className="flex-1 overflow-auto p-6 bg-background">
              {activeTab === 'editor' ? (
                <div className="space-y-4 max-w-xl">
                  {/* Step 1: Extracted Value */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-[#1a1a1a] border-2 border-sidebar-border flex items-center justify-center">
                      <Settings size={14} className="text-muted-foreground" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border-2 border-sidebar-border rounded-lg">
                      <span className="text-sm text-white">extracted value</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Variable name"
                      className="flex-1 px-3 py-2 bg-[#1a1a1a] border-2 border-sidebar-border rounded-lg text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none focus:border-purple-500"
                    />
                    <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                  </div>

                  {/* Step 2: Click */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-[#1a1a1a] border-2 border-sidebar-border flex items-center justify-center">
                      <div className="w-3 h-3 rounded-sm bg-muted-foreground" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border-2 border-sidebar-border rounded-lg cursor-pointer hover:bg-[#252525]">
                      <span className="text-sm text-white">Click</span>
                      <ChevronDown size={14} className="text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      placeholder="Variable name"
                      className="flex-1 px-3 py-2 bg-[#1a1a1a] border-2 border-sidebar-border rounded-lg text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none focus:border-purple-500"
                    />
                    <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                  </div>

                  {/* Step 3: Wait */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md bg-[#1a1a1a] border-2 border-sidebar-border flex items-center justify-center">
                        <Hand size={14} className="text-muted-foreground" />
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border-2 border-sidebar-border rounded-lg cursor-pointer hover:bg-[#252525]">
                        <span className="text-sm text-white">Wait</span>
                        <ChevronDown size={14} className="text-muted-foreground" />
                      </div>
                      <div className="flex-1" />
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 hover:bg-[#252525] rounded transition-colors">
                          <Play size={14} className="text-muted-foreground" />
                        </button>
                        <button className="p-1.5 hover:bg-[#252525] rounded transition-colors">
                          <Copy size={14} className="text-muted-foreground" />
                        </button>
                        <button className="p-1.5 hover:bg-[#252525] rounded transition-colors">
                          <Trash2 size={14} className="text-muted-foreground" />
                        </button>
                      </div>
                    </div>
                    <div className="ml-9">
                      <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border-2 border-sidebar-border rounded-lg">
                        <span className="text-sm text-muted-foreground">Second to wait</span>
                        <div className="ml-auto">
                          <ChevronDown size={14} className="text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Element selector exists */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md bg-[#1a1a1a] border-2 border-sidebar-border flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-muted-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground">Element . selector exists</span>
                    </div>

                    {/* If condition */}
                    <div className="ml-9 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-md bg-[#1a1a1a] border-2 border-sidebar-border flex items-center justify-center">
                          <svg className="w-3 h-3 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 7l5 5-5 5M13 17h6" />
                          </svg>
                        </div>
                        <span className="text-sm text-muted-foreground">if</span>
                        <input
                          type="text"
                          placeholder="condition"
                          className="flex-1 px-3 py-2 bg-[#1a1a1a] border-2 border-sidebar-border rounded-lg text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none focus:border-purple-500"
                        />
                        <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border-2 border-sidebar-border rounded-lg cursor-pointer hover:bg-[#252525]">
                          <span className="text-sm text-muted-foreground">then</span>
                          <ChevronDown size={14} className="text-muted-foreground" />
                        </div>
                      </div>

                      {/* Nested extracted value in if block */}
                      <div className="ml-9 flex items-center gap-3">
                        <div className="w-6 h-6 rounded-md bg-[#1a1a1a] border-2 border-sidebar-border flex items-center justify-center">
                          <Settings size={14} className="text-muted-foreground" />
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border-2 border-sidebar-border rounded-lg">
                          <span className="text-sm text-white">extracted value</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Variable name"
                          className="flex-1 px-3 py-2 bg-[#1a1a1a] border-2 border-sidebar-border rounded-lg text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      {/* Else block */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">else</span>
                        <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border-2 border-sidebar-border rounded-lg cursor-pointer hover:bg-[#252525]">
                          <span className="text-sm text-white">Wait</span>
                          <ChevronDown size={14} className="text-muted-foreground" />
                        </div>
                      </div>

                      {/* Else Wait content */}
                      <div className="ml-9 flex items-center gap-3">
                        <div className="w-6 h-6 rounded-md bg-[#1a1a1a] border-2 border-sidebar-border flex items-center justify-center">
                          <Hand size={14} className="text-muted-foreground" />
                        </div>
                        <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border-2 border-sidebar-border rounded-lg">
                          <span className="text-sm text-muted-foreground">Second to wait</span>
                          <div className="ml-auto">
                            <ChevronDown size={14} className="text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-muted-foreground text-sm">YAML view goes here</div>
              )}
            </div>

            {/* Bottom Toolbar */}
            <div className="border-t-2 border-sidebar-border bg-background px-6 py-3 flex items-center justify-center gap-2">
              <button className="p-2.5 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                <div className="w-4 h-4 bg-white rounded-sm" />
              </button>
              <button className="p-2.5 hover:bg-[#1a1a1a] rounded-lg transition-colors">
                <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 7l5 5-5 5M13 17h6" />
                </svg>
              </button>
              <button className="p-2.5 hover:bg-[#1a1a1a] rounded-lg transition-colors">
                <Settings size={16} className="text-muted-foreground" />
              </button>
              <button className="p-2.5 hover:bg-[#1a1a1a] rounded-lg transition-colors">
                <Hand size={16} className="text-muted-foreground" />
              </button>
              <button className="p-2.5 hover:bg-[#1a1a1a] rounded-lg transition-colors">
                <Ban size={16} className="text-muted-foreground" />
              </button>
              <button className="p-2.5 hover:bg-[#1a1a1a] rounded-lg transition-colors">
                <Undo size={16} className="text-muted-foreground" />
              </button>
              <div className="w-px h-6 bg-border/40 mx-2" />
              <button className="p-2.5 bg-red-500/20 rounded-lg hover:bg-red-500/30 transition-colors">
                <Circle size={16} className="text-red-500" fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Right Playground Area */}
          <div className="w-[700px] min-w-[45%] bg-background flex flex-col">
            {/* Playground Header */}
            <div className="px-6 py-4 flex h-15 items-center justify-between border-b-2 border-sidebar-border">
              <span className="text-sm text-muted-foreground">Playground</span>
              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:bg-[#1a1a1a] rounded transition-colors">
                  <RotateCcw size={16} className="text-muted-foreground" />
                </button>
                <button className="p-1.5 hover:bg-[#1a1a1a] rounded transition-colors">
                  <Columns2 size={16} className="text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Phone Container */}
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="w-[330px]">
                <Iphone />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
