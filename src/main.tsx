import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DashBoard from './pages/DashBoard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeePage from './pages/EmployeePage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard/>} />
        <Route path="/employee/:empId" element={<EmployeePage/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
