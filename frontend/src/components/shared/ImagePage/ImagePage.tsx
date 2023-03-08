import React from 'react'
import { ImageSvg } from 'lib/helpers/image'
import { IImagePageProps } from './ImagePageTypes'
import './ImagePage.css'

export const ImagePage: React.FC<React.PropsWithChildren<IImagePageProps>> = ({
  image,
  children,
}) => {
  return (
    <div className="image-page">
      {image && (
        <div className="image-page-image">
          <ImageSvg image={image} />
        </div>
      )}
      <div className="image-page-content">{children}</div>
    </div>
  )
}
