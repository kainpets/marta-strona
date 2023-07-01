import SideNav from '@/components/ui/SideNav'
import React from 'react'

function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-slate-200 w-screen min-h-screen px-16 pt-16">
      <SideNav />
      {children}
    </div>
  )
}

export default layout