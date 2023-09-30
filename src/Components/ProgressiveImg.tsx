import { useEffect, useState } from "react";

const placeholder = `${process.env.PUBLIC_URL}/favicon.ico`;

interface Props {
  src: string;
  alt: string;
}

const ProgressiveImg = ({ src, alt, ...props }: Props) => {
  const [imgSrc, setImgSrc] = useState(placeholder);
  console.log({ imgSrc });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img {...{ src: imgSrc, ...props }} alt={alt} width={96} height={96} />
  );
};

export default ProgressiveImg;
