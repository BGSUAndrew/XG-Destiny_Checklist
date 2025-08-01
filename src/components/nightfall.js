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
import hypernet from '../images/lightfall_strike_plunger.jpeg'
import psiOps_bg_edz from '../images/battleground_chainsaw_s16.jpg'
import heist_bg_europa from '../images/season_19_battleground_europa.jpg'
import bg_hailstone from '../images/europa_battleground_hailstone.jpg'
import psiOps_bg_cosmo from '../images/battleground_nestegg_s16.jpg'
import bg_foothold from '../images/cosmodrome_battleground_foothold.jpg'
import psiOps_bg_moon from '../images/battleground_trespass_s16.jpg'
import heist_bg_moon from '../images/season_19_battleground_luna.jpg'
import heist_bg_mars from '../images/season_19_battleground_polaris.webp'
import bg_behemoth from '../images/nessus_battleground_behemoth.jpg'
import bg_oracle from '../images/nessus_battleground_oracle.jpg'
import defiant_edz from '../images/season_20_battleground_exeter.jpg'
import defiant_prison from '../images/season_20_battleground_bulkhead.jpg'
import defiant_cosmodrome from '../images/season_20_battleground_turnabout.jpg'
import liminality from '../images/strike_pickaxe.jpg'

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
        const nightfallData = data?.Response?.[2029743966]?.activities?.[0]?.activityHash || null;
        this.setState({nightfall: nightfallData, loading: false});

       console.log(this.state.nightfall)
       
      }
    
      render() {
        
        return (
            <div>

            {this.state.visible ? 
            <div className='container'>
                {this.state.loading || !this.state.nightfall ? (
                    <div><p>Nightfall not loaded</p></div>
                )  : (
                    <div>
                        <div className='rituals card'>
                        <section className='nightfall_info'>
                        <h2>Nightfall</h2>
                        <div>
                       {this.state.nightfall == "1495545955" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Scarlet Keep</p>
                       <p>Investigate the recently erected Scarlet Keep and discover its dark purpose.</p>
                       <img className='img-fluid w-500' src={scarlet} alt='strike art'></img>
                       </div> : null }
                       {this.state.nightfall == "2136458567" ? 
                       <div className='nightfall_info'>
                           <p className='nightfallTitle'>The Disgraced</p>
                           <p>Defeat the shamed Hive Wizard Navôta in the Cosmodrome.</p>
                           <img className='img-fluid w-500' src={disgraced} alt='strike art'></img>
                        </div> : null }
                       {this.state.nightfall == "1203950599" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Devils' Lair</p>
                       <p>Enter into the Devils' Lair and weaken the Fallen presence within the Cosmodrome.</p>
                       <img className='img-fluid w-500' src={devils} alt='strike art'></img>
                       </div> : null }
                       {this.state.nightfall == "3293630131" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Fallen S.A.B.E.R.</p>
                       <p>Enter Rasputin's bunker in the Cosmodrome and discover the source of the security breach.</p>
                       <img className='img-fluid w-500' src={saber} alt='strike art'></img>
                       </div> : null }
                       {this.state.nightfall == "2416314398" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Corrupted</p>
                       <p>Hunt down one of Queen Mara's most trusted advisors and free her from Taken possession.</p>
                       <img className='img-fluid w-500' src={corrupted} alt='strike art'></img>
                       </div> : null }
                       {this.state.nightfall == "1753547898" ? 
                        <div className='nightfall_info'>
                            <p className='nightfallTitle'>The Arms Dealer</p> 
                            <p>Shut down the operations of an ironmonger providing weapons to the Red Legion.</p>
                            <img className='img-fluid w-500' src={arms} alt='strike art'></img>
                        </div>
                       : null }
                       {this.state.nightfall == "3109193575" ? 
                        <div className='nightfall_info'>
                        <p className='nightfallTitle'>Lake of Shadows</p> 
                        <p>Stem the tide of Taken flowing into the European Dead Zone from beneath the waves.</p>
                        <img className='img-fluid w-500' src={shadows} alt='strike art'></img>
                        </div>
                        : null }
                       {this.state.nightfall == "3812135452" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Glassway</p> 
                       <p>Prevent ancient and powerful Vex from escaping the Glassway on Europa.</p>
                       <img className='img-fluid w-500' src={glassway} alt='strike art'></img>
                       </div>
                       : null }
                       {this.state.nightfall == "3029388711" ?
                       <div className='nightfall_info'> 
                       <p className='nightfallTitle'>The Insight Terminus</p>
                       <p>Break into the ancient Vex installation.</p>
                       <img className='img-fluid w-500' src={insight} alt='strike art'></img>
                       </div> : null }
                       {this.state.nightfall == "2599001912" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Inverted Spire</p> 
                       <p>End the Red Legion expedition that's ripped open the planet's surface.</p>
                       <img className='img-fluid w-500' src={inverted} alt='strike art'></img>
                       </div>
                       : null }
                       {this.state.nightfall == "2823591789" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Exodus Crash</p> 
                       <p>Purge the Fallen infestation of the Exodus Black.</p>
                       <img className='img-fluid w-500' src={exodus} alt='strike art'></img>
                       </div>
                       : null }
                       {this.state.nightfall == "2103025316" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Proving Grounds</p> 
                       <p>Defeat Caiatl's Chosen aboard the Land Tank, Halphas Electus, on Nessus.</p>
                       <img className='img-fluid w-500' src={proving} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "4196944363" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Warden of Nothing</p>
                       <p>Help the Drifter restore order at the Prison of Elders.</p>
                       <img className='img-fluid w-500' src={warden} alt='strike art'></img>
                       </div> : null }
                       {this.state.nightfall == "1964120202" ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Lightblade</p>
                       <p>Recover an artifact from a monument to Oryx, located deep in the swamps of Savathûn's throne world.</p>
                       <img className='img-fluid w-500' src={strike_lightblade} alt='lightblade art'></img>
                       </div> : null }
                       {this.state.nightfall == "2766844309" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Birthplace of the Vile</p> 
                       <p>An uneasy ally asks for a favor…</p>
                       <img className='img-fluid w-500' src={birthplace} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "2039642505" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Hypernet Current</p> 
                       <img className='img-fluid w-500' src={hypernet} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "4283638880" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>PsiOps Battleground: EDZ</p> 
                       <img className='img-fluid w-500' src={psiOps_bg_edz} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "3458527565" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Heist Battleground: Europa</p> 
                       <img className='img-fluid w-500' src={heist_bg_europa} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "881943178" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Battleground: Hailstone</p> 
                       <img className='img-fluid w-500' src={bg_hailstone} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "968118624" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Legend PsiOps Battleground: Cosmodrome</p> 
                       <img className='img-fluid w-500' src={psiOps_bg_cosmo} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "1593674947" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Battleground: Foothold</p> 
                       <img className='img-fluid w-500' src={bg_foothold} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "1764280968" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>PsiOps Battleground: Moon</p> 
                       <img className='img-fluid w-500' src={psiOps_bg_moon} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "1639515814" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Heist Battleground: Moon</p> 
                       <img className='img-fluid w-500' src={heist_bg_moon} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "507866985" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Heist Battleground: Mars</p> 
                       <img className='img-fluid w-500' src={heist_bg_mars} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "3982925799" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Battleground: Behemoth</p> 
                       <img className='img-fluid w-500' src={bg_behemoth} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "2969419387" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Battleground: Oracle</p> 
                       <img className='img-fluid w-500' src={bg_oracle} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "2748682955" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Defiant Battleground: EDZ</p> 
                       <img className='img-fluid w-500' src={defiant_edz} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "1030419224" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Defiant Battleground: Orbital Prison</p> 
                       <img className='img-fluid w-500' src={defiant_prison} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "53750501" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Defiant Battleground: Cosmodrome</p> 
                       <img className='img-fluid w-500' src={defiant_cosmodrome} alt='strike art'></img>
                       </div>: null }
                       {this.state.nightfall == "2099835175" ?
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Liminality</p> 
                       <img className='img-fluid w-500' src={liminality} alt='strike art'></img>
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