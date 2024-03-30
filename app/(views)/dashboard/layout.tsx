"use client"

import Footer from '@/components/common/Footer/Footer'
import Topbar from '@/components/navigation/Topbar/Topbar'
import React, { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {

    return (
        <>
            <main >
                <div suppressHydrationWarning={true} className='subpixel-antialiased dark:bg-boxdark-2 dark:text-bodydark relative flex flex-1 flex-col 
                overflow-y-auto overflow-x-hidden'>
                    <Topbar />
                    {/* <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 min-h-screen grow 
                        bg-[#F1F5F9]">
                            {children}
                        </div> */}
                    {children}
                    {/* Footer right here */}
                    <Footer />
                </div>
            </main >
        </>
    )
}
