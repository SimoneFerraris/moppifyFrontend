import { useState } from 'react'
import resize from '../assets/resize.svg'
import down from '../assets/down.svg'

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

const Cart = (props: { empId: string; name: string; surname: string; lostMopsNmb: number}) => {
    const {empId, name, surname, lostMopsNmb} = props;
    return (
        <div className='rounded-md h-[10vh] w-[100%] text-gray-800 bg-[#F0F0F0] p-2 grid-cols-2'>
            <div className='font-semibold col-span-1'>
                {props.surname} {props.name}
            </div>
            <div className='col-span-1'>
                #{props.empId} Total Mops Lost: {props.lostMopsNmb}
            </div>
        </div>
    )
}

const CartsScroll = (props: {type:string; fullscreen:boolean}) => {
    const {type, fullscreen} = props;
    return (
        <div className='bg-white w-full h-full rounded-bl-2xl rounded-t-md rounded-br-md p-6 relative border border-cyan-900 hover:bg-[#F0F0F0]'>
            <div className='absolute top-[2vh] left-[2vw]'>
            {props.fullscreen?<img className='' src={resize}/>:'v'}
            </div>
            <div className='text-xl font-medium pb-4 tracking-wider'>{props.type}</div>
            <div className='overflow-y-auto overscroll-y-contain space-y-5 h-[80%]'>        
                <Cart empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Cart empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Cart empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Cart empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Cart empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Cart empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Cart empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Cart empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Cart empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Cart empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Cart empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
                <Cart empId='1' lostMopsNmb={2} name='Donna Mannaia' surname='Lama'/>
            </div>
        </div>
    )
}

const EmployeesScroll = (props: {type:string;}) => {
    const {type} = props;
    return (
        <div className='bg-white w-full h-full rounded-l-md rounded-r-2xl p-6 '>
            <div className='text-xl font-medium pb-4 tracking-wider'>{props.type}</div>
            <div className='overflow-y-auto overscroll-y-contain space-y-5 h-[90%]'>
                        
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