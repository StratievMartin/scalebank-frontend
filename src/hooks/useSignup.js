import { useAuthContext } from './useAuthContext'
import { signUp } from '../services/accountService'
import { useCookies } from 'react-cookie'

export const useSignup = () => {
  const [cookies, setCookie] = useCookies()
  const { dispatch } = useAuthContext()

  const signup = async (values) => {

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
}
