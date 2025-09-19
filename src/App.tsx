// import {Home , ShoppingCart , ShoppingBag} from 'lucide-react';
import NavBar from './components/NavBar'
import { Outlet } from 'react-router'

import './App.css'



function App() {
  
  return (
    <>
    <div className='min-h-screen w-full m-auto p-5 sm:w-full md:w-full'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <NavBar />
      <Outlet/>
      </div>
    </div>
    </>
  )
}

export default App
