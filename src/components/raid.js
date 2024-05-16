import React, { useEffect, useState } from 'react'
import raid_dsc from '../images/raid_dsc.webp'
import raid_vault from '../images/raid_vault.webp'
import raid_vow from '../images/raid_vow.jpg'
import raid_last from '../images/raid_last.jpg'
import raid_garden from '../images/raid_garden.webp'
import raid_king from '../images/raid_kings_fall.webp'
import raid_root from '../images/raid_root_of_nightmares.jpg'

function Raid() {

    const [garden, setGarden] = useState(null);
    const [vault, setVault] = useState(null);
    const [vow, setVow] = useState(null);
    const [deep, setDeep] = useState(null);
    const [last, setLast] = useState(null);
    const [king, setKing] = useState(null);
    const [root, setRoot] = useState(null);
    
    useEffect(() => {
        const fetchData = async() => {
        const url = "https://www.bungie.net/platform/Destiny2/Milestones";
        const getData = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        getData.json().then(json => {
            setGarden(json.Response[2712317338].activities[0].challengeObjectiveHashes.length);
            setVault(json.Response[1888320892].activities[0].challengeObjectiveHashes.length);
            setVow(json.Response[2136320298].activities[0].challengeObjectiveHashes.length);
            setDeep(json.Response[541780856].activities[0].challengeObjectiveHashes.length);
            setLast(json.Response[3181387331].activities[0].challengeObjectiveHashes.length);
            setKing(json.Response[292102995].activities[0].challengeObjectiveHashes.length);
            setRoot(json.Response[3699252268].activities[0].challengeObjectiveHashes.length);
          });
          console.log(setVault);
        }
        fetchData();
       },[]);

        return (
             <div className='container'>
                    <div>
                        <div className='rituals card'>
                        <section className='nightfall_info'>
                        <h2>Raid Rotator</h2>
                        <div>
                        {garden === 1 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Garden of Salvation</p>
                        <p>Defeat the Sanctified Mind.</p>
                        <img className='img-fluid w-500' src={raid_garden} alt='garden art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {vault === 1 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Vault of Glass</p>
                       <p>Beneath Venus, evil stirs…</p>
                       <img className='img-fluid w-500' src={raid_vault} alt='vault art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {vow === 1 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Vow of the Disciple</p>
                       <p>The disciple beckons…</p>
                       <img className='img-fluid w-500' src={raid_vow} alt='vow art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {deep === 1 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Deep Stone Crypt</p>
                       <p>The chains of legacy must be broken.</p>
                       <img className='img-fluid w-500' src={raid_dsc} alt='dsc art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {last === 1 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Last Wish</p>
                       <img className='img-fluid w-500' src={raid_last} alt='last wish art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {king === 1 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>King's Fall</p>
                       <img className='img-fluid w-500' src={raid_king} alt='Kings Fall art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {root === 1 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Root of Nightmares</p>
                       <p>A sinister threat has taken root.</p>
                       <img className='img-fluid w-500' src={raid_root} alt='Root of Nightmares art'></img>
                       </div> : null }
                       </div>
                       
                       <div>
             
                       </div>
                       </section>
                    </div>
    
                    </div>
                    </div>
        )
    }

        

export default Raid;