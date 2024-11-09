import { useEffect, useState } from 'react'
import '../App.css'
import { useLocation, useParams } from 'react-router-dom';
import { getCarts, getEmployees, getLostMops } from '../utils/api'


type EmployeeType = {
  name: string;
  surname: string;
  position: string;
  rfid: string;
};

type LostMopsType = {
  cart: string;
  employee: string;
  lost_mops: number;
};

type CartType = {
  uuid: string;
  room: string;
  building: string;
  floor?: string;
  clean_cloths: number;
  dirty_clothes: number;
};


function EmployeePage() {
  const currentPath = useLocation() 
  const empID = currentPath.pathname
  const [lostMops, setLostMops] = useState<LostMopsType[]>([]);
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [carts, setCarts] = useState<CartType[]>([]);
  console.log(empID)

  useEffect(() => {
    async function fetchData() {
        const employeesData = await getEmployees();
        setEmployees(employeesData);
    }
    fetchData();
}, []);

  useEffect(() => {
    async function fetchData() {
        const cartsData = await getLostMops();
        setLostMops(cartsData);
    }
    fetchData();
}, []);


useEffect(() => {
  async function fetchData() {
      const cartsData = await getCarts();
      setCarts(cartsData);
  }
  fetchData();
}, []);

  return (
    <div className='space-y-2'>
      <div className='bg-[#c7c7c7] rounded-t-2xl rounded-b-md w-[60vw] h-[10vh] font-medium text-xl text-[#777171] tracking-wider pt-[4vh] '></div>
      <div className='bg-white rounded-b-2xl rounded-t-md text-gray-800 w-[60vw] h-[71vh] overflow-y-auto overscroll-y-contain'>
      <div>
        <div className='text-xl font-medium pb-4 tracking-wider'>Lost Mops:</div>
        <div className='p-5  space-y-5'>
        {lostMops
            .filter((lostmop) => lostmop.employee === empID?.split('/')[1] || empID)
            .map((lostmop, index) => {
              const cart = carts.find((cart) => cart.uuid === lostmop.cart); // Find the corresponding cart
              return (
                <div key={index} className='bg-white rounded-md w-[100%] text-gray-800 border border-cyan-900 p-2'>
                  <p>Room: {cart?.room || 'Loading...'}</p>
                  <p>Building: {cart?.building || 'Loading...'}</p>
                  {cart?.floor && <p>Floor: {cart.floor}</p>}
                  <p>Clean Clothes: {cart?.clean_cloths}</p>
                  <p>Dirty Clothes: {cart?.dirty_clothes}</p>
                  <div>Number lost: {lostmop.lost_mops}</div>
                </div>
              );
            })}
            </div>
      </div>
      </div>
      
    </div>
  )
}

export default EmployeePage
/*

{lostMops
            .filter((lostmop) => lostmop.employee === employeeId) // Filter by employee ID
            .map((lostmop, index) => {
             
            
            const cart = cartsData.find((cart) => cart.uuid === lostmop.cart); // Find the corresponding cart
              return (
                <div key={index} className='bg-white rounded-md w-[100%] text-gray-800 border border-cyan-900 p-2'>
                  <p>Room: {cart?.room || 'Loading...'}</p>
                  <p>Building: {cart?.building || 'Loading...'}</p>
                  {cart?.floor && <p>Floor: {cart.floor}</p>}
                  <p>Clean Clothes: {cart?.clean_cloths}</p>
                  <p>Dirty Clothes: {cart?.dirty_clothes}</p>
                  <div>Number lost: {lostmop.lost_mops}</div>
                </div>
              );
            })}











            filter((lostmop) => lostmop.employee === empID?.split('/')[1] || empID)
            .map((lostmop, index) => (
              <div key={index} className='bg-white rounded-md w-[100%] text-gray-800 border border-cyan-900 p-2'>
                <p>Cart: {lostmop.cart}</p>
                <div>Number lost: {lostmop.lost_mops}</div>
              </div>
            ))}
*/