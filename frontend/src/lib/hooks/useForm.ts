import React, { useState } from 'react'

export const useForm = () => {
  const [state, setState] = useState({})

  const inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    e.persist()
    setState((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }))
  }

  return { state, inputHandler }
}
