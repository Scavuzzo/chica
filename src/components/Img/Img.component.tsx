import Image from 'next/image';
import React from 'react'

interface ImgProps {
    alt: string,
    src?: string,
    loading?: 'eager' | 'lazy',
}

const Img = ({
    alt,
    loading
}: ImgProps) => {

    return (
        <Image src={'/home-contact1.jpg'} alt='lalala' fill/>
    )
}

export default Img;