import React from 'react'
import { getTypographyClassName } from 'lib/helpers/typography'
import { ITypographyProps } from './TypographyTypes'
import './Typography.css'

export const Typography: React.FC<ITypographyProps> = ({
  title,
  color,
  variant,
  className,
}) => {
  const typographyClassName = `${getTypographyClassName({ variant, color })} ${
    className ?? ''
  }`

  return <div className={typographyClassName}>{title}</div>
}
