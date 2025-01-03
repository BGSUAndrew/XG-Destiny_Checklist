import React, { useEffect } from 'react'
import AndrewName from './andrewnameplate';
function AndrewDungeonStats() {

    const date = [];

    useEffect(() => {
        const fetchData = async() => {
        const url = "https://www.bungie.net/Platform/Destiny2/1/Account/4611686018430407175/Character/2305843009263048442/Stats/Activities/?mode=82";
        const getData = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        getData.json().then(json => {
            var response = json.Response.activities;
            console.log(response);
            for (const dungeon of response) {
                var date = dungeon.period;
                var dungeonNameHash = dungeon.activityDetails.directorActivityHash;
                var dungeonCompletionTime = dungeon.values.activityDurationSeconds.basic.displayValue;
                console.log(dungeonCompletionTime);
            }
          });
        }
        fetchData();
       },[]);
return (
    <div className='container'>
    <AndrewName></AndrewName>
        <div className='rituals card'>
            {date}
    </div>
    </div>
)
}

export default AndrewDungeonStats;


