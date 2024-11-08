import { useState } from 'react'
import '../App.css'
import {EmployersScroll, CartsScroll} from '../components/EmployersScroll'
import InfoContainer from '../components/InfoContainer'

function DashBoard() {
  const [count, setCount] = useState(0)
  return (
    <div className='space-y-10'>

        <div className='font-extrabold'>
            <h1>Mopify</h1>
        </div>

        <div className='grid grid-cols-2 gap-x-[2vw] gap-y-[1vh] max-w-screen-lg mx-auto'>
            <div className='w-[30vw] h-[30vh] col-span-1'>
                <InfoContainer  />
            </div>
            <div className='w-[30vw] h-[61vh] row-span-2 col-span-1'>
                <EmployersScroll type="Employers"/>
            </div>
            <div className='w-[30vw] h-[30vh] col-span-1'>
            <CartsScroll type="Carts"/>
            </div>
        </div>
    </div>
  )
}

export default DashBoard
