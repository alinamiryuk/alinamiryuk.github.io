import React from 'react'
import { ReactComponent as Auth } from 'assets/images/auth.svg'
import { Image } from 'components/shared/ImagePage/ImagePageTypes'

interface ImageProps {
  image: Image
}

export const ImageSvg: React.FC<ImageProps> = ({ image }) => {
  switch (image) {
    case Image.AUTH: {
      return <Auth />
    }
    default:
      return null
  }
}
