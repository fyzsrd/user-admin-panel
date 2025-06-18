import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../utils/userSlice'

function Navbar() {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleLogOut=()=>{
        dispatch(logout())
        navigate('/')

    }


    return (
        <nav className="bg-gray-400 shadow-md px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">MyApp
                </h1>

                <div className="flex justify-between gap-3">
                  <button className='bg-red-500 px-2 py-1 text-white' onClick={handleLogOut}>Log Out</button>
                  <h1>accounts</h1>
                </div>
            </div>
        </nav>
    )
}

export default Navbar