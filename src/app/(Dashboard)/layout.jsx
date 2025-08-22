import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div>
        <div className='grid grid-cols-12'>
            {/* side nav */}
            <div className='grid-cols-3'>
                <ul>
                    <li>Profile</li>
                </ul>
            </div>
            {/* right side */}
            <div className='grid-cols-9'>{children}</div>
        </div>
    </div>
  )
}
