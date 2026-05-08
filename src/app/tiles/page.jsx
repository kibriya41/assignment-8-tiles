"use client"

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

const categories = [
  "All",
  "Ceramic",
  "Marble",
  "Porcelain",
  "Mosaic",
  "Matte",
];

const AllTiles = () => {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ Fetch tiles from your server
  useEffect(() => {
    fetch("http://localhost:4000/tiles")
      .then((res) => res.json())
      .then((data) => {
        setTiles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // ✅ Filter Logic
  const filteredTiles = tiles.filter((tile) => {
    const matchSearch = tile.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" ||
      tile.category.toLowerCase() === activeCategory.toLowerCase();

    return matchSearch && matchCategory;
  });

  return (
    
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-10 bg-gray-100">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">All Tiles</h2>
        <p className="text-gray-500 mt-1">
          Explore our collection of premium tiles.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search tiles by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-200 rounded-full py-3 pl-5 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Search
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-center py-20 text-gray-500">
          Loading tiles...
        </div>
      ) : (
        <>
          {/* Tiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTiles.map((tile) => (
              <div
                key={tile.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {tile.title}
                  </h3>

                  <p className="text-gray-700 font-medium mt-1">
                    ${tile.price}
                  </p>

                  <button className="w-full mt-4 bg-blue-400 border border-blue-700  rounded-lg py-2 text-sm font-medium hover:bg-blue-100 transition"> View
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredTiles.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No tiles found.
            </div>
          )}
        </>
      )}
      </div>
    </section>
  );
};

export default AllTiles;