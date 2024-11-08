import { useState } from 'react'

const Employer = (props: { empId: string; name: string; surname: string; lostMopsNmb: number}) => {
    const {empId, name, surname, lostMopsNmb} = props;
    return (
        <div className='rounded-md h-[10vh] w-[100%] text-gray-800 border border-cyan-900 p-2 grid-cols-2'>
            <div className='font-semibold col-span-1'>
                {props.surname} {props.name}
            </div>
            <div className='col-span-1'>
                #{props.empId} Total Mops Lost: {props.lostMopsNmb}
            </div>
        </div>
    )
}

function EmployersScroll() {
    return (
        <div className='bg-white w-full h-full rounded-md p-8 border border-blue-900 overflow-y-auto overscroll-y-contain space-y-5'>
            <div className='text-xl font-medium'>Employers</div>        
            <Employer empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            <Employer empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            <Employer empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            <Employer empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            <Employer empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            <Employer empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            <Employer empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            <Employer empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            <Employer empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            <Employer empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            <Employer empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            <Employer empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
        </div>
    )
}

export default EmployersScroll