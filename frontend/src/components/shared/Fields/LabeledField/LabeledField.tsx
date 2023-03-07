import React, { PropsWithChildren } from 'react'
import { Typography } from 'components/shared/Typography/Typography'
import { TypographyVariant } from 'components/shared/Typography/TypographyTypes'
import { ILabeledFieldProps } from './LabeledFieldTypes'
import './LabeledField.css'

export const LabeledField: React.FC<PropsWithChildren<ILabeledFieldProps>> = ({
  label,
  isPassword = false,
  isError,
  errorMessage,
  children,
}) => {
  const errorMessageClassName = `labeled-field-error-message ${
    isPassword ? 'labeled-field-error-message-password' : ''
  }`
  return (
    <div className="labeled-field">
      <Typography title={label} variant={TypographyVariant.BASIC_BOLD_TEXT} />
      <div className="labeled-field-wrapper">
        {children}
        {isError && (
          <span className={errorMessageClassName}>{errorMessage}</span>
        )}
      </div>
    </div>
  )
}
