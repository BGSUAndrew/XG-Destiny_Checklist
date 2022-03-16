import React, { Component } from 'react'
import strike_lightblade from '../images/strike_lightblade.webp'
import devils from '../images/cosmodrome_devils_lair.webp'
import saber from '../images/cosmodrome_fallen_saber.webp'
import disgraced from '../images/cosmodrome-strike-gantry.webp'
import glassway from '../images/europa-strike-blackbird.webp'
import proving from '../images/nessus_proving_grounds.webp'
import warden from '../images/strike_aries.webp'
import birthplace from '../images/strike_birthplace.webp'
import exodus from '../images/strike_exodus_crash.webp'
import corrupted from '../images/strike_gemini.webp'
import insight from '../images/strike_glee.webp'
import inverted from '../images/strike_inverted_spire.webp'
import shadows from '../images/strike_lake_of_shadows.webp'
import arms from '../images/strike_the_arms_dealer.webp'
import scarlet from '../images/strike_the_scarlet_keep.webp'

class Nightfall extends Component {
    state = {
        loading: true,
        nightfall: [],
        visible: true
    }
      async componentDidMount() {
        const url = "https://www.bungie.net/platform/Destiny2/Milestones";
        const response = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        const data = await response.json();
        this.setState({nightfall: data.Response[1942283261].activities[0].activityHash, loading: false});
       console.log(this.state.nightfall)
       
      }
    
      render() {
        return (
            <div>

            {this.state.visible ? 
            <div className='container'>
                {this.state.loading || !this.state.nightfall ? (
                    <div>loading...</div>
                )  : (
                    <div>
                        <h1 id='nightfall'>Reset Info</h1>
                        <div className='rituals card'>
                        <section className='nightfall_info'>
                        <h2>Nightfall</h2>
                        <div>
                       {this.state.nightfall == "1495545952" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Scarlet Keep</p>
                       <p>Investigate the recently erected Scarlet Keep and discover its dark purpose.</p>
                       <img className='img-fluid' src={scarlet} alt='strike art'></img>
                       </div> : null }
                       {this.state.nightfall == "2136458564" ? 
                       <div className='nightfall_info'>
                           <p className='nightfallTitle'>The Disgraced</p>
                           <p>Defeat the shamed Hive Wizard Navôta in the Cosmodrome.</p>
                           <img className='img-fluid' src={disgraced} alt='strike art'></img>
                        </div> : null }
                       {this.state.nightfall == "1203950596" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Devils' Lair</p>
                       <p>Enter into the Devils' Lair and weaken the Fallen presence within the Cosmodrome.</p>
                       <img className='img-fluid' src={devils} alt='strike art'></img>
                       </div> : null }
                       {this.state.nightfall == "3293630128" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Fallen S.A.B.E.R.</p>
                       <p>Enter Rasputin's bunker in the Cosmodrome and discover the source of the security breach.</p>
                       <img className='img-fluid' src={saber} alt='strike art'></img>
                       </div> : null }
                       {this.state.nightfall == "2416314397" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Corrupted</p>
                       <p>Hunt down one of Queen Mara's most trusted advisors and free her from Taken possession.</p>
                       <img className='img-fluid' src={corrupted} alt='strike art'></img>
                       </div> : null }
                       {this.state.nightfall == "1753547897" ? 
                        <div className='nightfall_info'>
                            <p className='nightfallTitle'>The Arms Dealer</p> 
                            <p>Shut down the operations of an ironmonger providing weapons to the Red Legion.</p>
                            <img className='img-fluid' src={arms} alt='strike art'></img>
                        </div>
                       : null }
                       {this.state.nightfall == "3109193572" ? 
                        <div className='nightfall_info'>
                        <p className='nightfallTitle'>Lake of Shadows</p> 
                        <p>Stem the tide of Taken flowing into the European Dead Zone from beneath the waves.</p>
                        <img className='img-fluid' src={shadows} alt='strike art'></img>
                        </div>
                        : null }
                       {this.state.nightfall == "3812135455" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Glassway</p> 
                       <p>Prevent ancient and powerful Vex from escaping the Glassway on Europa.</p>
                       <img className='img-fluid' src={glassway} alt='strike art'></img>
                       </div>
                       : null }
                       {this.state.nightfall == "3029388708" ?
                       <div className='nightfall_info'> 
                       <p className='nightfallTitle'>The Insight Terminus</p>
                       <p>Break into the ancient Vex installation.</p>
                       <img className='img-fluid' src={insight} alt='strike art'></img>
                       </div> : null }
                       {this.state.nightfall == "2599001915" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Inverted Spire</p> 
                       <p>End the Red Legion expedition that's ripped open the planet's surface.</p>
                       <img className='img-fluid' src={inverted} alt='strike art'></img>
                       </div>
                       : null }
                       {this.state.nightfall == "3233498450" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Exodus Crash</p> 
                       <p>Purge the Fallen infestation of the Exodus Black.</p>
                       <img className='img-fluid' src={exodus} alt='strike art'></img>
                       </div>
                       : null }
                       {this.state.nightfall == "2103025319" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Proving Grounds</p> 
                       <p>Defeat Caiatl's Chosen aboard the Land Tank, Halphas Electus, on Nessus.</p>
                       <img className='img-fluid' src={proving} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "4196944360" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Warden of Nothing</p>
                       <p>Help the Drifter restore order at the Prison of Elders.</p>
                       <img className='img-fluid' src={warden} alt='strike art'></img>
                       </div> : null }
                       {this.state.nightfall == "1964120201" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Lightblade</p>
                       <p>Recover an artifact from a monument to Oryx, located deep in the swamps of Savathûn's throne world.</p>
                       <img className='img-fluid' src={strike_lightblade} alt='lightblade art'></img>
                       </div> : null }
                       {this.state.nightfall == "2766844310" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Birthplace of the Vile</p> 
                       <p>An uneasy ally asks for a favor…</p>
                       <img className='img-fluid' src={birthplace} alt='strike art'></img>
                       </div>: null }
                       </div>
                       <div>
             
                       </div>
                       </section>
                    </div>
    
                    </div>
                )}
            </div>
             : null  }
            </div>
          )
      }
    }

export default Nightfall;