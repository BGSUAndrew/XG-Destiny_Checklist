import React, { useEffect, useState } from 'react'
import presageImage from '../images/exotic_quest_presage.webp'
import shieldImage from '../images/season_19_exotic_mission.jpg'
import voxImage from '../images/exotic_mission_chrome.webp'


function ExoticMission() {

    const [presage, setPresage] = useState();
    const [vox, setVox] = useState(null);
    const [shield, setShield] = useState(null);


    useEffect(() => {
        const fetchData = async() => {
        const url = "https://www.bungie.net/platform/Destiny2/Milestones";
        const getData = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        getData.json().then(json => {
            setPresage(json.Response[3557475774]);
            setVox(json.Response[1027301269]);
            setShield(json.Response[4244749316]);
          });
        }
        fetchData();
       },[]);

        return (
            <div className='container'>
                {(
                    <div>
                        <div className='rituals card'>
                        <section className='nightfall_info'>
                        <h2>Exotic Mission Rotator</h2>
                    <div>
                        {shield != null ? 
                       <div className='nightfall_info'>
                        <p className='nightfallTitle'>Operation: Seraph's Shield</p>
                        <p>Operation: Seraph's Shield</p>
                        <img className='img-fluid w-500' src={shieldImage} alt='Shield image'></img>
                       </div> : null }
                    </div>
                    <div>
                        {presage != null ? 
                       <div className='nightfall_info'>
                        <p className='nightfallTitle'>Presage</p>
                        <p>Jump coordinates matching an errant distress signal.</p>
                        <img className='img-fluid w-500' src={presageImage} alt='Presage image'></img>
                       </div> : null }
                    </div>
                    <div>
                        {vox != null ? 
                       <div className='nightfall_info'>
                        <p className='nightfallTitle'>Vox Obscura</p>
                        <p>A Psionic propaganda transmission threatens to destabilize the Vanguard's Cabal allies. Breach the rebel stronghold to discover who's behind the new Psionic offensive.</p>
                        <img className='img-fluid w-500' src={voxImage} alt='Presage image'></img>
                       </div> : null }
                    </div>

                       
                       </section>
                    </div>
    
                    </div>
                )}
            </div>
        )
    }

        

export default ExoticMission;