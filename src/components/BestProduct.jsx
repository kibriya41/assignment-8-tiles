import { getAllTiles } from '@/lib/FatchTile';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const BestProduct = async () => {
    const tiles = await getAllTiles();

    return (
        <div className='bg-gray-300'>
            <div className='container mx-auto px-4 py-12'>

                {/* Section Header */}
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                    <h2 className='text-2xl md:text-3xl font-semibold text-[#0b1c2c]'>
                        Best Products
                    </h2>

                    <Link href={"/allTile"}>
                        <button className='btn bg-gray-300 text-blue-700 shadow-none border-none font-semibold text-sm md:text-base'>
                            View All
                            <FaArrowRightLong />
                        </button>
                    </Link>
                </div>

                {/* Product Grid */}
                <div className='pt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>

                    {tiles.slice(0, 4).map((tile) => (
                        <div
                            key={tile.id}
                            className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        >

                            {/* Image */}
                            <div className="h-52 sm:h-56 md:h-60 overflow-hidden">
                                <Image
                                    height={300}
                                    width={300}
                                    src={tile.image}
                                    alt={tile.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">

                                <h3 className="font-semibold text-gray-900 text-base line-clamp-1">
                                    {tile.title}
                                </h3>

                                <p className="text-gray-700 font-medium mt-2 text-lg">
                                    ${tile.price}
                                </p>

                                <Link href={`/tiles/${tile.id}`}>
                                    <button className="w-full mt-4 border border-blue-700 rounded-lg py-2 text-sm font-medium hover:bg-blue-100 transition">
                                        View Details
                                    </button>
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestProduct;