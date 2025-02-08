import React, { useEffect, useState } from 'react'
import JoeName from './joenameplate';
function JoeDungeonStats() {

    const [dates, setDates] = useState([]);
    const [dungeonNameHash, setDungeonNameHash] = useState([]);
    const [dungeonCompletionTime, setDungeonCompletionTime] = useState([]);
    const [dungeonRuns, setDungeonRuns] = useState([]);
    const [result, setResult] = useState([]);
    const [kills, setKills] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [button, setButton] = useState({visible: true});

    
    const getDungeonName = (dungeonName) => {
        if (dungeonName === 2032534090) {
            return "The Shattered Throne"
        } else if (dungeonName === 1375089621) {
            return "Pit of Heresy"
        } else if (dungeonName === 1077850348) {
            return "Prophecy"
        } else if (dungeonName === 4078656646) {
            return "Grasp of Avarice"
        } else if (dungeonName === 2823159265) {
            return "Duality"
        } else if (dungeonName === 1262462921) {
            return "Spire of the Watcher"
        } else if (dungeonName === 313828469) {
            return "Ghosts of the Deep"
        } else if (dungeonName === 2004855007) {
            return "Warlord's Ruin"
        } else if (dungeonName === 300092127) {
            return "Vesper's Host"
        }  else {
            return "Sundered Doctrine"
        }
    }

    useEffect(() => {

        const fetchData = async() => {
        const url = "https://www.bungie.net/Platform/Destiny2/1/Account/4611686018518057094/Character/2305843009889894407/Stats/Activities/?mode=82";
        const getData = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        });
        const json = await getData.json();
        const activities = json.Response.activities
        const datesArray = [];
        const dungeonHashArray = [];
        const dungeonCompletionTimeArray = [];
        const resultArray = [];
        const killsArray = [];
        const deathsArray = [];

            for (const dungeon of activities) {
                const date = new Date(dungeon.period);
                const formattedDate = date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                datesArray.push(formattedDate);
                dungeonHashArray.push(dungeon.activityDetails.directorActivityHash);
                dungeonCompletionTimeArray.push(dungeon.values.activityDurationSeconds.basic.displayValue);
                resultArray.push(dungeon.values.completed.basic.displayValue);
                killsArray.push(dungeon.values.kills.basic.displayValue);
                deathsArray.push(dungeon.values.deaths.basic.displayValue);
            }
            setDates(datesArray);
            setDungeonNameHash(dungeonHashArray);
            setDungeonCompletionTime(dungeonCompletionTimeArray);
            setResult(resultArray);
            setKills(killsArray);
            setDeaths(deathsArray);

            const dungeonRunsArray = datesArray.map((item, index) => ({
                dateComplete: item, 
                dungeonName: dungeonHashArray[index],
                dungeonRunTime: dungeonCompletionTimeArray[index],
                dungeonResult: resultArray[index],
                killsResult: killsArray[index],
                deathsResult: deathsArray[index]
            }));
            setDungeonRuns(dungeonRunsArray);
  
          };
        fetchData();
       },[]);
return (
    <div>
             <button onClick={() => {
                    setButton( prevState =>  ({visible: !prevState.visible}));
                }}
                className='data_button'
            >
                {button.visible ? 'Hide player data' : 'Show player data'}
                
            </button>
            { button.visible == true ?
    <div className='container'>
    <JoeName></JoeName>
    <div className='data_container'>
<div className='rituals card'>
    {dungeonRuns.map((group, index) => (
        <div className='card' id="group" key={index}>
            <p>Date: {group.dateComplete}</p>
            <p>Dungeon name: {getDungeonName(group.dungeonName)}</p>
            <p>Run length: {group.dungeonRunTime}</p>
            <p>Completed: {group.dungeonResult}</p>
            <p>Total Kills: {group.killsResult}</p>
            <p>Total Deaths: {group.deathsResult}</p>

        </div>
    ))}
</div>
</div>
</div>
: false }
</div>

    

)
}

export default JoeDungeonStats;


