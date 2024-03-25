"use client"
import React from 'react'

function Home() {
    return (
        <>

            {/* Hero */}
            <div className='grid grid-cols-2 bg-green-100/50 my-8'>
                <h2 className='my-4 text-center mx-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
                <h2 className='my-4 text-center mx-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
            </div>

            {/* Capaian */}
            <div className='my-4 mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                <h2 className='my-4 text-center'>Lorem, ipsum.</h2>
                <div className='grid grid-cols-3 gap-6'>
                    <h2 className='py-4 text-center bg-orange-100/50 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
                    <h2 className='py-4 text-center bg-orange-100/50 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
                    <h2 className='py-4 text-center bg-orange-100/50 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
                </div>
            </div>

            {/* Hubungi */}
            <div className='my-4 mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 '>
                <h2 className='my-4 text-center'>Lorem, ipsum.</h2>
                <div className='grid grid-cols-2 gap-6'>
                    <h2 className='py-4 text-center bg-green-100/50 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
                    <h2 className='py-4 text-center bg-[#F1F5F9]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
                </div>
            </div>

            {/* Mitra */}
            <h2 className='my-4 text-center'>Lorem, ipsum.</h2>
            <div className='grid grid-cols-1 pb-4'>
                <h2 className='py-4 text-center bg-[#F1F5F9]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
            </div>

            {/* Warning */}
            <div className='grid grid-cols-1'>
                <h2 className='py-4 text-center bg-orange-400/80'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
            </div>

        </>
    )
}

export default Home