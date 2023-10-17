import React, { Component } from 'react'
import dungeon_shattered from '../images/dungeon_shattered.webp'
import dungeon_pit from '../images/dungeon_pit_of_heresy.webp'
import dungeon_prophecy from '../images/dungeon_prophecy.webp'
import dungeon_grasp from '../images/dungeon_grasp.webp'
import dungeon_duality from '../images/dungeon_duality.webp'
import dungeon_spire from '../images/dungeon_spire_of_the_watcher.webp'



class Dungeon extends Component {
    state = {
        loading: true,
        visible: true,
        dungeonShattered: [],
        pitOfHeresy: [],
        prophecy: [],
        grasp: [],
        spire: []

    }
      async componentDidMount() {
        const url = "https://www.bungie.net/platform/Destiny2/Milestones";
        const response = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        const data = await response.json();
        this.setState({dungeonShattered: data.Response[1742973996].activities[0].challengeObjectiveHashes[0]});
        this.setState({pitOfHeresy: data.Response[422102671].activities[0].challengeObjectiveHashes[0]});
        this.setState({prophecy: data.Response[478604913].activities[0].challengeObjectiveHashes[0]});
        //this.setState({grasp: data.Response[1092691445].activities[0].challengeObjectiveHashes[0]});
        this.setState({duality: data.Response[3618845105].activities[0].challengeObjectiveHashes[0]});
        this.setState({spire: data.Response[526718853].activities[0].challengeObjectiveHashes[0]});
       console.log(this.state.spire)
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
                        <h2>Dungeon Rotator</h2>
                        <div>
                        {this.state.dungeonShattered === 2039792527 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>The Shattered Throne</p>
                       <img className='img-fluid w-500' src={dungeon_shattered} alt='shattered art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {this.state.pitOfHeresy === 1283234589 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Pit of Heresy</p>
                       <img className='img-fluid w-500' src={dungeon_pit} alt='pit art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {this.state.prophecy === 2039792527 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Prophecy</p>
                       <img className='img-fluid w-500' src={dungeon_prophecy} alt='prophecy art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {this.state.grasp === 1092691445 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Grasp of Avarice</p>
                       <img className='img-fluid w-500' src={dungeon_grasp} alt='grasp art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {this.state.duality === 3039545165 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Duality</p>
                       <img className='img-fluid w-500' src={dungeon_duality} alt='duality art'></img>
                       </div> : null }
                       </div>
                       <div>
                        {this.state.spire === 3211393925 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Spire of the Watcher</p>
                       <p>Machinations run wild in this dust-ridden ruin. Bring them to heel.</p>
                       <img className='img-fluid w-500' src={dungeon_spire} alt='spire art'></img>
                       </div> : null }
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
           
            </div>
          )
      }
    }

export default Dungeon;