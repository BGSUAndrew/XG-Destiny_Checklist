import React, { Component } from 'react'
import crucible from '../images/crucible.png'

class Crucible extends Component {
    state = {
        loading: true,
        crucible: [],
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
        this.setState({crucible: data.Response[3312774044].activities[0].activityHash, loading: false});
       console.log(this.state.crucible)
       
      }
    
      render() {
        return (
            <div>

            {this.state.visible ? 
            <div className='container'>
                {this.state.loading || !this.state.crucible ? (
                    <div>loading...</div>
                )  : (
                    <div>
                        <div className='rituals card'>
                        <section className='nightfall_info'>
                        <h2>Crucible Rotator</h2>
                        <div>
                            {this.state.crucible == "142028034" ?
                            <div className='crucible_info'>
                                <p>Showdown</p>
                                <img className='img-fluid' src={crucible} alt='crucible art'></img>
                            </div>
                           : null }
                       </div>
                       <div>
                            {this.state.crucible == "3847433434" ?
                            <div className='crucible_info'>
                                <p>Mayhem</p>
                                <img className='img-fluid' src={crucible} alt='crucible art'></img>
                            </div>
                           : null }
                       </div>
                       <div>
                            {this.state.crucible == "3787302650" ?
                            <div className='crucible_info'>
                                <p>Team Scorched</p>
                                <img className='img-fluid' src={crucible} alt='crucible art'></img>
                            </div>
                           : null }
                       </div>
                       <div>
                            {this.state.crucible == "2056796644" ?
                            <div className='crucible_info'>
                                <p>Rift</p>
                                <img className='img-fluid' src={crucible} alt='crucible art'></img>
                            </div>
                           : null }
                       </div>
                       <div>
                            {this.state.crucible == "1108887474" ?
                            <div className='crucible_info'>
                                <p>Clash</p>
                                <img className='img-fluid' src={crucible} alt='crucible art'></img>
                            </div>
                           : null }
                       </div>
                       <div>
                            {this.state.crucible == "935998519" ?
                            <div className='crucible_info'>
                                <p>Momentum Control</p>
                                <img className='img-fluid' src={crucible} alt='crucible art'></img>
                            </div>
                           : null }
                       </div>
                       <div>
                            {this.state.crucible == "1717505396" ?
                            <div className='crucible_info'>
                                <p>Control</p>
                                <img className='img-fluid' src={crucible} alt='crucible art'></img>
                            </div>
                           : null }
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

export default Crucible;