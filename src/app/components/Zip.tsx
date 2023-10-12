// "use client"
// import {useState, useEffect} from "react";
// import axios from "axios";

// export default function Zip() {
//     // const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=grocery&location=38.887184443518535%2C -77.09676780149996&radius=10&type=grocery&key=AIzaSyAc60GTNiiS9dEXml300TmpRSJwxDcV1Rg&pageToken=ATJ83zhomF4KkKKKciH0PUj8jn6va29OtEExq5AwxBJbtBRJ7kTj27u2V4nuxPSlnAoCC7lv0ytfAtb7WVmMq9jln2e2WxRvjGoYSPP58raXIZ2lUsifu-xOXyPinjgod87nHCdTWvU9rMqirSlaw0Zl30vg6YgrdzThWLz73qe-jT2dKBlwb-15cmOQ6vQ6ckg5f6hjN5S2_DFMVbt8_g7z0_GUr-QY4i8ZFd1ae2p0haMyslae0n28b-At3DmNJ9zoaX8wQXvXSxQ8YIBAJWxQKsBN4muQFx1O_NLU_fHkHo3kXWEQWlkMfNm5lMTKRFr9BFoHQ7bKTf4uViDNi8ZqkFVE3-QssUoO39uEy9h6qOmoReciZbVU-FEvH0uQRWwJxSIPh8HLcuxZ-EOrCJbNWMtrqSICUXcA3CUpalb-Ed0eIMBm4tOazwuOWKLwPk6LwMtJ';
//     const url = "https:pokepi.co/api/v2/pokeon/5";
//     const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState([]);
    

//     // const fetchInfo = () => {
//     //     return fetch(url)
//     //       .then((res) => res.json())
//     //       .then((d) => setData(d))
//     // };

//     useEffect(() => {
//         axios.get(url).then((response) => {
//             setData(response.data);
//             setLoading(false);
//         });
//     },[]);

//     if (isLoading) {
//         return (
//             <div className="dark:invert">Loading</div>
//         );
//     }

//     return (
//         <div>
//             <h1>Hi</h1>
//             <div className="dark:invert">
//                 {data.map((dataObj, index) => {
//                     return (
//                         <p key={index}>{dataObj.name}</p>
//                     );
//                 })}
//             </div>
//         </div>
//     );
    

//     // function handleSubmit(e) {
//     //     const apiCall = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=grocery&location=38.887184443518535%2C -77.09676780149996&radius=10&type=grocery&key=AIzaSyAc60GTNiiS9dEXml300TmpRSJwxDcV1Rg&pageToken=ATJ83zhomF4KkKKKciH0PUj8jn6va29OtEExq5AwxBJbtBRJ7kTj27u2V4nuxPSlnAoCC7lv0ytfAtb7WVmMq9jln2e2WxRvjGoYSPP58raXIZ2lUsifu-xOXyPinjgod87nHCdTWvU9rMqirSlaw0Zl30vg6YgrdzThWLz73qe-jT2dKBlwb-15cmOQ6vQ6ckg5f6hjN5S2_DFMVbt8_g7z0_GUr-QY4i8ZFd1ae2p0haMyslae0n28b-At3DmNJ9zoaX8wQXvXSxQ8YIBAJWxQKsBN4muQFx1O_NLU_fHkHo3kXWEQWlkMfNm5lMTKRFr9BFoHQ7bKTf4uViDNi8ZqkFVE3-QssUoO39uEy9h6qOmoReciZbVU-FEvH0uQRWwJxSIPh8HLcuxZ-EOrCJbNWMtrqSICUXcA3CUpalb-Ed0eIMBm4tOazwuOWKLwPk6LwMtJ';
//     //     e.preventDefault();

//     //     const form = e.target;
//     //     const formData = new FormData(form);

//     //     fetch(apiCall, { method: form.method, body: formData });
//     // }

//     // return (
//     //     <form method="post" onSubmit={handleSubmit}>
//     //         <label>
//     //             Text input: <input name="myInput" defaultValue="Initial"/>
//     //         </label>
//     //         <hr />
//     //         <label>
//     //             Checkbox: <input type="checkbox" name="myCheckbox"/>
//     //         </label>
//     //         <button type="submit">Submit</button>
//     //     </form>
//     // );

// }