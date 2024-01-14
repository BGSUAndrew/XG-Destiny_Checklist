import React, { Component } from 'react'
import presageImage from '../images/exotic_quest_presage.webp'
import shieldImage from '../images/season_19_exotic_mission.jpg'
import voxImage from '../images/exotic_mission_chrome.webp'



class exoticMission extends Component {
    state = {
        loading: true,
        visible: true,
        presage: [],
        vox: [],
        shield:[]
    }
      async componentDidMount() {
        const url = "https://www.bungie.net/platform/Destiny2/Milestones";
        const response = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        const data = await response.json();
        this.setState({shield: data.Response[4244749316].milestoneHash});
        this.setState({presage: data.Response[3557475774].milestoneHash});
        this.setState({vox: data.Response[1027301269].milestoneHash});

        //console.log(data.Response[4244749316].milestoneHash)
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
                        <h2>Exotic Mission Rotator</h2>
                    <div>
                        {this.state.shield === 4244749316 ? 
                       <div className='nightfall_info'>
                        <p className='nightfallTitle'>Operation: Seraph's Shield</p>
                        <p>Operation: Seraph's Shield</p>
                        <img className='img-fluid w-500' src={shieldImage} alt='Shield image'></img>
                       </div> : null }
                    </div>
                    <div>
                        {this.state.shield === 3557475774 ? 
                       <div className='nightfall_info'>
                        <p className='nightfallTitle'>Presage</p>
                        <p>Jump coordinates matching an errant distress signal.</p>
                        <img className='img-fluid w-500' src={presageImage} alt='Presage image'></img>
                       </div> : null }
                    </div>
                    <div>
                        {this.state.shield === 1027301269 ? 
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
             : null  }
            </div>
           
            </div>
          )
      }
    }

export default exoticMission;