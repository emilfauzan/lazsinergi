"use client"
import { Typography } from '@material-tailwind/react'
import { Button } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LAZSlogonametagline5 from "@/public/images/companyLogo/LAZSlogonametagline5.png";
import Image from 'next/image';

import React from 'react'

function Home() {
    return (
        <>

            {/* Hero */}
            <header>
                <div className="bg-[url('/images/herobackground.png')] bg-center bg-cover bg-no-repeat">
                    <div className=' bg-green-500/50'>
                        <div className='mb-4 mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 grid grid-cols-2'>
                            <div>
                                <Typography variant='h1' color='white' className='my-4 mx-8' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><strong> Sedekah</strong> yang <br /><strong>Amanah</strong></Typography>
                                <Typography color='white' style={{ fontStyle: 'italic' }} className='my-4 mx-8' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>lazsinergi.org</Typography>
                                <div className=' items-center'>
                                    <div className='mx-8 my-4 py-2'>
                                        <Button variant="contained" startIcon={<WhatsAppIcon />} color='success' size="large" className='px-6 font-semibold'>Hubungi Kami</Button>
                                    </div>
                                </div>
                            </div>
                            <div className='content-center m-auto'>
                                <div className='px-6 mx-2 py-4'>
                                    <Image
                                        src={LAZSlogonametagline5}
                                        width={192}
                                        height={192}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        quality={100}
                                        alt="Company Logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            {/* Tabel */}
            {/* <div className='my-4 mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                <h2 className='my-4 text-center'>Lorem, ipsum.</h2>
                <div className='grid grid-cols-1'>
                    <h2 className='py-4 text-center bg-orange-100/50 px-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, enim eaque? Adipisci ad excepturi quidem distinctio repellat iure aliquid temporibus, debitis consequatur reiciendis optio quod, sit dolorum earum repellendus. Dolorum, tenetur tempore quia veniam aspernatur odit ad quibusdam cumque accusamus reiciendis? Dolor dolorem eligendi quibusdam sapiente! Quis voluptas incidunt iste, repellat quibusdam a fugiat. Dolorum, ipsam consequatur cupiditate corporis accusamus deleniti! Vero veniam corporis, dolores praesentium quasi nostrum facilis eligendi sunt dolorum saepe, consequuntur reprehenderit doloribus quidem repudiandae unde, aliquid fugiat quaerat velit? Praesentium impedit veniam aliquid dolore, nam, quae quisquam animi eaque tenetur rem recusandae quidem at dicta consequuntur!</h2>
                </div>
            </div> */}

            {/* Capaian */}
            <div className='my-4 mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                <Typography variant='lead' className='my-4 text-center' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Capaian Kami</Typography>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                    <div className="bg-[url('/images/assets/ekonomi1.png')] bg-center bg-cover bg-no-repeat content-center rounded-md">
                        <div className="bg-orange-100/50 h-full w-full justify-items-center">
                            <Typography variant='h3' className='pt-4 text-center px-4' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <strong>11.751 </strong> orang
                            </Typography>
                            <Typography variant='lead' className='pb-4 text-center px-4' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Jumlah <strong>Muzzaki & Munfiq </strong>
                            </Typography>
                        </div>
                    </div>

                    <div className="bg-[url('/images/assets/murid1.jpeg')] bg-center bg-cover bg-no-repeat content-center rounded-md">
                        <div className="bg-orange-100/50 h-full w-full justify-items-center">
                            <Typography variant='h3' className='pt-4 text-center px-4' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <strong>24.125 </strong> orang
                            </Typography>
                            <Typography variant='lead' className='pb-4 text-center px-4' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Jumlah <strong>Mustahik </strong>
                            </Typography>
                        </div>
                    </div>

                    <div className="bg-[url('/images/assets/mitra1.png')] bg-center bg-cover bg-no-repeat content-center rounded-md">
                        <div className="bg-orange-100/50 h-full w-full justify-items-center">
                            <Typography variant='h3' className='pt-4 text-center px-4' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Sebanyak <strong>16 </strong>
                            </Typography>
                            <Typography variant='lead' className='pb-4 text-center px-4' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Jumlah <strong>Mitra </strong>
                            </Typography>
                        </div>
                    </div>

                </div>
            </div>

            {/* Hubungi */}
            <div className='my-4 mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 '>
                <Typography variant='lead' className='my-4 text-center' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Hubungi Kami</Typography>
                <div className='grid grid-cols-2 gap-6'>
                    <div className="bg-[url('/images/assets/20.png')] bg-center bg-cover bg-no-repeat rounded-md ">
                        <div className="bg-green-100/50 h-full justify-items-center">
                        </div>
                    </div>
                    <div className='bg-[#F1F5F9]'>
                        <Typography variant='paragraph' className='mx-4 my-6' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Silahkan hubungi kami untuk informasi lebih lanjut.
                        </Typography>
                        <div className='flex mx-4 my-6'>

                            <Typography variant='h6' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> Admin Sinergi <br /> +62 853 4968 8826 </Typography>
                            <Typography variant='paragraph' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                (via WhatsApp)
                            </Typography>
                        </div>
                    </div>
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