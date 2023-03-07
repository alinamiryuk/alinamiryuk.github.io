import React from 'react'

export interface IInputFieldStateProps {
  type: string
  label: string
  value: string
  isValid?: boolean
  placeholder?: string
  errorMessage?: string
}

export interface IInputFieldDispatchProps {
  onChange(event: React.ChangeEvent): void
}

export interface IInputFieldProps
  extends IInputFieldStateProps,
    IInputFieldDispatchProps {}
