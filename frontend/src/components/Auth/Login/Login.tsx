import React from 'react'
import { Button } from 'components/shared/Button/Button'
import {
  ButtonIcon,
  ButtonVariation,
} from 'components/shared/Button/ButtonTypes'
import { InputField } from 'components/shared/Fields/InputField/InputField'
import { Image } from 'components/shared/ImagePage/ImagePageTypes'
import { ImagePage } from 'components/shared/ImagePage/ImagePage'
import { Typography } from 'components/shared/Typography/Typography'
import { TypographyVariant } from 'components/shared/Typography/TypographyTypes'
import { useForm } from 'lib/hooks/useForm'
import './Login.css'

const formInputs = {
  email: {
    required: true,
    type: 'email',
    label: 'Email: ',
    name: 'login-email',
    placeholder: 'youremail@mail.ru',
    value: '',
    validators: [
      (s: string) => !s.length && `Email field can't be empty!`,
      (s: string) =>
        !/^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          s,
        ) && 'Email address is not valid',
    ],
  },
  password: {
    required: true,
    type: 'password',
    label: 'Password: ',
    name: 'login-password',
    placeholder: '123456Aa!',
    value: '',
    validators: [
      (s: string) => !s.length && `Password field can't be empty!`,
      (s: string) => s.length < 8 && `Password field's min length is 8`,
      (s: string) => !/\d/.test(s) && 'Add at least 1 number',
      (s: string) =>
        !/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(s) &&
        'Add at least 1 special char',
    ],
  },
}

export const Login = () => {
  const { fields, isValid, handleSubmit } = useForm(formInputs)
  const { email, password } = fields
  const formFields = [email, password]
  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    // dispatch(fetchLogin(state))
    alert(`User with ${JSON.stringify(email.value)} email is logged in`)
  }

  const redirect = (e: React.MouseEvent) => {
    e.preventDefault()
    alert('Redirect to Signup page will be here')
  }

  return (
    <ImagePage image={Image.AUTH}>
      <div className="login">
        <Typography
          title="Log in if you have already registered"
          variant={TypographyVariant.H2}
        />
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          {formFields.map((field) => {
            const {
              type,
              label,
              error,
              value,
              setState = () => {},
              placeholder,
              isValid,
            } = field
            return (
              <InputField
                key={label}
                type={type}
                label={label}
                value={value}
                errorMessage={error}
                onChange={setState}
                placeholder={placeholder}
                isValid={isValid}
              />
            )
          })}
          <Button
            title="Login"
            isSubmit
            variation={ButtonVariation.PRIMARY}
            icon={ButtonIcon.LOGIN}
            onClick={onSubmit}
            isDisabled={
              !isValid ||
              !email.isValid ||
              !password.isValid ||
              !email.touched ||
              !password.touched
            }
          />
        </form>
        <Typography
          title="Don't have an account?"
          variant={TypographyVariant.BASIC_TEXT}
        />
        <Button
          title="Signup"
          variation={ButtonVariation.SECONDARY}
          onClick={redirect}
        />
      </div>
    </ImagePage>
  )
}
