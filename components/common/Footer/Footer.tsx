import React from 'react'
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <>
            <div className='bg-green-100/50 '>

                <div className='my-4 mx-auto max-w-screen-2xl p-4 md:p-6 justify-center grid grid-cols-1 md:grid-cols-2'>
                    <div className='grid grid-cols-1 mx-4 my-6'>
                        <img
                            src="/images/companyLogo/LAZSlogonametagline.png"
                            alt="upzisdaarsa"
                            className="max-h-32 m-auto"
                        />
                        <Typography variant='body2' className='text-center md:text-left my-4'>
                            Jl. Dayung No.8, Tlk. Lingga, Kec. Sangatta Utara, Kabupaten Kutai Timur, Kalimantan Timur 75683
                        </Typography>

                        <Button variant="outlined" color='success'>
                            Tentang Kami
                        </Button>

                        <Typography variant='body2' className='text-center md:text-left my-4'>
                            <strong>  +62 853 4968 8826  </strong>-  Admin Sinergi <br />
                            sinergimembangunummat@gmail.com
                        </Typography>

                        <div className='flex gap-2 justify-center md:justify-start'>
                            <IconButton aria-label="delete" size="large">
                                <FacebookIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton aria-label="delete" size="large">
                                <InstagramIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton aria-label="delete" size="large">
                                <YouTubeIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton aria-label="delete" size="large">
                                <WhatsAppIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 mx-4 my-6'>
                        <Typography variant='h6' className='text-center md:text-left my-4'>
                            <strong>Lokasi Kami</strong>
                        </Typography>

                        <div className='mx-4 my-6'>

                        </div>

                        <Typography variant='body2' className='text-center md:text-left my-4'>
                            <strong>  +62 853 4968 8826  </strong>-  Admin Sinergi <br />
                            sinergimembangunummat@gmail.com
                        </Typography>

                        <div className='flex gap-2 justify-center md:justify-start'>
                            <IconButton aria-label="delete" size="large">
                                <FacebookIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton aria-label="delete" size="large">
                                <InstagramIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton aria-label="delete" size="large">
                                <YouTubeIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton aria-label="delete" size="large">
                                <WhatsAppIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-blue-100/50 py-4 text-center'>
                <Typography variant='caption' className='text-center md:text-left my-4'>
                    Copyright © 2024 <strong> LAZ SINERGI </strong> by friedtempeh
                </Typography>
            </div>
        </>
    )
}

export default Footer