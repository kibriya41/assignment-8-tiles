import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaStar } from 'react-icons/fa';
import { TbCategory } from 'react-icons/tb';


const getNewEditionTiles = async () => {
    const res = await fetch('http://localhost:4000/newEditionTiles');
    return res.json();
}

const NewArrivals = async () => {

    const tiles = await getNewEditionTiles();

    return (
        <div className='bg-gray-300 py-5'>
            <div className='container mx-auto bg-blue-200 flex gap-2 border-2 border-blue-900 p-2'>
                <button className='btn text-lg bg-linear-to-r from-[#0b1c2c] to-[#0e2a44] text-white'>New</button>
                <Marquee pauseOnHover={true}>
                    {
                        tiles.map((t) => (
                            <p key={t.id} className='mx-4 flex items-center text-blue-700'><FaStar size={20} color='gold' />
                                {t.title} <span className='px-3 flex items-center'><TbCategory />
                                    : {t.category}</span> </p>

                        ))}

                </Marquee>
            </div>
        </div>
    );
};

export default NewArrivals;