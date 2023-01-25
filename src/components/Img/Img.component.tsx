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
        <picture>
            <source media='(min-width: 768px)' srcSet={require(`images/home-contact1.jpg?webp`)} type="image/webp" />
            <source media='(min-width: 768px)' srcSet={require(`images/home-contact1.jpg?webp`)} type="image/webp" />
            <source media='(min-width: 768px)' srcSet={require('images/home-contact1.jpg')} type="image/jpeg" />
            <source media='(max-width: 767px)' srcSet={require('../../images/home-contact1.jpg')} type="image/jpeg" />
            <img src={require('images/home-contact1.jpg')} alt={alt} loading={loading} />
        </picture>
    )
}

export default Img;