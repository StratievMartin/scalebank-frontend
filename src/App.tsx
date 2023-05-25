import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home.tsx'
import Register from './pages/register.tsx'
import Login from './pages/login.tsx'
import FileUpload from './pages/fileUpload.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Profile from './pages/profile.tsx'
import Statement from './pages/statement.tsx'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<FileUpload />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/statement/:id" element={<Statement />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
