import { useState } from 'react'
import '../App.css'
import {EmployeesScroll, CartsScroll} from '../components/EmployeesScroll.tsx'
import InfoContainer from '../components/InfoContainer'

function DashBoard() {
  const [fullscreen, setFullscreen] = useState<boolean>(false)
  return (
    <div className='space-y-10'>
        <div className='font-extrabold'>
            <h1>Mopify</h1>
        </div>

        <div className='grid grid-cols-2 gap-x-[2vw] gap-y-[1vh] max-w-screen-lg mx-auto'>
            <div className={`transition-all duration-200  ${fullscreen ? ' visible w-[30vw] h-[10vh]' : 'w-[0vw] h-[0vh] opacity-0 scale-0 '} col-span-1`}>
                <InfoContainer  />
            </div>
            <div className={`transition-all duration-200 w-[30vw] h-[61vh] row-span-2 col-span-1 ${fullscreen ? ' visible' : ' w-[0vw] h-[0vh] opacity-0 scale-0 '}`}>
                <EmployeesScroll type="Employees"/>
            </div>
            <div className={`transition-all duration-500 w-[30vw] ${fullscreen ?'h-[50vh] col-span-1 w-[30vw]':'h-[61vh] col-span-2 w-[60vw]'}`} onClick={()=>setFullscreen(!fullscreen)}>
            <CartsScroll type="Carts" fullscreen={fullscreen}/>
            </div>
        </div>
    </div>
  )
}

export default DashBoard
