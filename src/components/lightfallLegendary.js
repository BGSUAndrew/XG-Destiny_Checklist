import React, { Component } from 'react'
import firstContact from '../images/lightfall_mission_chaos_orbit.webp'
import underSeige from '../images/lightfall_mission_haste.jpg'
import downfall from '../images/lightfall_mission_lancer.jpg'
import breakneck from '../images/lightfall_mission_lockdown.jpg'
import verge from '../images/lightfall_mission_workout.jpg'
import beast from '../images/lightfall_mission_beastmaster.jpg'
import lofi from '../images/lightfall_mission_unleashed_lofi.webp'
import suplex from '../images/lightfall_mission_suplex.jpg'



class lightfallLegendary extends Component {
    state = {
        loading: true,
        visible: true,
        lightfallLegendary: []

    }
      async componentDidMount() {
        const url = "https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018430407175/Character/2305843009263048442/?components=202";
        const response = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        const data = await response.json();
        this.setState({lightfallLegendary: data.Response.progressions.data.milestones[793110320].activities[0].activityHash});
        console.log(this.state.lightfallLegendary)  
    }
      
    
      render() {
        return (
            <div>
               <div>
            {this.state.visible ? 
            <div className='container'>
                {(
                    <div>
                        <div className='rituals card'>
                        <section className='nightfall_info'>
                        <h2>Lightfall Weekly Legendary Mission</h2>
                    <div>
                        {this.state.lightfallLegendary === 2489923989 ? 
                       <div className='nightfall_info'>
                        <p className='nightfallTitle'>First Contact</p>
                        <p>Find Osiris in the Shadow Legion fleet and sow chaos through their ranks.</p>
                        <img className='img-fluid w-500' src={firstContact} alt='firstcontact image'></img>
                       </div> : null }
                    </div>
                    <div>
                        {this.state.lightfallLegendary === 2814341192 ? 
                       <div className='nightfall_info'>
                        <p className='nightfallTitle'>Under Siege</p>
                        <p>Recon the Shadow Legion occupation of Neomuna and keep the Veil safe.</p>
                        <img className='img-fluid w-500' src={underSeige} alt='under seige image'></img>
                       </div> : null }
                    </div>
                    <div>
                        {this.state.lightfallLegendary === 1257086861 ? 
                       <div className='nightfall_info'>
                        <p className='nightfallTitle'>Downfall</p>
                        <p>Infiltrate the heart of Calus's lair and destroy the Darkness relay.</p>
                        <img className='img-fluid w-500' src={downfall} alt='downfall image'></img>
                       </div> : null }
                    </div>
                    <div>
                        {this.state.lightfallLegendary === 1565392032 ? 
                       <div className='nightfall_info'>
                        <p className='nightfallTitle'>Breakneck</p>
                        <p>Stop the Vex incursion of the Neomuni CloudArk.</p>
                        <img className='img-fluid w-500' src={breakneck} alt='breakneck image'></img>
                       </div> : null }
                    </div>
                    <div>
                        {this.state.lightfallLegendary === 28778404 ? 
                       <div className='nightfall_info'>
                        <p className='nightfallTitle'>On the Verge</p>
                        <p>Learn the ways of Strand together with Osiris.</p>
                        <img className='img-fluid w-500' src={verge} alt='on the verge image'></img>
                       </div> : null }
                    </div>
                    <div>
                        {this.state.lightfallLegendary === 1267275762 ? 
                       <div className='nightfall_info'>
                        <p className='nightfallTitle'>No Time Left</p>
                        <p>Stop the Darkness relay from activating and creating a link between the Witness and the Veil.</p>
                        <img className='img-fluid w-500' src={beast} alt='no time left image'></img>
                       </div> : null }
                    </div>
                    <div>
                        {this.state.lightfallLegendary === 759827239 ? 
                       <div className='nightfall_info'>
                        <p className='nightfallTitle'>Headlong</p>
                        <p>Fully master the philosophy of Strand.</p>
                        <img className='img-fluid w-500' src={lofi} alt='lofi image'></img>
                       </div> : null }
                    </div>
                    <div>
                        {this.state.lightfallLegendary === 2098315978 ? 
                       <div className='nightfall_info'>
                        <p className='nightfallTitle'>Desperate Mission</p>
                        <p>Fight alongside your allies in a final stand against Calus, the Disciple.</p>
                        <img className='img-fluid w-500' src={suplex} alt='suplex image'></img>
                       </div> : null }
                    </div>
                       
                       </section>
                    </div>
    
                    </div>
                )}
            </div>
             : null  }
            </div>
           
            </div>
          )
      }
    }

export default lightfallLegendary;