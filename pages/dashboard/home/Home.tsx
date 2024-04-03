"use client"
import {
    Input,
    Typography,
    Button
} from '@material-tailwind/react'
import React from 'react'

function Home() {
    return (
        <>

            {/* Hero */}
            <header>
                <div className="bg-[url('/images/herobackground.png')] bg-center bg-cover bg-no-repeat">
                    <div className='grid grid-cols-2 bg-green-100/50'>
                        <div>
                            <h2 className='my-4 text-center mx-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
                        </div>
                        <div>
                            <h2 className='my-4 text-center mx-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
                        </div>
                    </div>
                </div>
            </header>


            {/* Tabel */}
            <div className='my-4 mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                <h2 className='my-4 text-center'>Lorem, ipsum.</h2>
                <div className='grid grid-cols-1'>
                    <h2 className='py-4 text-center bg-orange-100/50 px-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, enim eaque? Adipisci ad excepturi quidem distinctio repellat iure aliquid temporibus, debitis consequatur reiciendis optio quod, sit dolorum earum repellendus. Dolorum, tenetur tempore quia veniam aspernatur odit ad quibusdam cumque accusamus reiciendis? Dolor dolorem eligendi quibusdam sapiente! Quis voluptas incidunt iste, repellat quibusdam a fugiat. Dolorum, ipsam consequatur cupiditate corporis accusamus deleniti! Vero veniam corporis, dolores praesentium quasi nostrum facilis eligendi sunt dolorum saepe, consequuntur reprehenderit doloribus quidem repudiandae unde, aliquid fugiat quaerat velit? Praesentium impedit veniam aliquid dolore, nam, quae quisquam animi eaque tenetur rem recusandae quidem at dicta consequuntur!</h2>
                </div>
            </div>

            {/* Capaian */}
            <div className='my-4 mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                <h2 className='my-4 text-center'>Lorem, ipsum.</h2>
                <div className='grid grid-cols-3 gap-6'>
                    <h2 className='py-4 text-center bg-orange-100/50 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
                    <h2 className='py-4 text-center bg-orange-100/50 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
                    <h2 className='py-4 text-center bg-orange-100/50 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci enim a amet modi doloremque repellendus distinctio sit fugiat obcaecati debitis.</h2>
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