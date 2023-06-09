import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { CookiesProvider } from 'react-cookie'
import { AuthContextProvider } from './context/AuthContext.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </AuthContextProvider>
    </CookiesProvider>
  </React.StrictMode>
)
