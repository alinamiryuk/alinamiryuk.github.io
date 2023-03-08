import React from 'react'
import { Typography } from 'components/shared/Typography/Typography'
import {
  TypographyColor,
  TypographyVariant,
} from 'components/shared/Typography/TypographyTypes'
import { ILabeledFieldProps } from './LabeledFieldTypes'
import './LabeledField.css'

export const LabeledField: React.FC<
  React.PropsWithChildren<ILabeledFieldProps>
> = ({ label, isValid = false, errorMessage, children }) => {
  return (
    <div className="labeled-field">
      <Typography title={label} variant={TypographyVariant.BASIC_BOLD_TEXT} />
      <div className="labeled-field-wrapper">
        {!!errorMessage && !isValid && (
          <Typography
            className="labeled-field-error-message"
            title={errorMessage}
            variant={TypographyVariant.SMALL_TEXT}
            color={TypographyColor.DANGER}
          />
        )}
        {children}
      </div>
    </div>
  )
}
