import { useState } from 'react'
import '../App.css'
import { getCarts, getEmployees } from '../utils/api'

type EmployeeType = {
  name: string;
  surname: string;
  position: string;
  rfid: string;
  lostMopsNmb: number;
};

function EmployeePage() {
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  return (
    <div className='space-y-2'>
      <div className='bg-[#c7c7c7] rounded-t-2xl rounded-b-md w-[60vw] h-[10vh] font-medium text-xl text-[#777171] tracking-wider pt-[4vh] '>NAME SURNAME</div>
      <div className='bg-white rounded-b-2xl rounded-t-md text-gray-800 w-[60vw] h-[71vh]'>
      <div>
        
      </div>
      </div>
      
    </div>
  )
}

export default EmployeePage
//className='bg-white rounded-md w-[100%] text-gray-800 border border-cyan-900 hover:border-cyan-900 p-2 grid-cols-2