import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  // createBrowserRouter,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/home.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/home',
//     element: <Home />,
//   },
//   {
//     path: '/test',
//     element: <div>test!</div>,
//   },
// ])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<App />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
