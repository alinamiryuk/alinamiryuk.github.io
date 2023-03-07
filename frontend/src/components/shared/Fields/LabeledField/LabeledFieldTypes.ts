export interface ILabeledFieldStateProps {
  label: string
  isPassword?: boolean
  isError: boolean
  errorMessage: string
}

export interface ILabeledFieldDispatchProps {}

export interface ILabeledFieldProps
  extends ILabeledFieldStateProps,
    ILabeledFieldDispatchProps {}
