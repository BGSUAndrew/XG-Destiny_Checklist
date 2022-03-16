import React, { Component } from 'react'

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
        this.setState({crucible: data.Response[3312774044].activities[3].activityHash, loading: false});
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
                        <section className='challenge'>
                        <h2>Crucible Rotator</h2>
                        <div>
                       {this.state.crucible == "3847433434" ? <p>Mayhem</p> : null }
                       {this.state.crucible == "935998519" ? <p>Momentum Control</p> : null }
                       {this.state.crucible == "2303927902" ? <p>Clash</p> : null }
                       {this.state.crucible == "3787302650" ? <p>Team Scorched</p> : null }
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