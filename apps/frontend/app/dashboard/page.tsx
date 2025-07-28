'use client';
import Sidebar from '@/components/dashboard/Sidebar'
import React, { useState } from 'react'

const page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className='min-h-screen bg-neutral-900'>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  )
}

export default page