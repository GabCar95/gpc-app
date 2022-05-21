import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import GPC from '../assets/GPC.png';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div name="navbar" className='w-screen h-[80px] z-10 bg-gray-900 fixed flex px-4'>        
        <div>
            <Link to='home'  smooth={true} duration={500} offset={-100}>
                <img className='cursor-pointer' src={GPC} alt='GPC logo' style={{width: '110px' }} />
            </Link>
            
        </div>

        {/* Menu Container */}
        <div className='flex justify-between items-center h-22 max-w-[1250px] mx-auto text-white text-xl'>

            <ul className='hidden md:flex cursor-pointer'>
                <li className='p-6'>
                    <Link to='home'  smooth={true} duration={500} offset={-100}>
                        Home
                    </Link>
                </li>
                <li className='p-6'>
                <Link to='about'  smooth={true} duration={500} offset={-100}>
                        About
                    </Link>
                </li>
                <li className='p-6'>
                <Link to="services"  smooth={true} duration={500} offset={-100}>
                        Services
                    </Link>
                </li>
                <li className='p-6'>
                <Link to="contact"  smooth={true} duration={500} offset={-100}>
                        Contact
                    </Link>
                </li>
            </ul>
       </div>

        <div onClick={handleClick} className='my-8 text-white md:hidden z-10 pr-4 cursor-pointer'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Container */}
        <div>
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen text-white bg-gray-900 flex flex-col items-center justify-center cursor-pointer'}>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home'  smooth={true} duration={500} offset={-100}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about'  smooth={true} duration={500} offset={-100}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="services"  smooth={true} duration={500} offset={-100}>
                        Services
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact"  smooth={true} duration={500} offset={-100}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar