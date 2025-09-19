// import {Home , ShoppingCart , ShoppingBag} from 'lucide-react';
import NavBar from './components/NavBar'
import { Outlet } from 'react-router'

import './App.css'



function App() {
  
  return (
    <>
    <div className='min-h-screen w-4/6 m-auto p-5'>
      <NavBar/>
      <Outlet/>
    </div>
    </>
  )
}

export default App
