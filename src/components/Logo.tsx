const PROTOCOL = 'tcp://'
const HOST = 'netlearnshell.com'
const PORT = ':443'
const PATH = '~/master_the_internet'

export const Logo = () => (
  <div className="flex items-center space-x-sm select-none">
    <div className="flex flex-col gap-sm">
      <h1 className="flex items-center font-mono text-sm font-semibold leading-none tracking-tight">
        <span className="text-text-tertiary opacity-50 group-hover:opacity-100 transition-opacity">
          {PROTOCOL}
        </span>
        <span className="text-text-primary">{HOST}</span>
        <span className="text-accent">{PORT}</span>
        <span className="inline-block w-1.5 h-3.5 bg-accent ml-1 animate-pulse" />
      </h1>

      <p className="flex items-center font-mono text-[10px] font-medium leading-none tracking-widest text-text-tertiary uppercase">
        <span className="text-accent mr-1 font-semibold">{'>'}</span>
        <span>{PATH}</span>
      </p>
    </div>
  </div>
)
