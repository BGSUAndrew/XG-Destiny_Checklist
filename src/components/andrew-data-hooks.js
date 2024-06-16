import React, {useEffect, useState} from "react";

//all of the data we are tracking 
//gunsmith
//Trials
//Trials bounties 
//warlords 
//crota 

//Exotic Rotator Challenge 
//Excision

function AndrewData() {
    const [ritualsOne, setRitualsOne] = useState(null);
    const [ritualsTwo, setRitualsTwo] = useState(null);
    const [ritualsThree, setRitualsThree] = useState(null);
    const [paleHeartPath, setPaleHeartPath] = useState(null);
    const [pathFinder, setPathFinder] = useState(null);
    const [gunsmith, setGunsmith] = useState(null);
    const [ghost, setGhost] = useState(null);
    const [excision, setExcision] = useState(null);
    const [exoticRotator, setExoticRotator] = useState(null);
    const [warlords, setWarlords] = useState(null);
    const [crota, setCrota] = useState(null);
    const [trials, setTrials] = useState(null);
    const [trialsWins, setTrialsWins] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            const url = "https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018430407175/Character/2305843009263048442/?components=202";
            const getData = await fetch(url, {
                headers: {
                    'x-api-key': '2c6c008e57644a4bb63f00504758c443'
                }
            })
            getData.json().then(json => {
                setRitualsOne(json.Response.progressions.data.milestones);
                setRitualsTwo(json.Response.progressions.data.milestones);
                setRitualsThree(json.Response.progressions.data.milestones);
                setPaleHeartPath(json.Response.progressions.data.milestones["1816391649"]);
                setPathFinder(json.Response.progressions.data.milestones["3480513797"]);
                setGunsmith(json.Response.progressions.data.milestones["3899487295"]);
                setGhost(json.Response.progressions.data.milestones["2603713309"]);
                setExcision(json.Response.progressions.data.milestones["930637700"]);
                setExoticRotator(json.Response.progressions.data.milestones["4244749316"]);
                setWarlords(json.Response.progressions.data.milestones["3921784328"]);
                setCrota(json.Response.progressions.data.milestones["540415767"]);
                setTrials(json.Response.progressions.data.milestones["3007559996"]);
                setTrialsWins(json.Response.progressions.data.milestones["3842941126"])

            });
        }
        fetchData();
        console.log("Rituals one" + ritualsOne);
        console.log("Rituals Two" + ritualsTwo);
        console.log("Rituals Three" + ritualsThree);
        console.log("Pale Heart Path" + paleHeartPath);
        console.log("Pathfinder" + pathFinder);
        console.log("gunsmith" + gunsmith);
        console.log("ghost" + ghost);
        console.log("excision" + excision);
        console.log("exotic" + exoticRotator);
        console.log("warlords run" + warlords);
        console.log("crotas end" + crota);
        console.log("Trials" + trials);
        console.log("Trials wins" + trialsWins);
    },[]);
return (
    <p>Hello world</p>
)
}


export default AndrewData;