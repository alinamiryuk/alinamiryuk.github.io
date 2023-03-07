export interface ILabeledFieldStateProps {
  label: string
  errorMessage: string
  isValid: boolean
  isPassword?: boolean
}

export interface ILabeledFieldDispatchProps {}

export interface ILabeledFieldProps
  extends ILabeledFieldStateProps,
    ILabeledFieldDispatchProps {}
