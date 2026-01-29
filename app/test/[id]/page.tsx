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
            <button className="flex items-center gap-2 px-5 py-2 bg-linear-to-b from-violet-600 to-purple-900 text-white rounded-xs hover:bg-purple-700 transition-colors text-sm">
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
                    <div className="flex items-start justify-center mt-2">
                      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 14H3.5C3.36739 14 3.24021 13.9473 3.14645 13.8536C3.05268 13.7598 3 13.6326 3 13.5V2.5C3 2.36739 3.05268 2.24021 3.14645 2.14645C3.24021 2.05268 3.36739 2 3.5 2H9.5L13 5.5V13.5C13 13.6326 12.9473 13.7598 12.8536 13.8536C12.7598 13.9473 12.6326 14 12.5 14Z" stroke="#989899" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.5 2V5.5H13" stroke="#989899" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 8.5H10" stroke="#989899" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 10.5H10" stroke="#989899" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

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
                      <Play size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-1.5 hover:bg-[#252525] rounded transition-colors">
                      <Info size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-1.5 hover:bg-[#252525] rounded transition-colors">
                      <Trash2 size={16} className="text-red-800" />
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
                          <div className="mt-2">
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 1.5H4C3.72386 1.5 3.5 1.72386 3.5 2V4C3.5 4.27614 3.72386 4.5 4 4.5H6C6.27614 4.5 6.5 4.27614 6.5 4V2C6.5 1.72386 6.27614 1.5 6 1.5Z" stroke="#989899" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M13 6H11C10.7239 6 10.5 6.22386 10.5 6.5V8.5C10.5 8.77614 10.7239 9 11 9H13C13.2761 9 13.5 8.77614 13.5 8.5V6.5C13.5 6.22386 13.2761 6 13 6Z" stroke="#989899" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M13 11.5H11C10.7239 11.5 10.5 11.7239 10.5 12V14C10.5 14.2761 10.7239 14.5 11 14.5H13C13.2761 14.5 13.5 14.2761 13.5 14V12C13.5 11.7239 13.2761 11.5 13 11.5Z" stroke="#989899" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M5 7.5H10.5" stroke="#989899" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M5 4.5V12C5 12.2652 5.10536 12.5196 5.29289 12.7071C5.48043 12.8946 5.73478 13 6 13H10.5" stroke="#989899" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                          {/* Two-column layout: left for icons/labels, right for inputs */}
                          <div className="flex w-full">
                            {/* Left column - icons and labels */}
                            <div className="flex flex-col gap-2 w-10 shrink-0">
                              <div className="h-10 flex items-center">
                                <span className="text-sm text-muted-foreground">if</span>
                              </div>
                              <div className="h-10 flex items-center">
                                <Settings className="text-muted-foreground h-4 w-4" />
                              </div>
                              <div className="h-10 flex items-center">
                                <span className="text-sm text-muted-foreground">else</span>
                              </div>
                              <div className="h-10 flex items-center">
                                <Hand className="text-muted-foreground h-4 w-4" />
                              </div>
                            </div>
                            {/* Right column - inputs */}
                            <div className="flex flex-col gap-2 flex-1">
                              <div className="flex items-center gap-2 h-10">
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
                              <div className="flex items-center gap-2 h-10">
                                <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs">
                                  <span className="text-sm text-white">extracted value</span>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Variable name"
                                  className="flex-1 px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
                                />
                              </div>
                              <div className="flex items-center gap-2 h-10">
                                <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs cursor-pointer hover:bg-[#252525]">
                                  <span className="text-sm text-white">Wait</span>
                                  <ChevronDown size={14} className="text-muted-foreground" />
                                </div>
                              </div>
                              <div className="flex items-center gap-2 h-10">
                                <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border border-zinc-800 rounded-xs">
                                  <span className="text-sm text-muted-foreground">Second to wait</span>
                                  <div className="ml-auto">
                                    <ChevronsUpDown size={14} className="text-muted-foreground" />
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
              </div>
            ) : (
              <div className="text-muted-foreground text-sm">YAML view goes here</div>
            )}
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-border/40 px-2 py-2 flex items-center gap-1 shadow-lg">
            <button className="p-2.5 bg-[#6E4FFF] transition-colors">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 14H3.5C3.36739 14 3.24021 13.9473 3.14645 13.8536C3.05268 13.7598 3 13.6326 3 13.5V2.5C3 2.36739 3.05268 2.24021 3.14645 2.14645C3.24021 2.05268 3.36739 2 3.5 2H9.5L13 5.5V13.5C13 13.6326 12.9473 13.7598 12.8536 13.8536C12.7598 13.9473 12.6326 14 12.5 14Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.5 2V5.5H13" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 8.5H10" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 10.5H10" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </button>
            <button className="p-2.5 hover:bg-[#2a2a2a] transition-colors">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1.5H4C3.72386 1.5 3.5 1.72386 3.5 2V4C3.5 4.27614 3.72386 4.5 4 4.5H6C6.27614 4.5 6.5 4.27614 6.5 4V2C6.5 1.72386 6.27614 1.5 6 1.5Z" stroke="#989899" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13 6H11C10.7239 6 10.5 6.22386 10.5 6.5V8.5C10.5 8.77614 10.7239 9 11 9H13C13.2761 9 13.5 8.77614 13.5 8.5V6.5C13.5 6.22386 13.2761 6 13 6Z" stroke="#989899" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13 11.5H11C10.7239 11.5 10.5 11.7239 10.5 12V14C10.5 14.2761 10.7239 14.5 11 14.5H13C13.2761 14.5 13.5 14.2761 13.5 14V12C13.5 11.7239 13.2761 11.5 13 11.5Z" stroke="#989899" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 7.5H10.5" stroke="#989899" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 4.5V12C5 12.2652 5.10536 12.5196 5.29289 12.7071C5.48043 12.8946 5.73478 13 6 13H10.5" stroke="#989899" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
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
              <RotateCcw size={20} className="text-muted-foreground" />
            </button>
            <div className="w-px h-6 bg-zinc-700 mx-2" />
            <button className="p-2.5 bg-[#270C17] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#A3285B" stroke-width="0.833333" stroke-miterlimit="10" />
                <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" fill="#A3285B" stroke="#A3285B" stroke-width="0.833333" stroke-miterlimit="10" />
              </svg>

            </button>
          </div>
        </div>

        <div className="w-[700px] min-w-[50%] bg-background flex flex-col">
          <div className="px-6 py-4 flex h-15 items-center justify-between border-b-2 border-sidebar-border">
            <span className="text-sm text-muted-foreground">Playground</span>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-2 rounded-xs py-2 bg-zinc-800 border border-zinc-700 hover:bg-secondary transition-colors text-foreground text-sm">
                <RotateCcw size={16} className="" />
              </button>
              <button className="flex items-center gap-2 px-2 rounded-xs py-2 bg-zinc-800 border border-zinc-700 hover:bg-secondary transition-colors text-foreground text-sm">
                <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.125 1.875H1.875C1.67609 1.875 1.48532 1.95402 1.34467 2.09467C1.20402 2.23532 1.125 2.42609 1.125 2.625V9.375C1.125 9.57391 1.20402 9.76468 1.34467 9.90533C1.48532 10.046 1.67609 10.125 1.875 10.125H10.125C10.3239 10.125 10.5147 10.046 10.6553 9.90533C10.796 9.76468 10.875 9.57391 10.875 9.375V2.625C10.875 2.42609 10.796 2.23532 10.6553 2.09467C10.5147 1.95402 10.3239 1.875 10.125 1.875ZM1.875 7.125H2.625C2.72446 7.125 2.81984 7.08549 2.89016 7.01517C2.96049 6.94484 3 6.84946 3 6.75C3 6.65054 2.96049 6.55516 2.89016 6.48483C2.81984 6.41451 2.72446 6.375 2.625 6.375H1.875V5.625H2.625C2.72446 5.625 2.81984 5.58549 2.89016 5.51516C2.96049 5.44484 3 5.34946 3 5.25C3 5.15054 2.96049 5.05516 2.89016 4.98484C2.81984 4.91451 2.72446 4.875 2.625 4.875H1.875V4.125H2.625C2.72446 4.125 2.81984 4.08549 2.89016 4.01516C2.96049 3.94484 3 3.84946 3 3.75C3 3.65054 2.96049 3.55516 2.89016 3.48484C2.81984 3.41451 2.72446 3.375 2.625 3.375H1.875V2.625H3.75V9.375H1.875V7.125ZM10.125 9.375H4.5V2.625H10.125V9.375Z" fill="white" />
                </svg>

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
