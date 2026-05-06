import Link from 'next/link';
import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FiLogIn } from 'react-icons/fi';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='container mx-auto '>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        
                      
                    </div>
                    <Link href={"/"} className=" font-extrabold text-xl text-blue-700 ">Tile <span className='font-semibold'>Aesthetic</span> </Link>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1 rounded-none">
                        <li className='text-gray-700'><NavLink href={"/"}>Home</NavLink></li>
                        <li className='text-gray-700'><NavLink href={"/tiles"}>All Tile</NavLink></li>
                        <li className='text-gray-700'><NavLink href={"/profile"}>My Profile</NavLink></li>
                       
                    </ul>
                </div>
                <div className="navbar-end text-gray-700">
                   <span className='mr-3'> <FaRegCircleUser size={"40"} /> </span>
                    <Link href={"/login"} className="btn"><FiLogIn />Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;