import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

function AdminPage() {
    const {user}=useSelector((store)=>store.user)
  return (
    <>
    <Navbar />
    <div>
        
       <div className='m-10'>
         <h1 className='text-2xl' >admin page leck welome cheyyunnu</h1>
        <h1 className='text-3xl'>
            logged in as {user?.name}  and role: {user?.role}
        </h1>
       </div>
    </div>
    </>
  )
}

export default AdminPage