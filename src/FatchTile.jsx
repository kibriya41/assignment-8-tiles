
export const getAllTiles = async () => {
    const res = await fetch('http://localhost:4000/tiles');
    return res.json();
}