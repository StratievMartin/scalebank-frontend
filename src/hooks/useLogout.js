import { useCookies } from 'react-cookie'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const logout = () => {
    removeCookie('user')
    dispatch({ type: 'LOGOUT' })
  }
  return { logout }
}
