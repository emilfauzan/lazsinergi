"use client"

import React, { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {

    return (
        <>
            <main suppressHydrationWarning={true}>
                <div className='subpixel-antialiased dark:bg-boxdark-2 dark:text-bodydark bg-[#F1F5F9]'>
                    <div
                        className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 min-h-screen grow"
                    >
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
}
