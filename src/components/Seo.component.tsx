import React from 'react'

interface SeoProps {
    title: string,
    description: string,
    structuredData: {
        name: string,
        alternateName: string,
        url: string,
        phone: string,
        socialLinks: string[]
    }
}

const Seo = ({title, description, structuredData}: SeoProps) => {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": structuredData.name,
        "alternateName": structuredData.alternateName,
        "url": structuredData.url,
        "logo": "https://chicakitchen.com/circle-logo.webp",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": structuredData.phone,
            "contactType": "customer service",
            "areaServed": "AR",
            "availableLanguage": "es"
        },
        "sameAs": structuredData.socialLinks
    }
    return (
        <>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <script type="application/ld+json">
                {JSON.stringify(organizationData)}
            </script>
        </>
    )
}

export default Seo