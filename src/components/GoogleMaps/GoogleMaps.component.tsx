import React, { useEffect, useRef } from 'react'
import { css } from '@mui/material';
import Head from 'next/head';

interface GoogleMapsProps {
  src: string;
}

const GoogleMaps = ({src}: GoogleMapsProps) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const frame = document.createElement('iframe');
    frame.width = '100%';
    frame.height = '100%';
    frame.title = 'GoogleMaps';
    frame.allowFullscreen = true;
    frame.src = mapRef.current.getAttribute('data-src');
    mapRef.current.appendChild(frame);
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" href="/map-small.jpg" as="image" type="image/jpg" />
      </Head>
      <div 
        ref={mapRef}
        data-src={src}
        css={css`
          background: url(/map-small.jpg);
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          iframe {
            border: 0;
          }
        `}
      >
      </div>
    </>
  )
}

export default GoogleMaps