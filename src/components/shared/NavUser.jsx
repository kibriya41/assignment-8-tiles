"use client"

import Link from 'next/link';
import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FiLogIn } from 'react-icons/fi';
import Image from 'next/image';
import { MdOutlineLogout } from 'react-icons/md';
import { authClient } from '@/lib/auth-client';

const NavUser = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    return (
        <div className="navbar-end text-gray-700">
            {user ? (<><span>
               <Link href={"/profile"}>
                 <Image className='h-10 w-10 rounded-full border border-blue-700 mr-3'
                    src={user.image}
                    alt={user.name}
                    height={40}
                    width={40} />
               </Link>
            </span><button onClick={async()=> await authClient.signOut()} className='btn bg-blue-500 text-white'>Logout<MdOutlineLogout /></button></>) :
                (<><span className='mr-3'> <FaRegCircleUser size={"40"} /> </span><Link href={"/login"} className="btn bg-blue-500 text-white"><FiLogIn />Login</Link></>)}


        </div>
    );
};

export default NavUser;