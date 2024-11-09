import { useEffect, useState } from 'react'
import resize from '../assets/resize.svg'
import cross2 from '../assets/cross-small-svgrepo-com.svg'
import { getCarts, getEmployees } from '../utils/api'
import { useNavigate } from 'react-router-dom';

const Employee = (props: { empId: string; name: string; surname: string; lostMopsNmb: number}) => {
    const {empId, name, surname, lostMopsNmb} = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/employee/${empId}`);
      };

    return (
        <button className='bg-white rounded-md w-[100%] text-gray-800 border border-cyan-900 hover:border-cyan-900 p-2 grid-cols-2 relative hover:hover:bg-[#F7F7F8]' onClick={handleClick}>
            <div className='absolute text-sm text-gray-400 right-3'>ID: {props.empId}</div>
            <div className='font-semibold col-span-1'>
                {props.surname} {props.name}
            </div>
            <div className='col-span-1'>
                Mops lost number: {props.lostMopsNmb}
            </div>
        </button>
    )
}

const Cart = (props: { uuid: string; building: string; floor: string; room: number}) => {
    const {uuid, building, floor, room} = props;
    return (
        <div className='rounded-md w-[100%] text-gray-800 bg-[#F0F0F0] p-2 grid-cols-2 text-sm'>
            <div className='font-semibold col-span-1'>
                Building: {props.building} 
            </div>
            Floor: {props.floor} Room: {props.room}
            <div className='col-span-1 text-sm text-gray-400'>
                UUID{props.uuid}
            </div>
        </div>
    )
}

const CartsScroll = (props: {type:string; fullscreen:boolean}) => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const cartsData = await getCarts();
            setCarts(cartsData);
        }
        fetchData();
    }, []);
    
    const {type, fullscreen} = props;
    return (
        <div className={`bg-white w-full h-full ${!fullscreen?'rounded-2xl':'rounded-bl-2xl rounded-t-md rounded-br-md'} p-6 relative border border-cyan-900 hover:bg-[#F7F7F8]`}>
            <div className={`${fullscreen?'transition-all duration-75 absolute top-[2vh] left-[2vw]':'scale-0 top-[2vh] w-0 h-0 left-0'}`}>
                <img className='' src={resize}/>
            </div>
            <div className={`${!fullscreen?'transition-all duration-75 absolute top-[1vh] left-[2vw]':'hidden'}`}>
                <img className='' src={cross2}/>
            </div>
            <div className='text-xl font-medium pb-4 tracking-wider'>{props.type}</div>
            <div className='overflow-y-auto overscroll-y-contain space-y-5 h-[80%]'>        
                <Cart uuid='ewuwii-udwfewk-279573' room={2} building='Ospedale Bressanone' floor='2a'/>
                
            </div>
        </div>
    )
}

const EmployeesScroll = (props: {type:string;}) => {
    const {type} = props;
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const employeesData = await getEmployees();
            setEmployees(employeesData);
        }
        fetchData();
    }, []);
    
    return (
        <div className='bg-white w-full h-full rounded-l-md rounded-r-2xl p-6 '>
            <div className='text-xl font-medium pb-4 tracking-wider'>{props.type}</div>
            <div className='overflow-y-auto overscroll-y-contain space-y-5 h-[90%]'>
                        
                <Employee empId='2342' lostMopsNmb={2} name='Luca' surname='Lama'/>
                <Employee empId='7436' lostMopsNmb={2} name='Mario' surname='Sgnizzicolo'/>
                <Employee empId='9883' lostMopsNmb={2} name='Marianna' surname='Ruccola'/>
            </div>
        </div>
    )
}

export {EmployeesScroll, CartsScroll}