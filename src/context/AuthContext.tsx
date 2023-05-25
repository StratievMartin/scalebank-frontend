import React, { createContext, useReducer, useEffect, ReactNode } from 'react'
import { useCookies } from 'react-cookie'

type User = {
  email: string
  accessToken: string
}

type AuthState = {
  user: User | null
}

type AuthAction = {
  type: 'LOGIN' | 'LOGOUT'
  payload?: User
}

type AuthContextType = {
  dispatch: React.Dispatch<AuthAction>
} & AuthState

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

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const initialState: AuthState = {
    user: null,
  }
  const [cookies] = useCookies()

  useEffect(() => {
    if (cookies) {
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
