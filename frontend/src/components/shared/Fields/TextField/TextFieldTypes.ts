import React from 'react'

export interface ITextFieldStateProps {
  fieldName: string
  label: string
  value: string
  placeholder?: string
  isDisabled?: boolean
  isEmail?: boolean
  isError?: boolean
  errorMessage?: string
}

export interface ITextFieldDispatchProps {
  onChange(event: React.ChangeEvent): void
}

export interface ITextFieldProps
  extends ITextFieldStateProps,
    ITextFieldDispatchProps {}
