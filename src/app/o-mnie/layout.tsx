import SideNav from '@/components/ui/SideNav'
import React from 'react'


// NextJS complains if this file is deleted...

function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-slate-200 w-screen min-h-screen px-16 pt-16">
      <div className="max-w-screen-xl m-auto">
        <SideNav />
        {children}
      </div>
    </div>
  )
}

export default layout