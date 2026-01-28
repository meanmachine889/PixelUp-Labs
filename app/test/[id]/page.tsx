'use client'

import { Eye, Play, Copy, Trash2, Settings2, Zap, Maximize2, Download, GitBranch, RotateCcw, Circle } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function TestEditor() {
  const params = useParams()
  const testId = params.id
  const [activeTab, setActiveTab] = useState<'editor' | 'yaml'>('editor')

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Left Sidebar */}
      <div className="w-12 border-r border-border bg-card flex flex-col items-center gap-2 py-4">
        <Link href="/">
          <button className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors" title="Back">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </Link>
        <button className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors" title="Edit">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        <button className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors" title="Variables">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
        <button className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors" title="Settings">
          <Settings2 size={20} />
        </button>
        <div className="flex-1" />
        <button className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors" title="Help">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-lg font-semibold">Candle login (iOS) (one step)</h1>
              <button className="p-1 hover:bg-secondary rounded text-muted-foreground" title="Edit name">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
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
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-secondary transition-colors text-sm text-foreground">
              <Eye size={16} />
              Preview
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm">
              <Play size={16} />
              Run Test
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border bg-card px-6 flex items-center">
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'editor'
                ? 'border-accent text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Editor
          </button>
          <button
            onClick={() => setActiveTab('yaml')}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'yaml'
                ? 'border-accent text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            YAML
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Editor Panel */}
          <div className="flex-1 overflow-auto p-6 bg-background">
            {activeTab === 'editor' && (
              <div className="space-y-4 max-w-2xl">
                {/* Step 1: Extracted Value */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-1.5 bg-secondary rounded text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm text-foreground mb-1">extracted value</div>
                      <div className="text-xs text-muted-foreground">Variable name</div>
                    </div>
                    <button className="p-1 hover:bg-secondary rounded text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Step 2: Click */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-secondary rounded text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4m0 0l-4-2" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-sm text-foreground">Click</span>
                        <span className="text-xs text-muted-foreground">dropdown</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Variable name</div>
                    </div>
                    <button className="p-1 hover:bg-secondary rounded text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Step 3: Wait */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-secondary rounded text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-sm text-foreground">Wait</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Second to wait</div>
                    </div>
                    <button className="p-1 hover:bg-secondary rounded text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Step 4: Element selector exists */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-secondary rounded text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm text-foreground mb-3">Element . selector exists</div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-muted-foreground mb-2">if</div>
                          <input type="text" placeholder="condition" className="w-full bg-secondary border border-border rounded px-2 py-1 text-xs text-foreground placeholder-muted-foreground" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">then</span>
                          <select className="flex-1 bg-secondary border border-border rounded px-2 py-1 text-xs text-foreground">
                            <option>then</option>
                          </select>
                        </div>

                        <div className="border-t border-border pt-3 mt-3">
                          <div className="text-xs text-muted-foreground mb-2">extracted value</div>
                          <input type="text" placeholder="Variable name" className="w-full bg-secondary border border-border rounded px-2 py-1 text-xs text-foreground placeholder-muted-foreground mb-2" />
                        </div>

                        <div className="border-t border-border pt-3 mt-3">
                          <div className="text-xs text-muted-foreground mb-2">else</div>
                          <select className="w-full bg-secondary border border-border rounded px-2 py-1 text-xs text-foreground mb-2">
                            <option>Wait</option>
                          </select>
                          <input type="text" placeholder="Second to wait" className="w-full bg-secondary border border-border rounded px-2 py-1 text-xs text-foreground placeholder-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    <button className="p-1 hover:bg-secondary rounded text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'yaml' && (
              <div className="bg-card border border-border rounded-lg p-4 font-mono text-xs space-y-1">
                <div className="text-accent">version</div>
                <div className="text-muted-foreground ml-2">name: Candle login (iOS) (one step)</div>
                <div className="text-muted-foreground ml-2">platform: iOS</div>
                <div className="text-muted-foreground ml-2">website: http://pixelup.in</div>
                <div className="text-muted-foreground ml-2">steps:</div>
                <div className="text-muted-foreground ml-4">- action: extracted value</div>
                <div className="text-muted-foreground ml-4">- action: click</div>
                <div className="text-muted-foreground ml-4">- action: wait</div>
              </div>
            )}
          </div>

          {/* Playground Preview */}
          <div className="w-96 border-l border-border bg-card p-6 flex flex-col">
            <h3 className="font-medium text-sm mb-4 text-foreground">Playground</h3>
            <div className="flex-1 flex items-center justify-center bg-background rounded-lg border border-border">
              <div className="w-48 h-80 bg-gradient-to-b from-secondary to-background rounded-3xl border-8 border-secondary shadow-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground text-xs space-y-2">
                  <svg className="w-12 h-12 mx-auto opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                  <p>iPhone Preview</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex gap-2">
                <button className="flex-1 px-2 py-2 bg-secondary rounded text-xs text-foreground hover:bg-secondary/80 transition-colors">
                  <Maximize2 size={14} className="mx-auto" />
                </button>
                <button className="flex-1 px-2 py-2 bg-secondary rounded text-xs text-foreground hover:bg-secondary/80 transition-colors">
                  <Download size={14} className="mx-auto" />
                </button>
                <button className="flex-1 px-2 py-2 bg-secondary rounded text-xs text-foreground hover:bg-secondary/80 transition-colors">
                  <RotateCcw size={14} className="mx-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
