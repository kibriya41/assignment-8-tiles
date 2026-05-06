import Link from 'next/link';
import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FiLogIn } from 'react-icons/fi';
import NavLink from './NavLink';
import { SiMaptiler } from 'react-icons/si';

const Navbar = () => {
    return (
        <div className='bg-gray-300'>
            <div className="navbar bg-gray-300 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        
                      
                    </div>
                    <Link href={"/"} className=" font-extrabold text-xl text-blue-700 flex items-center "><SiMaptiler size={"25"}/>Tile <span className='font-semibold'>Aesthetic</span> </Link>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1 rounded-none">
                        <li className='text-gray-700 font-semibold'><NavLink href={"/"}>Home</NavLink></li>
                        <li className='text-gray-700 font-semibold'><NavLink href={"/tiles"}>All Tile</NavLink></li>
                        <li className='text-gray-700 font-semibold'><NavLink href={"/profile"}>My Profile</NavLink></li>
                       
                    </ul>
                </div>
                <div className="navbar-end text-gray-700">
                   <span className='mr-3'> <FaRegCircleUser size={"40"} /> </span>
                    <Link href={"/login"} className="btn bg-blue-500 text-white"><FiLogIn />Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;