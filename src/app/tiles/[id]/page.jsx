import Image from "next/image";
import { getTileDetails } from '@/lib/FatchTile';
import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

const TileDetails = async ({ params }) => {
    const { id } = await params;

    const tile = await getTileDetails(id);


    return (
        <div className="bg-gray-200" >
            <div className="container mx-auto px-4 py-14 bg-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                    {/* === LEFT: IMAGE SECTION === */}
                    <div className="space-y-4">
                        {/* Main Image Container */}
                        <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
                            <Image
                                src={tile.image}
                                alt={tile.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Thumbnail */}
                        <div className="flex gap-3">
                            <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-blue-600 cursor-pointer">
                                <Image
                                    src={tile.image}
                                    alt={tile.title}
                                    fill
                                    className="object-cover"
                                    sizes="96px"
                                />
                            </div>
                        </div>
                    </div>

                    {/* === RIGHT: PRODUCT INFO === */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">{tile.title}</h1>
                            <p className="text-4xl font-semibold text-blue-600 mt-3">
                                ${tile.price} <span className="text-xl font-normal text-gray-500">{tile.currency}</span>
                            </p>
                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-2xl">
                                <p className="text-gray-500 text-sm">Category</p>
                                <p className="font-semibold capitalize">{tile.category}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-2xl">
                                <p className="text-gray-500 text-sm">Material</p>
                                <p className="font-semibold">{tile.material}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-2xl">
                                <p className="text-gray-500 text-sm">Dimensions</p>
                                <p className="font-semibold">{tile.dimensions}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-2xl">
                                <p className="text-gray-500 text-sm">Stock</p>
                                <p className="flex items-center gap-2 font-semibold text-green-600">
                                    <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
                                    Available
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="font-semibold mb-2">Description</h3>
                            <p className="text-gray-600 leading-relaxed">{tile.description}</p>
                        </div>

                        {/* Tags */}
                        <div>
                            <h3 className="font-semibold mb-3">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {tile.tags.map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-blue-200 text-blue-700 text-sm rounded-full capitalize">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="pt-6 space-y-3">
                            <button className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl text-lg transition">
                                <FaRegHeart size={20} /> Add to Favorites
                            </button>
                            <button className="flex items-center justify-center gap-2 w-full border border-gray-400 hover:bg-gray-50 font-semibold py-4 rounded-2xl transition">
                               <IoCallOutline size={20}/>
 Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TileDetails;