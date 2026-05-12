import Link from 'next/link';
import React from 'react';
import { SiMaptiler } from 'react-icons/si';
import { HiMenuAlt3 } from 'react-icons/hi';
import NavLink from './NavLink';
import NavUser from './NavUser';

const Navbar = () => {
    const navItems = (
        <>
            <li className='text-gray-700 font-semibold'>
                <NavLink href={"/"}>Home</NavLink>
            </li>

            <li className='text-gray-700 font-semibold'>
                <NavLink href={"/allTile"}>All Tile</NavLink>
            </li>

            <li className='text-gray-700 font-semibold'>
                <NavLink href={"/profile"}>My Profile</NavLink>
            </li>
        </>
    );

    return (
        <div className='bg-gray-300 shadow-md'>
            <div className="navbar container mx-auto px-4">

                {/* LEFT */}
                <div className="navbar-start">

                    {/* MOBILE DROPDOWN */}
                    <div className="dropdown lg:hidden mr-2">
                        <label tabIndex={0} className="btn btn-ghost">
                            <HiMenuAlt3 size={25} />
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
                        >
                            {navItems}
                        </ul>
                    </div>

                    {/* LOGO */}
                    <Link
                        href={"/"}
                        className="font-extrabold text-xl text-blue-700 flex items-center gap-1"
                    >
                        <SiMaptiler size={25} />
                        Tile <span className='font-semibold'>Aesthetic</span>
                    </Link>
                </div>

                {/* CENTER MENU FOR LARGE SCREEN */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>

                {/* RIGHT SIDE */}
                <div className="navbar-end">
                    <NavUser />
                </div>
            </div>
        </div>
    );
};

export default Navbar;