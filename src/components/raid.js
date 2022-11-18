import React, { Component } from 'react'

class Raid extends Component {
    state = {
        loading: true,
        raid: [],
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
        this.setState({garden: data.Response[2712317338].activities[0].challengeObjectiveHashes.length, loading: false});
        this.setState({vault: data.Response[1888320892].activities[0].challengeObjectiveHashes.length, loading: false});
        this.setState({vow: data.Response[2136320298].activities[0].challengeObjectiveHashes.length, loading: false});
        this.setState({deep: data.Response[541780856].activities[0].challengeObjectiveHashes.length, loading: false});
        this.setState({last: data.Response[3181387331].activities[0].challengeObjectiveHashes.length, loading: false});
       //onsole.log(this.state.garden)
       //console.log(this.state.vault)
       
      }
    
      render() {
        return (
            <div>

            {this.state.visible ? 
            <div className='container'>
                {this.state.loading || !this.state.raid ? (
                    <div>loading...</div>
                )  : (
                    <div>
                        <div className='rituals card'>
                        <section className='nightfall_info'>
                        <h2>Raid Rotator</h2>
                        <div>
                        {this.state.garden === 1 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Garden of Salvation</p>
                        <p>Defeat the Sanctified Mind.</p>
                       </div> : null }
                       </div>
                       <div>
                        {this.state.vault === 1 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Vault of Glass</p>
                       <p>Beneath Venus, evil stirs…</p>
                       </div> : null }
                       </div>
                       <div>
                        {this.state.vow === 1 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Vow of the Disciple</p>
                       <p>The disciple beckons…</p>
                       </div> : null }
                       </div>
                       <div>
                        {this.state.deep === 1 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Deep Stone Crypt</p>
                       <p>The chains of legacy must be broken.</p>
                       </div> : null }
                       </div>
                       <div>
                        {this.state.last === 1 ? 
                       <div className='nightfall_info'>
                       <p className='nightfallTitle'>Last Wish</p>
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
          )
      }
    }

export default Raid;