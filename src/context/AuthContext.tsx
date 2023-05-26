import { createContext, useReducer, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import {
  AuthAction,
  AuthContextProviderProps,
  AuthState,
  AuthContextType,
} from '../interfaces/AuthContext.model'
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload || null }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const initialState: AuthState = {
    user: null,
  }
  const [cookies] = useCookies()

  useEffect(() => {
    if (cookies.user) {
      dispatch({ type: 'LOGIN', payload: cookies.user })
    }
  }, [])

  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
