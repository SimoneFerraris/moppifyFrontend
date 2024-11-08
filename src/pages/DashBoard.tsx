import { useState } from 'react'
import '../App.css'
import EmployersScroll from '../components/EmployersScroll'

function DashBoard() {
  const [count, setCount] = useState(0)
  return (
    <div className='space-y-10'>

        <div className='font-extrabold'>
            <h1>Mopify</h1>
        </div>
        
        <div className='grid grid-cols-2 gap-x-20 gap-y-4 max-w-screen-lg mx-auto'>
            <div className='w-[30vw] h-[30vh] col-span-1'>
                <EmployersScroll/>
            </div>
            <div className='w-[30vw] h-[62vh] row-span-2 col-span-1'>
                <EmployersScroll/>
            </div>
            <div className='w-[30vw] h-[30vh] col-span-1'>
            <EmployersScroll/>
            </div>
        </div>
    </div>
  )
}

export default DashBoard
