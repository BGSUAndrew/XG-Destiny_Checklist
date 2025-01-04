import React, { useEffect, useState } from 'react'
import AndrewName from './andrewnameplate';
function AndrewDungeonStats() {

    const [dates, setDates] = useState([]);
    const [dungeonNameHash, setDungeonNameHash] = useState([]);
    const [dungeonCompletionTime, setDungeonCompletionTime] = useState([]);
    const [dungeonRuns, setDungeonRuns] = useState([]);

    
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
        } else {
            return "Vesper's Host"
        }
    }

    useEffect(() => {

        const fetchData = async() => {
        const url = "https://www.bungie.net/Platform/Destiny2/1/Account/4611686018430407175/Character/2305843009263048442/Stats/Activities/?mode=82";
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
            }
            setDates(datesArray);
            setDungeonNameHash(dungeonHashArray);
            setDungeonCompletionTime(dungeonCompletionTimeArray);

            const dungeonRunsArray = datesArray.map((item, index) => ({
                dateComplete: item, 
                dungeonName: dungeonHashArray[index],
                dungeonRunTime: dungeonCompletionTimeArray[index]
            }));
            setDungeonRuns(dungeonRunsArray);
  
          };
        fetchData();
       },[]);
return (
    <div className='container'>
    <AndrewName></AndrewName>
        <div className='rituals card'>
            {dungeonRuns.map((group, index) => (
                <div id="group" key={index}>
                    <p>{group.dateComplete}</p>
                    <p>{getDungeonName(group.dungeonName)}</p>
                    <p>{group.dungeonRunTime}</p>
                </div>
            ))}
    </div>
    </div>
)
}

export default AndrewDungeonStats;


