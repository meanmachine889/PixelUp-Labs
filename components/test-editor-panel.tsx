'use client'

import React, { useState } from 'react'
import { X, Eye, Play } from 'lucide-react'

interface TestEditorPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function TestEditorPanel({ isOpen, onClose }: TestEditorPanelProps) {
  const [activeTab, setActiveTab] = useState('editor')

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Full Screen Test Editor */}
      <div
        className={`fixed inset-0 bg-background z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="border-b border-border bg-background sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-lg font-semibold text-foreground">Candle login (iOS) (one step)</h1>
                <button className="text-muted-foreground hover:text-foreground">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a.001.001 0 00-.788 0l-7 14a.001.001 0 00.088.986.001.001 0 00.9.888h14c.412 0 .823-.176.927-.889a.001.001 0 00.07-.978l-7-14z" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Platform: iOS</span>
                <span>Website: http://pixelup.in</span>
                <span>Schedule: None</span>
                <span>ID: None</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-transparent border border-border rounded-lg hover:bg-secondary transition-colors text-foreground text-sm">
                <Eye size={16} />
                Preview
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm">
                <Play size={16} />
                Run Test
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-secondary rounded-lg transition-colors text-foreground"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex h-[calc(100vh-80px)]">
          {/* Left Sidebar Icons */}
          <div className="w-16 border-r border-border bg-secondary/30 flex flex-col items-center py-4 gap-4">
            <button className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center hover:opacity-90 transition-opacity" title="Editor">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground" title="Variables">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 101.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.757 15.657a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM5 10a1 1 0 01-1-1V8a1 1 0 012 0v1a1 1 0 01-1 1zM5.757 5.757a1 1 0 00-1.414-1.414L3.636 5.343a1 1 0 101.414 1.414l.707-.707z" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground" title="Settings">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Main Editor Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-border bg-background px-6 flex items-center gap-8">
              <button
                onClick={() => setActiveTab('editor')}
                className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'editor'
                    ? 'border-accent text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Editor
              </button>
              <button
                onClick={() => setActiveTab('yaml')}
                className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'yaml'
                    ? 'border-accent text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                YAML
              </button>
            </div>

            {/* Editor Content */}
            <div className="flex-1 overflow-auto p-6 bg-background/50">
              {activeTab === 'editor' ? (
                <div className="space-y-4 max-w-2xl">
                  {/* Step 1: Extracted Value */}
                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-secondary rounded flex items-center justify-center text-xs font-semibold">
                        ◉
                      </div>
                      <span className="font-medium text-foreground">extracted value</span>
                      <span className="text-muted-foreground">Variable name</span>
                    </div>
                  </div>

                  {/* Step 2: Click */}
                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-secondary rounded flex items-center justify-center text-xs font-semibold">
                        •
                      </div>
                      <span className="font-medium text-foreground">Click</span>
                    </div>
                  </div>

                  {/* Step 3: Wait */}
                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <div className="w-6 h-6 bg-secondary rounded flex items-center justify-center text-xs font-semibold">
                        ⏱
                      </div>
                      <span className="font-medium text-foreground">Wait</span>
                    </div>
                    <div className="ml-8 text-muted-foreground text-xs">Second to wait</div>
                  </div>

                  {/* Step 4: Element selector exists */}
                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm mb-3">
                      <div className="w-6 h-6 bg-secondary rounded flex items-center justify-center text-xs font-semibold">
                        ✓
                      </div>
                      <span className="font-medium text-foreground">Element . selector exists</span>
                    </div>

                    {/* If/Then/Else */}
                    <div className="ml-8 space-y-3 border-l border-border pl-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>if</span>
                        <div className="flex-1 px-3 py-1.5 bg-secondary rounded border border-border text-foreground">
                          condition
                        </div>
                        <span>then</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="flex-1 px-3 py-1.5 bg-secondary rounded border border-border text-foreground">
                          extracted value
                        </div>
                        <span>Variable name</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>else</span>
                        <div className="flex-1 px-3 py-1.5 bg-secondary rounded border border-border text-foreground">
                          Wait
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="flex-1 px-3 py-1.5 bg-secondary rounded border border-border text-foreground">
                          Second to wait
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-muted-foreground text-sm">YAML view goes here</div>
              )}
            </div>
          </div>

          {/* Right Playground Area */}
          <div className="w-80 border-l border-border bg-secondary/20 flex flex-col items-center justify-center p-4">
            <div className="w-64 aspect-[9/16] bg-gradient-to-b from-secondary to-background rounded-[40px] border-4 border-secondary flex items-center justify-center shadow-lg">
              <div className="w-56 h-80 bg-background/50 rounded-[32px] border border-border" />
            </div>
            <div className="mt-6 flex gap-3 text-muted-foreground">
              {[...Array(6)].map((_, i) => (
                <button key={i} className="w-6 h-6 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
