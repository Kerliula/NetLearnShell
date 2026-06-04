const address = {
  protocol: 'tcp://',
  host: 'netlearnshell.com',
  port: ':443',
  path: '~/master_the_internet',
}

const caretClasses =
  'inline-block w-px h-3 bg-text-primary shrink-0 animate-[blink_1.1s_step-end_infinite]'

const Caret = () => <span className={caretClasses} />

const logoClasses = {
  root: 'px-sidebar-x py-md select-none font-mono',
  addressBar: 'flex items-center',
  statusDot: 'w-2 h-2 mr-3 rounded-full bg-[#00ff41] shadow-[0_0_6px_#00ff41] shrink-0',
  protocol: 'text-text-tertiary text-xs',
  host: 'text-text-primary text-xs font-medium',
  port: 'text-text-tertiary text-xs',
  pathRow: 'flex items-center space-x-md mt-1',
  prompt: 'text-accent text-xs font-semibold shrink-0',
  path: 'text-text-tertiary text-xs truncate',
}

export const Logo = () => (
  <div className={logoClasses.root}>
    <div className={logoClasses.addressBar}>
      <span className={logoClasses.statusDot} />
      <span className={logoClasses.protocol}>{address.protocol}</span>
      <span className={logoClasses.host}>{address.host}</span>
      <span className={logoClasses.port}>{address.port}</span>
      <span className="flex-1" />
      <Caret />
    </div>
    <div className={logoClasses.pathRow}>
      <span className={logoClasses.prompt}>&gt;</span>
      <span className={logoClasses.path}>{address.path}</span>
    </div>
  </div>
)
