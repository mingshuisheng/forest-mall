import {FC} from "react"
import NextImage from "next/image"

export type ImageProps = {
  src: string
  alt?: string
  className?: string
}

export const Image: FC<ImageProps> = ({src, alt = "", className = ""}) => {
  return (
    <NextImage width={100} height={100} src={src} alt={alt} className={className}/>
  )
}
