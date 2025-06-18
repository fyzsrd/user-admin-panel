import React from 'react'
import Navbar from '../components/Navbar'
import Counter from '../components/Counter'
import { useSelector } from 'react-redux'

function Home() {
  const user=useSelector((store)=>store.user.user)
  return (
    <div>
        <Navbar />
        <h1>home of user and admin lot to but i will research and do</h1>
        <h1>user is : {user?.name || 'guest'}</h1>
        <h1>and ur logged in as: {user?.role || 'guest'}</h1>

        <Counter />
    </div>
  )
}

export default Home