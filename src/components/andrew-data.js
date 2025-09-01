import React, {useEffect, useState} from "react";
import AndrewName from './andrewnameplate'

function AndrewData() {

    const [powerLevel, setPowerLevel] = useState(null);



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
    if (powerLevel < 10) {
        var skill = "Normal Difficulty"
    } else if (powerLevel < 150) {
        var skill = "Advanced Difficulty"
    } else if (powerLevel < 250) {
        var skill = "Expert Difficulty"
    } else if (powerLevel < 350) {
        var skill = "Master Difficulty"
    } else if (powerLevel < 440) {
        var skill = "Grandmaster Difficulty"
    } else {
        var skill = "Ultimate Difficulty"
    }
return (
    
    <div className="container">
        <div className="card">
            <AndrewName />
            <p className="text-center">Current Power Level: <span className="font-bold">{powerLevel}</span></p>
            <p>To increase your power, focus on the following activities:</p>
            <p>Solo Ops: {skill}</p>
            <p>Fireteam Ops: {skill}</p>
            <p>Pinnacle Ops: {skill}</p>
            <p>The Crucible</p>
            <p>Customizing difficulty and modifers may change rewards.</p>
        </div>
    </div>

    
)
}


export default AndrewData;