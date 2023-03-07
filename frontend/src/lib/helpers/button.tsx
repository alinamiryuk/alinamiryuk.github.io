import React from 'react'
import { ReactComponent as Login } from 'assets/icons/login.svg'
import {
  ButtonIcon,
  ButtonVariation,
} from 'components/shared/Button/ButtonTypes'
import { TypographyColor } from 'components/shared/Typography/TypographyTypes'

interface ButtonIconProps {
  icon: ButtonIcon
}

export const ButtonSvg: React.FC<ButtonIconProps> = ({ icon }) => {
  switch (icon) {
    case ButtonIcon.LOGIN: {
      return <Login />
    }
    default:
      return null
  }
}

interface ButtonClassNameProps {
  variation: ButtonVariation
  title?: string
}

export const getButtonClassName = (props: ButtonClassNameProps): string => {
  const { variation, title } = props
  let className = `button${title ? ' button-titled' : ''}`
  switch (variation) {
    case ButtonVariation.PRIMARY: {
      className += ' button-variation-primary'
      break
    }
    case ButtonVariation.SECONDARY: {
      className += ' button-variation-secondary'
      break
    }
  }
  return className
}

interface ButtonTypographyColorProps {
  variation: ButtonVariation
  title?: string
}

export const getButtonTypographyColor = (
  props: ButtonTypographyColorProps,
): TypographyColor => {
  const { variation } = props
  switch (variation) {
    case ButtonVariation.PRIMARY: {
      return TypographyColor.SECONDARY
    }
    case ButtonVariation.SECONDARY: {
      return TypographyColor.PRIMARY
    }
    default:
      return TypographyColor.SECONDARY
  }
}
