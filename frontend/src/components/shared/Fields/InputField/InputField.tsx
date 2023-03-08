import React from 'react'
import { ReactComponent as EyeOpen } from 'assets/icons/eye-open.svg'
import { ReactComponent as EyeClosed } from 'assets/icons/eye-closed.svg'
import { useDebounce } from 'lib/hooks/useDebounce'
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
  const debouncedIsValid = useDebounce(isValid, 1000)
  const isPassword = type === 'password'
  const passwordFieldType = isVisible ? 'text' : 'password'
  const inputType = isPassword ? passwordFieldType : type
  const visibilityController = () => setIsVisible(!isVisible)
  const inputClassName = `input-field input-field-${
    !!errorMessage && !debouncedIsValid ? 'error' : ''
  }`

  return (
    <LabeledField
      label={label}
      errorMessage={errorMessage}
      isValid={debouncedIsValid}
    >
      <input
        className={inputClassName}
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
