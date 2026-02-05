import React from 'react'
import '../theme.css';
import blisiq_logo from '../public/Logo.png';

const Sidebar = () => {

  const general =[
    "Dashboard" ,
    "My content",
    "Learning",
    "Explore"
  ]

  return (
    <div className="bg-primary radius-none flex space-non w-[284px] justify-between">
      <div id="profile" className="flex flex-col gap-4xl pt-2xl text-text-secondary">
        <div className='flex w-[284px] justify-between py-none px-2xl items-center self-stetch'>
          <div id="title" className="flex flex-row items-center gap-sm">
            <img src={blisiq_logo} alt="This is an image" className="w-[24px] h-[24px]"/>
            <span className="font-bold text-lg">BlissIq</span>
          </div>
          <text>
            v3.0
          </text>
        </div>
        <div>
          {general.map((item, index) => (
            <div key={index} className="spacing-lg">
              {item}
            </div>
          ))}
        </div>
        <div className='flex spacing-lg'>
          <button className='cursor-pointer pr-5xl' onClick={() => document.documentElement.classList.remove("theme-dark")}>
            light
          </button>
          <button className='cursor-pointer' onClick={() => document.documentElement.classList.add('theme-dark')}>
            dark
          </button>
        </div>
      </div>
      <div id="settings">
        
      </div>  
      
    </div>
  )
}

export default Sidebar
