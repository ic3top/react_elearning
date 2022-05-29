import Image from 'next/image';
import { useEffect, useState } from 'react';

export function ImageFallback({ src, fallbackSrc, ...rest }) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  if (!imgSrc) return null;

  return (
    <Image
      {...rest}
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          setImgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
