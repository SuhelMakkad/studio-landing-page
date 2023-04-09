import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export type ImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

const Image = (props: ImageProps) => {
  return <img {...props} />;
};

export default Image;
