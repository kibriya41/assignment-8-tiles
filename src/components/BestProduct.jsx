import { getAllTiles } from '@/FatchTile';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const BestProduct = async () => {
    const tiles = await getAllTiles();

    return (
        <div className='bg-gray-300 '>
            <div className='container mx-auto bg-gray-300 py-20'>
                <div className='flex justify-between'>
                    <h2 className='text-3xl font-semibold text-[#0b1c2c]'>Best Products</h2>
                    <Link href={"/tiles"}><button className='btn bg-gray-300 text-blue-700 shadow-none border-none font-semibold text-[16px]'>View All <FaArrowRightLong /></button></Link>
                </div>
                <div className='pt-8 grid grid-cols-4 gap-12'>
                    {tiles.slice(0, 4).map((i) => (
                        <div key={i.id} className='container mx-auto'>
                            <div className=" card bg-base-100  shadow-sm">
                                <figure className='h-48'>
                                    <img
                                        src={i.image} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{i.title} </h2>
                                    <p className='font-semibold'>${i.price}</p>
                                    <button className="btn border font-semibold text-[16px] text-blue-700 bg-blue-100 border-blue-700 mt-5">View Details</button>

                                </div>
                            </div></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestProduct;