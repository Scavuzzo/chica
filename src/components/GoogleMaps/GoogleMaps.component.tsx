import React, { useEffect, useRef } from 'react'
import { css } from '@mui/material';
import Head from 'next/head';
import useOnScreen from '../../hooks/useOnScreen';

interface GoogleMapsProps {
  src: string;
}

const GoogleMaps = ({src}: GoogleMapsProps) => {
  const mapRef = useRef(null);
  const onScreen = useOnScreen({ref:mapRef})

  useEffect(() => {
    if (onScreen) {
      const frame = document.createElement('iframe');
      frame.width = '100%';
      frame.height = '100%';
      frame.title = 'GoogleMaps';
      frame.allowFullscreen = true;
      frame.src = mapRef.current.getAttribute('data-src');
      mapRef.current.appendChild(frame);
    }
  }, [onScreen]);
  

  return (
    <>
      <div 
        ref={mapRef}
        data-src={src}
        css={css`
          background: url(/map-small.jpg);
          background-repeat: none;
          background-size: cover;
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