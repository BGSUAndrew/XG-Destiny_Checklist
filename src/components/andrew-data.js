import React, { Component } from 'react'
import AndrewName from './andrewnameplate';

class AndrewData extends Component {
    
        state = {
            loading: true,
            checklist: [],
            visible: true
        }

      async componentDidMount() {
        const url = "https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018430407175/Character/2305843009263048442/?components=202";
        const response = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        const data = await response.json();
        this.setState({checklist: data.Response.progressions.data.milestones, loading: false});
        this.setState({rituals_one_progress: data.Response.progressions.data.milestones["1049998279"].activities[0].challenges[0].objective.complete});
        //console.log(data.Response.progressions.data.milestones[540415767].activities[0].phases[3].complete)
        const d = new Date();
        var dayOfWeek = d.getDay();
        console.log(dayOfWeek);
      }
    
      render() {
        const checklist = this.state.checklist
        const gunsmith = checklist["3899487295"]
        const trials = checklist["3007559996"]
        const trialswin = checklist["3842941126"]
        const rituals_one = checklist["1049998279"]
        const rituals_one_progress = this.state.rituals_one_progress
        const rituals_two = checklist["1049998276"]
        const rituals_three = checklist["1049998277"]
        const dungeon = checklist["4034642472"]
        const salvation = checklist["4196566271"]
        const pale_pathfinder = checklist["1816391649"]
        const ghostrank = checklist["2603713309"]
        const excision = checklist["930637700"]
        const exoticRotator = checklist["4244749316"]
        const button = this.state.visible ? "Hide player data" : "Show player data";
        const d = new Date();
        var dayOfWeek = d.getDay();



        return (
            <div>
            <button 
                onClick={() => {
                    this.setState({visible: !this.state.visible});
                }}
                className='data_button'
            >
                {button}
            </button>
            {this.state.visible ? 
            <div className='container'>
                {this.state.loading || !this.state.checklist ? (
                    <div>loading...</div>
                )  : (
                    <div>
                        <AndrewName></AndrewName>
                    <div className='seasonal card'>

                       <section className='challenge'>
                        <h2>The Final Shape</h2>
                        <div>
                       {pale_pathfinder ? (
                           <div className='needToComplete'>
                           <p>Pale Heart Pathfinder: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <div className='completed'>
                           <p>Pale Heart Pathfinder: Completed <span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                           </div>
                       )}
                       </div>
                       <div>
                       {ghostrank ? (
                           <div className='needToComplete'>
                           <p>Ghost Rank Up: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <div className='completed'>
                           <p>Ghost Rank Up: Completed <span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                           </div>
                       )}
                       </div>
                       <div>
                       {excision ? (
                           <div className='needToComplete'>
                           <p>Excision: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <div className='completed'>
                           <p>Excision: Completed <span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                           </div>
                       )}
                       </div>
                       </section>
                    </div>
                        <div className='rituals card'>
                        <h2>Ritual Activities</h2>
                         <section className='challenge'>
                        <h2>Ritual Pinnacles</h2>
                        <div>
                        
                       { rituals_one ? (
                           <div className='needToComplete'>
                           <p>Ritual Pinnacles 1: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <div className='completed'>
                           <p>Ritual Pinnacles 1: Completed <span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                           </div>
                       )}
                       </div>
                        <div>

                       { rituals_two ? (
                           <div className='needToComplete'>
                           <p>Ritual Pinnacles 2: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <div className='completed'>
                           <p>Ritual Pinnacles 2: Completed <span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                           </div>
                       )}
                       </div>
                        <div>
                       {rituals_three ? (
                           <div className='needToComplete'>
                           <p>Ritual Pinnacles 3: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <div className='completed'>
                           <p>Ritual Pinnacles 3: Completed <span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                           </div>
                       )}
                       </div>
                       <div>
                       {exoticRotator ? (
                           <div className='needToComplete'>
                           <p>Exotic Rotator: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <div className='completed'>
                           <p>Exotic Rotator: Completed <span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                           </div>
                       )}
                       </div>
                       </section>

    
                        <section className='challenge'>
                       <h2>Gunsmith Bounties</h2>
                       {gunsmith ? (
                           <div className='needToComplete'>
                           <p>8 Gunsmith Bounties: Need to complete <span className='powerful-1'></span></p>
                           </div>
                       ) : (
                           <p>8 Gunsmith Bounties: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                        </section>
                    </div>
                   
                    <div className='raids card'>
                    <h2>Raids & Dungeons</h2>
                        <section className='challenge'>
                        <h2>Vesper's Host</h2>
                       {dungeon ? (
                           <div className='needToComplete'>
                           <p>Vesper's Host: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>Vesper's Host: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Salvation's Edge</h2>
                       {salvation ? (
                           <div className='needToComplete'>
                           <p>Salvation's Edge: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>Salvation's Edge: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                        </section>
                    </div>
                    {dayOfWeek == 0 || dayOfWeek == 6 || dayOfWeek == 5 || dayOfWeek == 4 ? 
                    <div className='trials card'>
                    <h2>Trials of Osiris</h2>
                        <section className='challenge'>
                        <h2>Trials of Osiris Wins</h2>
                       {trialswin ? (
                           <div className='needToComplete'>
                           <p>7 Trials Wins: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>7 Trials Wins: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Trials of Osiris Round Wins</h2>
                       {trials ? (
                           <div className='needToComplete'>
                           <p>50 Trials of Osiris Round Wins: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>50 Trials of Osiris Round Wins: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                        </section>

                    </div>
                        : <div className='trials card'>
                        <h2>Trials of Osiris</h2>
                        <p>Trials of Osiris will return on Friday, when the Iron Banner is not live.</p>
    
                        </div>}
                    </div>
                )}
            </div>
             : null  }
            </div>
          )
      }
    }

export default AndrewData;