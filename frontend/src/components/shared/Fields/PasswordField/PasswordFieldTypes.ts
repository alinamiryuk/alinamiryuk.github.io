import React from 'react'

export interface IPasswordFieldStateProps {
  fieldName: string
  label: string
  value: string
  placeholder?: string
  isError?: boolean
  errorMessage?: string
}

export interface IPasswordFieldDispatchProps {
  onChange(event: React.ChangeEvent): void
}

export interface IPasswordFieldProps
  extends IPasswordFieldStateProps,
    IPasswordFieldDispatchProps {}
