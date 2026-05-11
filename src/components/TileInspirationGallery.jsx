"use client";

import Image from "next/image";

const TileInspirationGallery = () => {
    const gallery = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1661107259637-4e1c55462428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D",
            title: "Luxury Bathroom",
        },
        {
            id: 2,
            image:
                "https://images.pexels.com/photos/34993898/pexels-photo-34993898.jpeg",
            title: "Modern Kitchen",
        },
        {
            id: 3,
            image:
                "https://images.pexels.com/photos/30469367/pexels-photo-30469367.jpeg",
            title: "Living Room Design",
        },
        {
            id: 4,
            image:
                "https://images.pexels.com/photos/8092431/pexels-photo-8092431.jpeg",
            title: "Elegant Interior",
        },
    ];

    return (
        <section className="bg-gray-200">
            <div className="bg-gray-200 container mx-auto px-4 py-16">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-800">
                        Tile Inspiration Gallery
                    </h2>

                    <p className="text-slate-500 mt-3">
                        Explore stunning interior inspirations
                        using our premium tile collections.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {gallery.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden rounded-3xl group shadow-lg"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={500}
                                height={600}
                                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>

                            {/* Content */}
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold">
                                    {item.title}
                                </h3>

                                <button className="mt-3 btn btn-sm btn-primary">
                                    Explore
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TileInspirationGallery;