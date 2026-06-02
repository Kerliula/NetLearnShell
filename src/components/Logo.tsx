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
    <div className="flex w-full rounded-md bg-bg-primary border border-border font-mono overflow-hidden">
      <div className="shrink-0 w-14 flex flex-col items-center justify-center border-r border-border relative overflow-hidden">
        <div className="flex flex-col items-center z-10">
          <span className="text-[9px] text-accent font-bold leading-none mb-1">{'>'}</span>
          <span className="text-text-primary font-black tracking-tighter text-sm leading-none">
            NLS
          </span>
        </div>

        <div className="absolute bottom-1.5 flex gap-1">
          <div className="w-1 h-1 rounded-full bg-green-500" />
          <div className="w-1 h-1 rounded-full bg-accent" />
        </div>
      </div>

      <div className="flex flex-col flex-1 min-w-0 cursor-text text-xs">
        <div className="flex items-center gap-2 h-[34px] px-2.5 border-b border-border">
          <Lock size={12} className="text-green-700 dark:text-green-500 shrink-0" />
          <span className="flex items-center min-w-0">
            <span className="text-text-tertiary">{PROTOCOL}</span>
            <span className="text-text-primary font-medium">{HOST}</span>
            <span className="text-text-tertiary">{PORT}</span>
          </span>
          <Caret />
        </div>

        <div className="flex items-center gap-1.5 h-[26px] px-2.5">
          <span className="text-accent font-semibold">{'>'}</span>
          <span className="text-text-tertiary truncate">{PATH}</span>
        </div>
      </div>
    </div>
  </div>
)
