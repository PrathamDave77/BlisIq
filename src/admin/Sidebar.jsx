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
    <div className="bg-primary">
      <div className=''>
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
        <button className='cursor-pointer'>
          light
        </button>
        <button className='cursor-pointer' onClick={() => document.documentElement.classList.toggle('theme-dark')}>
          dark
        </button>
      </div>
      
    </div>
  )
}

export default Sidebar
