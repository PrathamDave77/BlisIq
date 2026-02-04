import React from 'react'
import '../theme.css';


const Sidebar = () => {

  const general =[
    "Dashboard" ,
    "My content",
    "Learning",
    "Explore"
  ]

  return (
    <div className="bg-primary radius-none flex space-non flex-col w-[284px] justify-between ">
      <div id="profile" className="flex flex-row w-[284px] spacing-2xl gap-4xl">
        <div className='flex flex-col w-[284px] justify-between pr-'>
          BlissIq
        </div>
        <div>
          {general.map((item, index) => (
            <div key={index} className="spacing-lg">
              {item}
            </div>
          ))}
        </div>

        <div className='flex spacing-lg gap-4'>
          <button className='cursor-pointer' onClick={() => document.documentElement.classList.remove("theme-dark")}>
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
