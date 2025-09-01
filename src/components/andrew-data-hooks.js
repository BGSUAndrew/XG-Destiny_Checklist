import React, {useEffect, useState} from "react";

function AndrewData() {

    const [powerLevel, setPowerLevel] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            const url = "https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018430407175/?components=100,200,202";
            const getData = await fetch(url, {
                headers: {
                    'x-api-key': '2c6c008e57644a4bb63f00504758c443'
                }
            })
            getData.json().then(json => {
                setPowerLevel(json.Response.characters.data["2305843009263048442"].light)
                console.log(powerLevel);

            });
        }
        fetchData();

    },[]);
return (
    <div>
    <p>Hello world</p>
    <p>{powerLevel}</p>
    </div>

    
)
}


export default AndrewData;