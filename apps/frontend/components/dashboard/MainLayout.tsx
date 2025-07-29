import { PlusIcon } from 'lucide-react'
import React from 'react'

const MainLayout = () => {
  return (
    <div className='h-screen flex flex-1 w-full p-2'>
      <div className='w-full flex flex-col border border-rose-500/40 rounded-sm'>
        {/* Top Bar */}
        <div className='w-full h-14 border-b border-rose-500/40 flex items-center justify-between px-4 text-neutral-100 text-shadow-xs text-shadow-white/10'>
          <div className='text-[15px]'>
            Your Websites
          </div>
          <div className='flex items-center justify-center gap-1 hover:bg-neutral-800 transition-all duration-300 px-2 py-1 rounded-sm cursor-pointer group'>
            <PlusIcon size={14} className='text-neutral-400 group-hover:text-neutral-100 transition-all duration-300' />
            <span className='text-[15px]'>Add Website</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default MainLayout