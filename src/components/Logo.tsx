const PROTOCOL = 'tcp://'
const HOST = 'netlearnshell.com'
const PORT = ':443'
const PATH = '~/master_the_internet'

const Caret = () => (
  <span className="inline-block w-px h-3 bg-text-primary shrink-0 animate-[blink_1.1s_step-end_infinite]" />
)

export const Logo = () => (
  <div className="px-sidebar-x py-md select-none font-mono">
    <div className="flex items-center">
      <span className="w-2 h-2 mr-3 rounded-full bg-[#00ff41] shadow-[0_0_6px_#00ff41] shrink-0" />
      <span className="text-text-tertiary text-xs">{PROTOCOL}</span>
      <span className="text-text-primary text-xs font-medium">{HOST}</span>
      <span className="text-text-tertiary text-xs">{PORT}</span>
      <span className="flex-1" />
      <Caret />
    </div>
    <div className="flex items-center space-x-md mt-1">
      <span className="text-accent text-xs font-semibold shrink-0">{'>'}</span>
      <span className="text-text-tertiary text-xs truncate">{PATH}</span>
    </div>
  </div>
)
