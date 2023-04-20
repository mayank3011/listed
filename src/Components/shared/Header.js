import React from 'react'
import {useNavigate} from 'react-router-dom'
import './styles/Header.css'
import{Popover,Transition, Menu} from '@headlessui/react'
import { Fragment } from 'react'
import {HiOutlineSearch , HiOutlineBell} from 'react-icons/hi'
const Header = () => {
  const navigate =useNavigate()
  return (
    <div className='navContainer h-16 px-4 w-full flex justify-between items-center mr-9 mt-10 fit-content'>
        <div className='text-2xl font-bold'><h1>Dashboard</h1></div>      
        <div className=' flex items-center gap-2 mr-2'>
          <div className='relative'>
            <input type='text' placeholder='Search...' className='text-sm border-none	rounded-3xl h-10 w-[24rem] focus:outline-none active:outline-none px-3 pl-9'/>
            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-[90%]'/>            

          </div>
          <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className='inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'>
                <HiOutlineBell fontSize={24}/>

            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'>
                <div className='bg-white rounded-sm shadow-md ring-1'>This is a Panel</div>
                
              </Popover.Panel>
              </Transition>
            </>)}
            </Popover>
            <Menu as="div" className="relative">
        
          <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <span className='sr-only'>Open user menu</span>
            <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center' style={{backgroundImage:'url("https://source.unsplash.com/80x80?face")'}}>
              <span className='sr-only'>Mayank Rajput</span>
            </div>
          </Menu.Button>
          <div>
          <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outlne-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button className='text-gray-700 focus:bg-gray-200 block cursor-pointer' onClick={()=>navigate('/profile')}>
                    Your Profile
                  </button>
                  
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button className='text-gray-700 focus:bg-gray-200 block cursor-pointer' onClick={()=>navigate('/settings')}>
                    Settings
                  </button>
                  
                )}
              </Menu.Item>
              </div>
              </Menu.Items>
              </Transition>
              </div>
        </Menu>
        </div>
    </div>
  )
}

export default Header
