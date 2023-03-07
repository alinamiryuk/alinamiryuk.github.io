import React from 'react'
import { LabeledField } from 'components/shared/Fields/LabeledField/LabeledField'
import { ITextFieldProps } from './TextFieldTypes'
import './TextField.css'

export const TextField: React.FC<ITextFieldProps> = ({
  fieldName,
  label,
  value,
  placeholder = '',
  isEmail = false,
  isDisabled = false,
  isError = false,
  errorMessage,
  onChange,
}) => {
  const fieldType = isEmail ? 'email' : 'text'
  const textFieldClassName = `text-field ${isError ? 'text-field-error' : ''}`
  const errorMessageText = isError && errorMessage ? errorMessage : ''
  return (
    <LabeledField
      label={label}
      isError={isError}
      errorMessage={errorMessageText}
    >
      <input
        className={textFieldClassName}
        placeholder={placeholder}
        name={fieldName}
        type={fieldType}
        disabled={isDisabled}
        value={value}
        onChange={onChange}
      />
    </LabeledField>
  )
}
