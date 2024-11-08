import { useState } from 'react'

const Employee = (props: { empId: string; name: string; surname: string; lostMopsNmb: number}) => {
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


const CartsScroll = (props: {type:string;}) => {
    const {type} = props;
    return (
        <div className='bg-white w-full h-full rounded-bl-2xl rounded-r-md rounded-bt-md p-8 border border-blue-900'>
            <div className='text-xl font-medium'>{props.type}</div>
            <div className='overflow-y-auto overscroll-y-contain space-y-5 h-full'>        
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            </div>
        </div>
    )
}

const EmployeesScroll = (props: {type:string;}) => {
    const {type} = props;
    return (
        <div className='bg-white w-full h-full rounded-l-md rounded-r-2xl p-8 border border-blue-900'>
            <div className='text-xl font-medium'>{props.type}</div>
            <div className='overflow-y-auto overscroll-y-contain space-y-5 h-full'>
                        
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Employee empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            </div>
        </div>
    )
}

export {EmployeesScroll, CartsScroll}