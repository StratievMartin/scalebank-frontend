import { useAuthContext } from './useAuthContext'
import { signIn } from '../services/accountService'
import { useCookies } from 'react-cookie'

export const useSignin = () => {
  const [cookies, setCookie] = useCookies()
  const { dispatch } = useAuthContext()

  const signin = async (values) => {
    try {
      let { data } = await signIn(values)
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
  return { signin }
}
