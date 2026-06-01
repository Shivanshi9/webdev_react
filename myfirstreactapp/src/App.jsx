import React from 'react'
import Home from './pages/Home'
import Index from './pages/Index'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'

const App = () => {
  return (
    <>
    <Header />
    <Home />
    <About />
    <Index />
    <ContactUs />
    <Login />
    <Register />
    </>
  )
}

export default App