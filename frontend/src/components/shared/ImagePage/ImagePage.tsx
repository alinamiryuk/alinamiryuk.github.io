import React from 'react'
import { ImageSvg } from 'lib/helpers/image'
import { IImagePageProps } from './ImagePageTypes'
import './ImagePage.css'

export const ImagePage: React.FC<React.PropsWithChildren<IImagePageProps>> = ({
  image,
  children,
}) => {
  console.log(image)
  return (
    <div className="image-page">
      {image && <ImageSvg image={image} />}
      <div className="image-page-content">{children}</div>
    </div>
  )
}
