import React from 'react'
import { ReactComponent as EyeOpen } from 'assets/icons/eye-open.svg'
import { ReactComponent as EyeClosed } from 'assets/icons/eye-closed.svg'
import { LabeledField } from 'components/shared/Fields/LabeledField/LabeledField'
import { IPasswordFieldProps } from './PasswordFieldTypes'
import './PasswordField.css'

export const PasswordField: React.FC<IPasswordFieldProps> = ({
  fieldName,
  label,
  value,
  placeholder = '',
  isError = false,
  errorMessage,
  onChange,
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const fieldType = isVisible ? 'text' : 'password'
  const errorMessageText = isError && errorMessage ? errorMessage : ''
  const visibilityController = () => setIsVisible(!isVisible)
  const passwordClassName = `password-field password-field-${
    isError ? 'error' : 'correct'
  }`

  return (
    <LabeledField
      label={label}
      isError={isError}
      errorMessage={errorMessageText}
      isPassword
    >
      <input
        className={passwordClassName}
        placeholder={placeholder}
        name={fieldName}
        type={fieldType}
        value={value}
        onChange={onChange}
      />
      <div className="password-field-controller" onClick={visibilityController}>
        {isVisible ? <EyeOpen /> : <EyeClosed />}
      </div>
    </LabeledField>
  )
}
