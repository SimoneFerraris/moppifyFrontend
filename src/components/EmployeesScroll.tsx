import { useEffect, useState } from 'react'
import resize from '../assets/resize.svg'
import enlarge from '../assets/enlarge.svg'
import cross2 from '../assets/cross-small-svgrepo-com.svg'
import { getCarts, getEmployees } from '../utils/api'
import { useNavigate } from 'react-router-dom';
    
const Employee = (props: { empId: string; name: string; surname: string}) => {
    const {empId, name, surname} = props;
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

type CartType = {
    uuid: string;
    room: string;
    building: string;
    floor?: string;
    clean_cloths: number;
    dirty_clothes: number;
};

const CartsScroll = (props: {type:string; fullscreen:boolean}) => {
    const [carts, setCarts] = useState<CartType[]>([]);

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
            <div className={`${fullscreen?'transition-all duration-75 absolute top-[1vh] right-[1vw] scale-50':'scale-0 top-[2vh] w-0 h-0 right-0'}`}>
                <img className='' src={enlarge}/>
            </div>
            <div className={`${!fullscreen?'transition-all duration-75 absolute top-[1vh] left-[2vw]':'hidden'}`}>
                <img className='' src={cross2}/>
            </div>
            <div className='text-xl font-medium pb-4 tracking-wider'>{props.type}</div>
            <div className='overflow-y-auto overscroll-y-contain space-y-5 h-[80%]'>
            {carts.map((cart) => (
                <Cart uuid={cart.uuid} room={cart.room} building={cart.building} floor='2a'/>
            ))}
            </div>
        </div>
    )
}

type EmployeeType = {
    name: string;
    surname: string;
    position: string;
    rfid: string;
   
};

const EmployeesScroll = (props: {type:string;}) => {
    const {type} = props;
    const [employees, setEmployees] = useState<EmployeeType[]>([]);

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
                {employees.map((employee) => (
                        <Employee
                            key={employee.rfid}
                            empId={employee.rfid}
                           
                            name={employee.name}
                            surname={employee.surname}
                        />
                ))}
            </div>
        </div>
    )
}

export {EmployeesScroll, CartsScroll}