import React from 'react'
import { Typography } from 'components/shared/Typography/Typography'
import { TypographyVariant } from 'components/shared/Typography/TypographyTypes'
import {
  ButtonSvg,
  getButtonClassName,
  getButtonTypographyColor,
} from 'lib/helpers/button'
import { IButtonProps } from './ButtonTypes'
import './Button.css'

export const Button: React.FC<IButtonProps> = ({
  title,
  variation,
  icon,
  isDisabled = false,
  isSubmit = false,
  onClick,
}) => {
  const buttonClassName = getButtonClassName({ variation, title, isDisabled })
  const buttonTypographyColor = getButtonTypographyColor({ variation })
  const buttonType = isSubmit ? 'submit' : 'button'

  return (
    <div className="button-wrapper">
      <button
        className={buttonClassName}
        type={buttonType}
        onClick={onClick}
        disabled={isDisabled}
      >
        {icon && <ButtonSvg icon={icon} />}
        {title && (
          <Typography
            title={title}
            variant={TypographyVariant.BASIC_BOLD_TEXT}
            color={buttonTypographyColor}
          />
        )}
      </button>
    </div>
  )
}
