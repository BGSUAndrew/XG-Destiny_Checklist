import React, { Component } from 'react'

class JoeName extends Component {
    
        state = {
            loading: true,
        }

      async componentDidMount() {
        const url = "https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018518057094/?components=100,200,1400";
        const response = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        const data = await response.json();
        this.setState({nameplate: data.Response.characters.data["2305843009889894407"].emblemBackgroundPath});
        this.setState({dateLastPlayed:data.Response.profile.data.dateLastPlayed});
        this.setState({gamertag:data.Response.profile.data.userInfo.displayName});
        this.setState({guardianRank:data.Response.profile.data.currentGuardianRank}) 
        this.setState({ally:data.Response.profileCommendations.data.commendationNodeScoresByHash["154475713"]});
        this.setState({fun:data.Response.profileCommendations.data.commendationNodeScoresByHash["1341823550"]});
        this.setState({mastery:data.Response.profileCommendations.data.commendationNodeScoresByHash["4180748446"]});
        this.setState({leadership:data.Response.profileCommendations.data.commendationNodeScoresByHash["1390663518"]});
        //console.log(data.Response.profile.data.userInfo.displayName) 
       
      }
    
      render() {
        const nameplate = this.state.nameplate
        const bungie = "https://bungie.net"
        const dateLastPlayed = this.state.dateLastPlayed
        const gamertag = this.state.gamertag
        const guardianRank = this.state.guardianRank
        const ally = this.state.ally
        const fun = this.state.fun
        const mastery = this.state.mastery
        const leadership = this.state.leadership
        return (
          <section>
            <div>
                <h1 id='joe' className='text-center'>{gamertag}</h1>
               <img className='img-fluid' src={bungie + nameplate} alt='Image' />
               <p className='text-center'>Last logged in: {dateLastPlayed}</p>
               <p className='text-center'>Guardian Rank: <span className='font-bold'>{guardianRank}</span></p>
            </div>
            <div className='data_container tenpx_gap'>
              <p className='text-center '>Ally: <span className='font-bold'>{ally}</span></p>
              <p className='text-center'>Fun: <span className='font-bold'>{fun}</span></p>
              <p className='text-center'>Mastery: <span className='font-bold'>{mastery}</span></p>
              <p className='text-center'>leadership: <span className='font-bold'>{leadership}</span></p>
            </div>
          </section>
          )
      }
    }

export default JoeName;