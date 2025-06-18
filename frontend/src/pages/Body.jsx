import React from 'react'
import Navbar from '../components/Navbar'
import Auth from './Auth'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Home'
import PrivateRoute from '../utils/PrivateRoute'
import AdminPage from './AdminPage'
import AdminRoute from '../routes/AdminRoute'
import UserRoute from '../routes/UserRoute'
import PublicRoute from '../routes/PublicRoute'


function Body() {

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:(
            <PublicRoute>
                <Auth />
            </PublicRoute>
        )
    },
    {
        path:'/home',
        element:(
            <UserRoute >
                <Home />
            </UserRoute>
                
            
        )
    },
    {
        path:'/admin',
        element:(
            <AdminRoute >
                <AdminPage />
            </AdminRoute>
        )
    }
])
  return (
     <div>
        <RouterProvider router={appRouter} />
     </div>
  )
}

export default Body