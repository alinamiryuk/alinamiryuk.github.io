import React from 'react'
import { ReactComponent as EyeOpen } from 'assets/icons/eye-open.svg'
import { ReactComponent as EyeClosed } from 'assets/icons/eye-closed.svg'
import { LabeledField } from 'components/shared/Fields/LabeledField/LabeledField'
import { IInputFieldProps } from './InputFieldTypes'
import './InputField.css'

export const InputField: React.FC<IInputFieldProps> = ({
  type,
  label,
  value,
  placeholder = '',
  errorMessage = '',
  isValid = false,
  onChange,
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const isPassword = type === 'password'
  const passwordFieldType = isVisible ? 'text' : 'password'
  const inputType = isPassword ? passwordFieldType : type
  const visibilityController = () => setIsVisible(!isVisible)
  const passwordClassName = `input-field input-field-${
    !!errorMessage ? 'error' : ''
  }`

  return (
    <LabeledField
      label={label}
      errorMessage={errorMessage}
      isPassword={isPassword}
      isValid={isValid}
    >
      <input
        className={passwordClassName}
        placeholder={placeholder}
        type={inputType}
        value={value}
        onChange={onChange}
      />
      {isPassword && (
        <div className="input-field-controller" onClick={visibilityController}>
          {isVisible ? <EyeOpen /> : <EyeClosed />}
        </div>
      )}
    </LabeledField>
  )
}
