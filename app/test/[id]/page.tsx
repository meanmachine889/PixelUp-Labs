'use client'

import { useState } from 'react'
import { Eye, Play, ChevronDown, Settings, Hand, Ban, Undo, Circle, Copy, Trash2, RotateCcw, Columns2, Check, FileText, Info, CheckIcon, CheckCircle, CheckCircle2, ChevronsUpDown, GitBranch, Triangle } from 'lucide-react'
import { Iphone } from '@/components/ui/iphone'

export default function TestEditorPage() {
  const [activeTab, setActiveTab] = useState('editor')

  return (
    <div className="w-full bg-background overflow-y-auto">
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
              <span className="text-white">iOS</span>
              <span className="mx-2">|</span>
              <span>Website:</span>
              <span className="text-white">http://pixelup.in</span>
              <span className="mx-2">|</span>
              <span>Schedule:</span>
              <span className="text-white">None</span>
              <span className="mx-2">|</span>
              <span>ID:</span>
              <span className="text-white">None</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2 bg-zinc-800 border-2 border-sidebar-border rounded-sm hover:bg-[#252525] transition-colors text-white text-sm">
              <Eye size={16} />
              Preview
            </button>
            <button className="flex items-center gap-2 px-5 py-2 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xs hover:bg-purple-700 transition-colors text-sm">
              <Triangle size={16} className="rotate-90" />
              Run Test
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        <div className="flex-1 flex flex-col overflow-hidden border-r-2 border-sidebar-border relative">
          <div className="border-b-2 border-sidebar-border h-15 bg-background px-6 flex items-end gap-8">
            <button
              onClick={() => setActiveTab('editor')}
              className={`pb-3 px-3 text-sm font-medium border-b-2 -mb-0.5 transition-colors ${activeTab === 'editor'
                ? 'border-white text-white'
                : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
            >
              Editor
            </button>
            <button
              onClick={() => setActiveTab('yaml')}
              className={`pb-3 px-3 text-sm font-medium border-b-2 -mb-0.5 transition-colors ${activeTab === 'yaml'
                ? 'border-white text-white'
                : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
            >
              YAML
            </button>
          </div>

          <div className="flex-1 overflow-auto p-5 bg-background">
            {activeTab === 'editor' ? (
              <div className="space-y-4 w-full">
                <div className="flex justify-between w-full items-center gap-3 px-2">
                  <div className="flex items-center gap-3 w-[80%]">
                    <div className="flex items-center justify-center">
                      <Settings className="text-muted-foreground h-5 w-5" />
                    </div>
                    <div className="flex items-center rounded-xs gap-2 px-3 py-2 bg-[#1a1a1a] border border-zinc-800">
                      <span className="text-sm text-gray-300">extracted value</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Variable name"
                      className="flex-1 px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                  </div>
                  <div className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center">
                    <Check className='h-3 w-3 text-green-500' />
                  </div>
                </div>

                <div className="flex justify-between w-full items-start gap-3 px-2">
                  <div className="flex gap-3 w-[80%]">
                    <div className="flex items-center justify-center mt-2">
                      <FileText className="text-muted-foreground h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center justify-between gap-2 px-3 py-2 bg-[#1a1a1a] border rounded-xs border-zinc-800 cursor-pointer hover:bg-[#252525] w-fit">
                        <span className="text-sm text-white">Click</span>
                        <ChevronDown size={14} className="text-muted-foreground" />
                      </div>
                      <input
                        type="text"
                        placeholder="Variable name"
                        className="flex-1 px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center mt-2">
                    <Check className='h-3 w-3 text-green-500' />
                  </div>
                </div>

                <div className="flex bg-[#ffffff]/2 py-2 justify-between w-full items-start gap-3 px-2">
                  <div className="flex gap-3 w-[80%]">
                    <div className=" mt-2">
                      <Hand className="text-muted-foreground h-5 w-5" />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                      <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs cursor-pointer hover:bg-[#252525] w-fit">
                        <span className="text-sm text-white">Wait</span>
                        <ChevronDown size={14} className="text-muted-foreground" />
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs">
                        <span className="text-sm text-muted-foreground">Second to wait</span>
                        <div className="ml-auto">
                          <ChevronsUpDown size={14} className="text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <button className="p-1.5 hover:bg-[#252525] rounded transition-colors">
                      <Play size={14} className="text-muted-foreground" />
                    </button>
                    <button className="p-1.5 hover:bg-[#252525] rounded transition-colors">
                      <Info size={14} className="text-muted-foreground" />
                    </button>
                    <button className="p-1.5 hover:bg-[#252525] rounded transition-colors">
                      <Trash2 size={14} className="text-red-800" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between w-full items-start gap-3 px-2">
                  <div className="flex gap-3 w-[80%]">
                    <div className="mt-2">
                      <CheckCircle2 className="text-muted-foreground h-5 w-5" />
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                      <input
                        type="text"
                        placeholder="Element . selector exists"
                        className="flex-1 w-full px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
                      />
                      <div className="space-y-3 w-full">
                        <div className="flex w-full gap-3">
                          <GitBranch className="text-muted-foreground h-5 w-5 mt-2" />
                          <div className="flex flex-col w-full gap-3">
                            <div className="flex gap-5 items-center w-full">
                              <p className="text-muted-foreground">if</p>
                              <input
                                type="text"
                                placeholder="condition"
                                className="flex-1 px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
                              />
                              <div className="flex items-center gap-2 px-3">
                                <span className="text-sm text-muted-foreground">then</span>
                                <ChevronDown size={14} className="text-muted-foreground" />
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Settings className="text-muted-foreground h-5 w-5" />
                              <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs">
                                <span className="text-sm text-white">extracted value</span>
                              </div>
                              <input
                                type="text"
                                placeholder="Variable name"
                                className="flex-1 px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
                              />
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-muted-foreground">else</span>
                              <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs cursor-pointer hover:bg-[#252525]">
                                <span className="text-sm text-white">Wait</span>
                                <ChevronDown size={14} className="text-muted-foreground" />
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Hand className="text-muted-foreground h-5 w-5" />
                              <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs">
                                <span className="text-sm text-muted-foreground">Second to wait</span>
                                <div className="ml-auto">
                                  <ChevronDown size={14} className="text-muted-foreground" />
                                </div>
                              </div>
                            </div>
                          </div>
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

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-border/40 px-2 py-2 flex items-center gap-1 shadow-lg">
            <button className="p-2.5 bg-[#6E4FFF] transition-colors">
              <FileText size={20} className="text-white" />
            </button>
            <button className="p-2.5 hover:bg-[#2a2a2a] transition-colors">
              <GitBranch size={20} className="text-muted-foreground" />
            </button>
            <button className="p-2.5 hover:bg-[#2a2a2a] transition-colors">
              <Settings size={20} className="text-muted-foreground" />
            </button>
            <button className="p-2.5 hover:bg-[#2a2a2a] transition-colors">
              <Hand size={20} className="text-muted-foreground" />
            </button>
            <button className="p-2.5 hover:bg-[#2a2a2a] transition-colors">
              <CheckCircle2 size={20} className="text-muted-foreground" />
            </button>
            <button className="p-2.5 hover:bg-[#2a2a2a] transition-colors">
              <Undo size={20} className="text-muted-foreground" />
            </button>
            <div className="w-px h-6 bg-zinc-700 mx-2" />
            <button className="p-2.5 bg-[#270C17] transition-colors">
              <div className="rounded-full flex items-center justify-center p-0.5 border border-pink-500">
                <Circle size={12} className="text-pink-500" fill="currentColor" />
              </div>
            </button>
          </div>
        </div>

        <div className="w-[700px] min-w-[50%] bg-background flex flex-col">
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

          <div className="flex-1 flex items-center justify-center p-6">
            <div className="w-[330px]">
              <Iphone />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
