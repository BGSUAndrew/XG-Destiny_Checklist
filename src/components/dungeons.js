import React, { useEffect, useState } from 'react'
import dungeon_shattered from '../images/dungeon_shattered.webp'
import dungeon_pit from '../images/dungeon_pit_of_heresy.webp'
import dungeon_prophecy from '../images/dungeon_prophecy.webp'
import dungeon_grasp from '../images/dungeon_grasp.webp'
import dungeon_duality from '../images/dungeon_duality.webp'
import dungeon_spire from '../images/dungeon_spire_of_the_watcher.webp'
import dungeon_ghosts from '../images/dungeon_ghosts_of_the_deep.webp'
import dungeon_warlords from '../images/dungeon_ridgeline.jpg'
import dungeon_vespers from '../images/vespers_host.jpg'

function Dungeon() {

    const [dungeonShattered, setdungeonShattered] = useState();
    const [pit, setPit] = useState(null);
    const [prophecy, setProphecy] = useState(null);
    const [duality, setDuality] = useState(null);
    const [spire, setSpire] = useState(null);
    const [ghosts, setGhosts] = useState(null);
    const [warlords, setWarlords] = useState(null);
    const [vespers, setVespers] = useState(null)

    var grasp = false;

    if (warlords != null) {
        var grasp = true;
    } else {

    }

    useEffect(() => {
        const fetchData = async() => {
        const url = "https://www.bungie.net/platform/Destiny2/Milestones";
        const getData = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        getData.json().then(json => {
            setdungeonShattered(json.Response[1742973996].activities[0].challengeObjectiveHashes[0]);
            setPit(json.Response[422102671].activities[0].challengeObjectiveHashes[0]);
            setProphecy(json.Response[478604913].activities[0].challengeObjectiveHashes[0]);
            setDuality(json.Response[3618845105].activities[0].challengeObjectiveHashes[0]);
            setSpire(json.Response[526718853].activities[0].challengeObjectiveHashes[0]);
            setGhosts(json.Response[390471874].activities[0].challengeObjectiveHashes[0]);
            setWarlords(json.Response[3921784328].activities[0].challengeObjectiveHashes[0]);
            setVespers(json.Response[1080663862].activities[0].challengeObjectiveHashes[0]);
          });
        }
        fetchData();
       },[]);

        return (
             <div className='container'>
                   <div>
                        <div className='rituals card'>
                        <section className='nightfall_info'>
                        <h2>Dungeon Rotator</h2>
                        <div>
                        {dungeonShattered === 3838169295 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Shattered Throne</p>
                       <p>Strike back at the curse that plagues the Dreaming City.</p>
                       <img className='img-fluid w-500' src={dungeon_shattered} alt='shattered art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {pit === 1283234589 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Pit of Heresy</p>
                       <p>Deep beneath Sorrow's Harbor, the Hive keep their darkest secrets.</p>
                       <img className='img-fluid w-500' src={dungeon_pit} alt='pit art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {prophecy === 2039792527 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Prophecy</p>
                       <p>Enter the realm of the Nine and ask the question: "What is the nature of the Darkness?"</p>
                       <img className='img-fluid w-500' src={dungeon_prophecy} alt='prophecy art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {grasp === true ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Grasp of Avarice</p>
                       <p>A cautionary tale for adventurers willing to trade their humanity for riches.</p>
                       <img className='img-fluid w-500' src={dungeon_grasp} alt='grasp art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {duality === 3039545165 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Duality</p>
                       <p>Dive into the depths of the exiled emperor's mind in search of dark secrets.</p>
                       <img className='img-fluid w-500' src={dungeon_duality} alt='duality art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {spire === 3211393925 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Spire of the Watcher</p>
                       <p>Machinations run wild in this dust-ridden ruin. Bring them to heel.</p>
                       <img className='img-fluid w-500' src={dungeon_spire} alt='spire art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {ghosts === 2697564403 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Ghosts of the Deep</p>
                       <p>Drown in the deep, or rise from it.</p>
                       <img className='img-fluid w-500' src={dungeon_ghosts} alt='Ghosts of the Deep art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {warlords ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Warlord's Ruin</p>
                       <p>Nestled deep in the mountains of the EDZ, Scorn lay claim to a Dark Age castle containing dangerous relics, and a blighted vengeance festers in the dirt.</p>
                       <img className='img-fluid w-500' src={dungeon_warlords} alt='Warlords Ruin art'></img>
                       </div> : null }
                       {vespers ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Vesper's Host</p>
                       <p>Defy the algorithm. Cut through its web.</p>
                       <img className='img-fluid w-500' src={dungeon_vespers} alt='Vespers Host art'></img>
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

        

export default Dungeon;