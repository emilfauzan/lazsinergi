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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6489127937493!2d117.53289487494048!3d0.527993999466843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320a35b5f8cd94d5%3A0x4073d181d20e9b1a!2sLAZ%20SINERGI!5e0!3m2!1sen!2sid!4v1712294616794!5m2!1sen!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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