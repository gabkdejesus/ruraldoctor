
export async function getNearbyGroceries(rad?: string, loc?: string) {
    const radius = rad || "150";
    const type = "grocery";
    const keyword = "grocery";
    const key = process.env.GMAPS_KEY;
    const location = loc || "38.887184443518535%2C -77.09676780149996";

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${keyword}&location=${location}&radius=${radius}&type=${type}&key=${key}`;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Failed to fetch grocery data');
    } 
    return res.json();
}