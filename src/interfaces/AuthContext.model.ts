import React, { ReactNode } from 'react'
export type User = {
  email: string
  accessToken: string
}

export type AuthState = {
  user: User | null
}

export type AuthAction = {
  type: 'LOGIN' | 'LOGOUT'
  payload?: User
}

export type AuthContextType = {
  dispatch: React.Dispatch<AuthAction>
} & AuthState

export type AuthContextProviderProps = {
  children: ReactNode
}
