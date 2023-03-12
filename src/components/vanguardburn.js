import React, { Component } from 'react'
class VanguardBurn extends Component {
    state = {
        loading: true,
        vanguard: [],
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
        this.setState({vanguard: data.Response[1942283261].activities[0].modifierHashes[1], loading: false});
       console.log(this.state.vanguard)
       
      }
    
      render() {
        return (
            <div>

            {this.state.visible ? 
            <div className='container'>
                {this.state.loading || !this.state.vanguard ? (
                    <div>loading...</div>
                )  : (
                    <div>
                        <div className='rituals card'>
                        <section className='nightfall_info'>
                        <h2>Vanguard Burn</h2>
                        <div>
                        {this.state.vanguard == "2691200658" ? 
                        <div>
                            <img className='img-fluid' src="https://www.bungie.net/common/destiny2_content/icons/DestinyEnergyTypeDefinition_092d066688b879c807c3b460afdd61e6.png" alt='arc' />
                        </div>
                        : null }
                        {this.state.vanguard == "426976067" ? 
                        <div>
                            <img className='img-fluid' src="https://www.bungie.net/common/destiny2_content/icons/DestinyEnergyTypeDefinition_2a1773e10968f2d088b97c22b22bba9e.png" alt='solar' />
                        </div>
                        : null }
                        {this.state.vanguard == "3196075844" ? 
                        <div>
                            <img className='img-fluid' src="https://www.bungie.net/common/destiny2_content/icons/DestinyEnergyTypeDefinition_ceb2f6197dccf3958bb31cc783eb97a0.png" alt='void' />
                        </div>
                        : null }
                        {this.state.vanguard == "3809788899" ? 
                        <div>
                            <img className='img-fluid' src="https://www.bungie.net/common/destiny2_content/icons/DestinyEnergyTypeDefinition_530c4c3e7981dc2aefd24fd3293482bf.png" alt='stasis' />
                        </div>
                        : null }
                       {this.state.vanguard == "3810297122" ? 
                        <div>
                            <img className='img-fluid' src="https://www.bungie.net/common/destiny2_content/icons/DestinyDamageTypeDefinition_b2fe51a94f3533f97079dfa0d27a4096.png" alt='strand' />
                        </div>
                        : null }

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

export default VanguardBurn;