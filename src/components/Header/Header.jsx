import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='p-10 bg-white'>
         <div className='flex flex-row'>
        <div className='flex flex-row gap-8 w-1/2'>
        <Link to='/'>
             <p>Home</p>
            </Link>
           <Link to='/interests'>
                <p>Interests</p>
            </Link>
            <Link to="/contact">
                <p>Contact</p>
            </Link>
            <Link to='/projects'>
                <p>Projects</p>
            </Link>
        </div>
        <div className='flex flex-row justify-end gap-2 w-1/2'>
            <div>
                <p>Mode</p>
            </div>
            <div>
                Language
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Header;
