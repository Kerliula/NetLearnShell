import { Lock } from 'lucide-react'

const PROTOCOL = 'tcp://'
const HOST = 'netlearnshell.com'
const PORT = ':443'
const PATH = '~/master_the_internet'

const Caret = () => (
  <span className="inline-block w-px h-3 bg-text-primary ml-0.5 shrink-0 animate-[blink_1.1s_step-end_infinite]" />
)

export const Logo = () => (
  <div className="px-sidebar-x py-md select-none group">
    <div className="flex w-full rounded-lg bg-gradient-to-br from-bg-primary to-bg-primary border border-border/60 font-mono overflow-hidden shadow-sm hover:shadow-md hover:border-border transition-all duration-300">
      {/* NLS Badge */}
      <div className="shrink-0 w-16 flex flex-col items-center justify-center border-r border-border relative overflow-hidden bg-surface-active/50">
        <div className="flex flex-col items-center z-10">
          <span className="text-[11px] text-accent font-bold leading-none mb-0.5 opacity-80">{'>'}</span>
          <span className="text-text-primary font-black tracking-tighter text-sm leading-tight">
            NLS
          </span>
        </div>

        <div className="absolute bottom-2 flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_4px_#22c55e]" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_4px_#2d5a8e]" />
        </div>
      </div>

      {/* Terminal Display */}
      <div className="flex flex-col flex-1 min-w-0 cursor-text text-xs">
        <div className="flex items-center gap-2 h-9 px-3 border-b border-border/50 bg-bg-primary">
          <Lock size={13} className="text-green-600 dark:text-green-500 shrink-0 opacity-80" />
          <span className="flex items-center min-w-0 space-x-0">
            <span className="text-text-tertiary opacity-70">{PROTOCOL}</span>
            <span className="text-text-primary font-medium tracking-tight">{HOST}</span>
            <span className="text-text-tertiary opacity-70">{PORT}</span>
          </span>
          <Caret />
        </div>

        <div className="flex items-center gap-1.5 h-7 px-3 bg-surface-active/30">
          <span className="text-accent font-semibold leading-none">{'>'}</span>
          <span className="text-text-tertiary truncate text-xs opacity-75">{PATH}</span>
        </div>
      </div>
    </div>
  </div>
)
