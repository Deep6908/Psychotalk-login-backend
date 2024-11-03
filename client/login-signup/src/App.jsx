import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { userContextProvider } from '../context/userContext'


axios.defaults.baseURL = 'http://localhost:9000';
axios.defaults.withCredentials = true

function App() {
  return (
    <userContextProvider>
      <NavBar />
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </userContextProvider>
  )
}

export default App

