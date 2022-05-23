import Image from "next/image";
import { useEffect, useState } from "react";

export const ImageFallback = ({ src, fallbackSrc, ...rest }) => {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  if (!imgSrc) return null

  return (
    <Image
      {...rest}
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          set_imgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        set_imgSrc(fallbackSrc);
      }}
    />
  );
}
