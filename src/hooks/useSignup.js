// import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { signUp } from '../services/accountService'
import { useCookies } from 'react-cookie'

export const useSignup = () => {
  // const [error, setError] = useState(null)
  // const [isLoading, setIsLoading] = useState(null)
  const [cookies, setCookie] = useCookies()
  const { dispatch } = useAuthContext()

  const signup = async (values) => {
    // setIsLoading(true)
    // setError(null)

    try {
      let { data } = await signUp(values)
      let { accessToken, refreshToken } = data

      const cookieValue = {
        email: values.email,
        accessToken: accessToken,
      }

      setCookie('user', cookieValue)
      dispatch({ type: 'LOGIN', payload: cookieValue })
    } catch (error) {
      console.error(error)
    }
  }
  return { signup }
  // , isLoading, errror
}
