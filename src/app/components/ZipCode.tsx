"use client"

import { useState } from "react";
const citiesData = require('../USCities.json');
import GroceryCanvas from "./GroceryCanvas";

export default function ZipCode() {
    const [ zipCode, setzipCode ] = useState("22201");
    const [ radius, setRadius ] = useState("400");
    const [ groceryCount, setGroceryCount ] = useState(0);
    const [ clayCount, setClayCount ] = useState(0);
    const [ groceryData, setGroceryData ] = useState([]);
    const [ cityName, setcityName ] = useState();
    const [ isZero, setIsZero ] = useState(false); // When no groceries nearby
    const [ loading, setLoading ] = useState(false); // When loading API request
    const [ ready, setReady ] = useState(false); // When data is ready

    // State for next access token
    const [ hasNext, setHasNext ] = useState(false);
    const [ accessToken, setAccessToken ] = useState();

    // Return the city name based on zipcode
    function getCityName() {
        const currZip = parseInt(zipCode);

        const cityObj = citiesData.filter( (city:any) => city.zip_code === currZip)[0];
        return cityObj.city;
    }
    
    // Get coordinates based on zip code
    function getCoordsFromZip(params: string) {
        const currZip = parseInt(params);

        const cityObj = citiesData.filter( (city:any) => city.zip_code === currZip)[0];
        return(`${cityObj.latitude}%2C${cityObj.longitude}`);
    }

    function handleChange(e:any) {
        setzipCode(e.target.value);
    }

    // Make API request to internal server API
    async function getGroceryData() {
        const url = `/api/test`;

        const rad = radius;
        const loc = getCoordsFromZip(zipCode);

        const res = await fetch(`${url}?rad=${rad}&loc=${loc}`);

        if (!res.ok) {
            throw new Error('Failed to fetch grocery data');
        } return res.json();
    }
    
    async function getClayData() {
        const url = `/api/test`;

        const rad = radius;
        const loc = getCoordsFromZip("25043");

        const res = await fetch(`${url}?rad=${rad}&loc=${loc}`);

        if (!res.ok) {
            throw new Error('Failed to fetch clay data');
        } return res.json();
    }

    async function handleSubmit(e:any) {
        e.preventDefault();
        setIsZero(false);
        setGroceryData([]);
        setLoading(true);
        setReady(false);

        // Make API request
        getClayData().then(meta => {
            console.log('Getting clay count')
            setClayCount(meta.results.length)
        })

        getGroceryData().then(meta => {
            const data = meta.results.map((grocery:any) => {
                return grocery.name;
            });
            const cityName = getCityName();


            setGroceryCount(meta.results.length);

            if (meta.results.length == 0) setIsZero(true);

            setGroceryData(data);
            setcityName(cityName);

            setReady(true);
            setLoading(false);
        });
        
    }

    return (
        <>
            <div className="text-center">
                <GroceryCanvas num={String(groceryCount)}/>

                <p>Without nearby groceries, it can be difficult to keep healthy. Enter your zip code and see how your area compares to Clay, WV, where Dr. Becher works.</p>

                {/* Form for getting user zip and radius */}
                <form className="dark: text-black" action="" onSubmit={handleSubmit}>
                    <input onChange={e => setzipCode(e.target.value)} value={zipCode} type="text" placeholder="22201"/>
                    <input onChange={e => setRadius(e.target.value)} value={radius}  type="text" placeholder="400"/>
                    <br/>
                    <button className="h-10 px-5 m-2 text-white transition-colors duration-150 hover:bg-[#525252] rounded-lg focus:shadow-outline bg-[#3c2825]">Click to submit</button>
                </form>

                {/* Loading Message */}
                { loading ? (
                    <p className="text-gray-300">Loading...</p>
                ): <></> }

                {/* Results */}
                { ready && !isZero ? (
                    <p style={{marginBottom: 0}}>In a {radius} meter radius around {cityName}, you have {groceryCount} groceries.</p>  
                ): <></> }

                { ready && isZero ? (
                    <p className="text-gray-300">You have no groceries nearby in a {radius} meter radius. Please try again with a larger number.</p>  
                ): <></> }
                
                {groceryData.map((grocery, index) => {
                    return (
                        <p style={{margin: 0}} className="text-base" key={index}>- {grocery}</p>
                    )
                })}

                { ready && !isZero ? ( 
                    <p>In contrast, Clay, WV has {clayCount} groceries in the same distance.</p> 
                ): <></>}
            </div>
        </>
    );
}