// async function getData() {
//     const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=grocery&location=38.887184443518535%2C -77.09676780149996&radius=150&type=grocery&key=AIzaSyAc60GTNiiS9dEXml300TmpRSJwxDcV1Rg';
//     const res = await fetch(url);

//     if (!res.ok) {
//         throw new Error('Failed to fetch data');
//     }
//     return res.json()
// }

// export default async function Page() {
//     const data = await getData()
//     console.log(data.results);

//     return (
//         <ul className="dark:invert">
//             {data && data.results.map((grocery) => (
//                 <li>
//                     {grocery.name}
//                 </li>
//             ))}
//             {/* {users && users.map(({ id, name, website }) => (
//                 <li key={id}>
//                     {id} - {name}
//                     <br/>
//                     {website}
//                 </li>
//             ))} */}
//         </ul> 
//     )
// }