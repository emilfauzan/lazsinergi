"use client"
import { Carousel, Typography } from '@material-tailwind/react'
import { Button } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LAZSlogonametagline5 from "@/public/images/companyLogo/LAZSlogonametagline5.png";
import Image from 'next/image';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
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
            <Typography variant='lead' className='mt-4 text-center' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Mitra Kami</Typography>
            <div className='grid grid-cols-1 pb-4 my-4'>
                <Carousel
                    className="rounded-xl mb-4" loop autoplay autoplayDelay={5000}
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/40"}`}
                                    onClick={() => setActiveIndex(i)} />
                            ))}
                        </div>
                    )} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >

                    <div className='grid grid-cols-2 md:grid-cols-6 gap-4 my-4 mx-12 justify-items-center align-items-center m-auto'>
                        <img
                            src="/images/assets/mitraperusahaan/pertamina.png"
                            alt="pertamina"
                            className="max-h-32 m-auto"
                        />
                        <img
                            src="/images/assets/mitraperusahaan/trakindocat.png"
                            alt="trakindocat"
                            className="max-h-32 m-auto"
                        />
                        <img
                            src="/images/assets/mitraperusahaan/pemda.png"
                            alt="pemda"
                            className="max-h-32 m-auto"
                        />
                        <img
                            src="/images/assets/mitraperusahaan/dkmpama.png"
                            alt="dkmpama"
                            className="max-h-32 m-auto"
                        />
                        <img
                            src="/images/assets/mitraperusahaan/pama.png"
                            alt="pama"
                            className="max-h-32 m-auto"
                        />
                        <img
                            src="/images/assets/mitraperusahaan/sucofindo.png"
                            alt="sucofindo"
                            className="max-h-32 m-auto"
                        />
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-6 gap-4 my-4 mx-12 justify-items-center align-items-center'>
                        <img
                            src="/images/assets/mitraperusahaan/indexim.png"
                            alt="indexim"
                            className="max-h-32 m-auto"
                        />
                        <img
                            src="/images/assets/mitraperusahaan/kpc.png"
                            alt="kpc"
                            className="max-h-32 m-auto"
                        />
                        <img
                            src="/images/assets/mitrayayasan/bmmqa.png"
                            alt="bmmqa"
                            className="max-h-32 m-auto"
                        />
                        <img
                            src="/images/assets/mitrayayasan/dpu.png"
                            alt="dpu"
                            className="max-h-32 m-auto"
                        />
                        <img
                            src="/images/assets/mitrayayasan/kutimaction.png"
                            alt="kutimaction"
                            className="max-h-32 m-auto"
                        />
                        <img
                            src="/images/assets/mitrayayasan/paqusata.png"
                            alt="paqusata"
                            className="max-h-32 m-auto"
                        />
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 my-4 mx-12 justify-items-center align-items-center'>
                        <img
                            src="/images/assets/mitrayayasan/sangatta.png"
                            alt="sangatta"
                            className="max-h-32 m-auto"
                        />
                        <img
                            src="/images/assets/mitrayayasan/salimah.png"
                            alt="salimah"
                            className="max-h-32 m-auto"
                        />
                        <img
                            src="/images/assets/mitrayayasan/upzisdaarsa.png"
                            alt="upzisdaarsa"
                            className="max-h-32 m-auto"
                        />
                    </div>
                </Carousel>
            </div>

            {/* Warning */}
            <div className='bg-orange-400/80'>
                <div className='my-4 mx-auto max-w-screen-2xl p-4 md:p-6 flex items-center justify-center'>
                    <div className=''>
                        <WarningAmberRoundedIcon fontSize='large' />
                    </div>
                    <Typography variant='h6' className='ml-4' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        PERHATIAN! <br />
                        LAZ SINERGI tidak menerima dana donasi dari dana pencurian, cuci uang, dan dana yang dilarang oleh syariat.
                    </Typography>
                </div>

            </div>
        </>
    )
}

export default Home