import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Profile from '../Pages/Profile'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Signup />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Profile' element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
