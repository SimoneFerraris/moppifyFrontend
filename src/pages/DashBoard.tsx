import { useEffect, useState } from 'react'
import '../App.css'
import {EmployeesScroll, CartsScroll} from '../components/EmployeesScroll.tsx'
import InfoContainer from '../components/InfoContainer'
import mopifyLogo from '../assets/mopifyLogo 1.svg'
import { getLostMops } from '../utils/api.ts'


function DashBoard() {

    type LostMopsType = {
        cart: string;
        employee: string;
        lost_mops: number;
    };

    type InfoContainerProps = {
        number: number;
        lostMops: LostMopsType[];  // Pass the lostMops array as a prop
    };
    const [fullscreen, setFullscreen] = useState<boolean>(true)
    const [lostMops, setLostMops] = useState<LostMopsType[]>([]);
  
    useEffect(() => {
        async function fetchData() {
            const cartsData = await getLostMops();
            setLostMops(cartsData);
        }
        fetchData();
    }, []);

    
  return (
    <div className='space-y-10'>

        <div className='pb-5 flex justify-center'>
            <img src={mopifyLogo}/>
        </div>

        <div className='grid grid-cols-2 gap-x-[2vw] gap-y-[1vh] max-w-screen-lg mx-auto'>
            <div className={`transition-all duration-10  ${fullscreen ? ' visible w-[30vw] h-[10vh]' : 'w-[0vw] h-[0vh] opacity-0 scale-0'} col-span-1`}>
                <InfoContainer count={ lostMops.map((lm: LostMopsType) => lm.lost_mops).reduce((a, cur) => a + cur, 0) } />
            </div>
            <div className={`transition-all duration-10 ${fullscreen ? 'w-[30vw] h-[61vh] row-span-2 col-span-1' : ' w-[0vw] h-[0vh] row-span-0 col-span-0 opacity-0 scale-0'}`}>
                <EmployeesScroll type="Employees"/>
            </div>
            <div className={`transition-all duration-1000 w-[30vw] ${fullscreen ?'h-[50vh] col-span-1 w-[30vw]':'h-[61vh] col-span-2 w-[60vw] z-40'}`} onClick={()=>setFullscreen(!fullscreen)}>
            <CartsScroll type="Carts" fullscreen={fullscreen}/>
            </div>
        </div>
    </div>
  )
}

export default DashBoard
