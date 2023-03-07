import React from 'react'

export enum ButtonVariation {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export enum ButtonIcon {
  LOGIN = 'LOGIN',
}

export interface IButtonStateProps {
  title?: string
  variation: ButtonVariation
  icon?: ButtonIcon
  isDisabled?: boolean
  isSubmit?: boolean
}

export interface IButtonDispatchProps {
  onClick(event: React.MouseEvent): void
}

export interface IButtonProps extends IButtonStateProps, IButtonDispatchProps {}
