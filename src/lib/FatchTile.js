
export const getAllTiles = async () => {
    const res = await fetch('https://tiles-json-data-1.onrender.com/tiles');
    return res.json();
};


export async function getTileDetails(tiles_id) {
    const res = await fetch(`https://tiles-json-data-1.onrender.com/tiles/${tiles_id}`,);
    const data = await res.json();
    return data;
    
}