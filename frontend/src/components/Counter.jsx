import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter, substractCounter } from '../utils/appSlice';

function Counter() {
  const counterVal=useSelector((store)=>store.counter.counter);
  const dispatch=useDispatch()
    
    
  return (
    <div className='m-10'>
        <h1 className='text-6xl font-bold'>Counetr value:  {counterVal}</h1>
        <button className='m-2 px-6 py-3 bg-amber-300' 
        onClick={()=>dispatch(addCounter())}>Increment</button>
        <button className='m-2 px-6 py-3 bg-amber-300' 
        onClick={()=>dispatch(substractCounter())}>Increment</button>
    </div>
  )
}

export default Counter