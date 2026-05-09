
export const getAllTiles = async () => {
    const res = await fetch('http://localhost:4000/tiles');
    return res.json();
};


export async function getTileDetails(tiles_id) {
    const res = await fetch(`http://localhost:4000/tiles/${tiles_id}`,);
    const data = await res.json();
    return data;
    
}