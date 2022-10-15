import React, { Component } from 'react'

class AndrewName extends Component {
    
        state = {
            loading: true,
            nameplate: [],
            dateLastPlayed: [],
            gamertag: []
        }

      async componentDidMount() {
        const url = "https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018430407175/?components=100,200";
        const response = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        const data = await response.json();
        this.setState({nameplate: data.Response.characters.data["2305843009263048442"].emblemBackgroundPath});
        this.setState({dateLastPlayed:data.Response.profile.data.dateLastPlayed});
        this.setState({gamertag:data.Response.profile.data.userInfo.displayName})
        console.log(data.Response.profile.data.userInfo.displayName) 
       
      }
    
      render() {
        const nameplate = this.state.nameplate
        const bungie = "https://bungie.net"
        const dateLastPlayed = this.state.dateLastPlayed
        const gamertag = this.state.gamertag
        return (
            <div>
                <h1 id='andrew' className='text-center'>{gamertag}</h1>
               <img className='img-fluid' src={bungie + nameplate} alt='Image' />
               <p>Last logged in: {dateLastPlayed}</p>
            </div>
          )
      }
    }

export default AndrewName;