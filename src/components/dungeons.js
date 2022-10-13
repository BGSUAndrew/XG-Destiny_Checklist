import React, { Component } from 'react'


class Dungeon extends Component {
    state = {
        loading: true,
        visible: true,
        dungeonShattered: [],
        pitOfHeresy: [],
        prophecy: [],
        grasp: [],

    }
      async componentDidMount() {
        const url = "https://www.bungie.net/platform/Destiny2/Milestones";
        const response = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        const data = await response.json();
        this.setState({dungeonShattered: data.Response[422102671].activities[0].activityHash});
        this.setState({pitOfHeresy: data.Response[1742973996].activities[0].activityHash});
        this.setState({prophecy: data.Response[478604913].activities[0].activityHash});
       console.log(this.state.dungeonShattered)
       console.log(this.state.pitOfHeresy)
       console.log(this.state.prophecy)

       
      }
    
      render() {
        return (
            <div>
                <p>Test</p>
           
            </div>
          )
      }
    }

export default Dungeon;