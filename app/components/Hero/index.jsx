"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const Banner = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            const playPromise = videoRef.current?.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                    })
                    .catch((error) => {
                        console.error("Autoplay prevented:", error);
                    });
            }
        }
    }, []);

    return (
        <div id="home-section" className='relative'>
            {/* Background Video */}
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="https://www.deca-proprete.fr/wp-content/uploads/video-deca-proprete.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay content */}
            <div className="relative bg-opacity-70" style={{ background: 'rgba(0, 0, 0, 0.4)' }}>
                <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6 h-[600px] flex justify-center items-center">

                    <div className='col-span-6 flex flex-col justify-center'>
                        <h1 className="text-2xl lg:text-5xl font-semibold mb-5 mt-20 text-white text-center">
                            Optez pour un nettoyage innovant et engagé
                        </h1>
                        <p className='text-white lg:text-lg font-normal mb-10 text-center'>
                            Découvrez des services de nettoyage à la pointe de l&#39;innovation, engagés à offrir des résultats exceptionnels.
                        </p>
                        <div className='md:flex align-middle justify-center'>
                            <button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-4 px-6 bg-gradient-to-r from-blue600 to-red600 lg:px-14 mr-6'>
                                <Link href='#cook-section'>GET Devis</Link>
                            </button>

                            <button className='flex border w-full md:w-auto mt-5 md:mt-0 justify-center rounded-full text-xl font-medium items-center py-4 px-10 text-white hover:text-white hover:bg-gradient-to-r from-blue600 to-red600'>
                                <Link href='#about-section'>Contact Us</Link>
                            </button>
                        </div>
                    </div>

                </div>
                {/* SVG Wave */}
                <div className="deca-custom-shape-divider" style={{ transform: 'rotate(180deg)', bottom: '-1px' }}>
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        style={{ width: 'calc(150% + 1.3px)', height: '90px' }}
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"
                            fill="#ffffff"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Banner;