import React from 'react'
import { Button } from 'components/shared/Button/Button'
import {
  ButtonIcon,
  ButtonVariation,
} from 'components/shared/Button/ButtonTypes'
import { TextField } from 'components/shared/Fields/TextField/TextField'
import { PasswordField } from 'components/shared/Fields/PasswordField/PasswordField'
import { Typography } from 'components/shared/Typography/Typography'
import { TypographyVariant } from 'components/shared/Typography/TypographyTypes'
import { useForm } from 'lib/hooks/useForm'
import { Image } from 'components/shared/ImagePage/ImagePageTypes'
import { ImagePage } from 'components/shared/ImagePage/ImagePage'
import './Login.css'

export const Login = () => {
  const { state, inputHandler } = useForm()

  const formHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    // dispatch(fetchLogin(state))
    alert(JSON.stringify(state))
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
        <TextField
          fieldName="email"
          label="Email: "
          placeholder="youremail@mail.ru"
          isEmail
          value={'email' in state ? (state.email as string) : ''}
          onChange={inputHandler}
        />
        <PasswordField
          fieldName="password"
          label="Password: "
          placeholder="123456Aa!"
          value={'password' in state ? (state.password as string) : ''}
          onChange={inputHandler}
        />
        <Button
          title="Login"
          isSubmit
          variation={ButtonVariation.PRIMARY}
          onClick={formHandler}
          icon={ButtonIcon.LOGIN}
        />
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
