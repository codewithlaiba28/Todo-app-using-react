import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Features from './pages/Features.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import TodoApp from './pages/Todo.jsx'

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/features' element={<Features />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
        <Route path='/todo' element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App