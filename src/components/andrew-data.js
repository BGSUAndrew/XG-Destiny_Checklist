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
        console.log(data.Response.progressions.data.milestones)
       
      }
    
      render() {
        const checklist = this.state.checklist
        const vanguardBounties =  checklist["2709491520"]
        const vanguardNightfall = checklist["1942283261"]
        const vanguardBurn = checklist["1437935813"]
        const gloryPlaylist = checklist["1368032265"]
        const crucibleMatches = checklist["3312774044"]
        const crucibleBounties = checklist["2594202463"]
        const gambitMatches = checklist["3448738070"]
        const gambitBounties = checklist["3802603984"]
        const dares = checklist["295129163"]
        const preservation = ["4081841674"]
        const gunsmith = checklist["3899487295"]
        const trials = checklist["3007559996"]
        const trialswin = checklist["3842941126"]
        const kingsfall = checklist["292102995"]
        const duality = checklist["3618845105"]
        const astral = checklist["1194402836"]
        const ketch = checklist["359638817"]
        const ketchmaster = checklist["1598092513"]
        const expedition = checklist["1381445680"]
        const button = this.state.visible ? "Hide player data" : "Show player data";


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
                    <h2>Seasonal Activities</h2>
                        <section className='challenge'>
                        <h2>Star Chart Bounties</h2>
                       {astral ? (
                           <div className='needToComplete'>
                           <p>Starchart Bounties: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>Starchart Bounties: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Ketchcrash Runs</h2>
                       {ketch ? (
                           <div className='needToComplete'>
                           <p>3 Ketchcrash runs: Need to complete <span className='powerful-3'></span></p>
                           </div>
                       ) : (
                           <p>3 Ketchcrash runs: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Master Ketchcrash</h2>
                       {ketchmaster ? (
                           <div className='needToComplete'>
                           <p>Master Ketchcrash: Need to complete <span className='powerful-2'></span></p>
                           </div>
                       ) : (
                           <p>Master Ketchcrash: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Expedition Treasure</h2>
                       {expedition ? (
                           <div className='needToComplete'>
                           <p>Expedition Treasure: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>Expedition Treasure: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                        </section>
                    </div>
                        <div className='rituals card'>
                        <h2>Ritual Activities</h2>
                        <section className='challenge'>
                        <h2>Vanguard</h2>
                        <div>
                       {vanguardBounties ? (
                           <div className='needToComplete'>
                           <p>Vanguard Bounties: Need to complete <span className='powerful-1'></span></p>
                           </div>
                       ) : (
                           <div className='completed'>
                           <p>Vanguard Bounties: Completed <span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                           </div>
                       )}
                       </div>
                       <div>
                       {vanguardNightfall ? (
                           <div className='needToComplete'>
                           <p>Vanguard Nightfall: Need to complete <span className='powerful-1'></span></p>
                           </div>
                       ) : (
                           <p>Vanguard Nightfall: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                       </div>
                       <div>
                       {vanguardBurn ? (
                           <div className='needToComplete'>
                           <p>Vanguard Operations Burn: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>Vanguard Operations Burn: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                       </div>
                       </section>
                       <section className='challenge'>
                       <h2>Crucible</h2>
                       <div>
                       {gloryPlaylist ? (
                           <div className='needToComplete'>
                           <p>Glory Playlist Wins: Need to complete <span className='powerful-1'></span></p>
                           </div>
                       ) : (
                           <p>Glory Playlist Wins: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                       </div>
                       <div>
                       {crucibleMatches ? (
                           <div className='needToComplete'>
                           <p>3 Crucible Matches: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>3 Crucible Matches: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                       </div>
                       <div>
                       {crucibleBounties ? (
                           <div className='needToComplete'>
                           <p>Crucible Bounties: Need to complete <span className='powerful-1'></span></p>
                           </div>
                       ) : (
                           <p>Crucible Bounties: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                       </div>
                       </section>
                       <section className='challenge'>
                       <h2>Gambit</h2>           
                       <div>
                       {gambitMatches ? (
                           <div className='needToComplete'>
                           <p>Gambit Matches: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>Gambit Matches: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                       </div>
                       <div>
                       {gambitBounties ? (
                           <div className='needToComplete'>
                           <p>Gambit Bounties: Need to complete <span className='powerful-1'></span></p>
                           </div>
                       ) : (
                           <p>Gambit Bounties: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                       </div>
                       </section>
                       <section className='challenge'>
                       <h2>Dares of Eternity</h2>
                       {dares ? (
                           <div className='needToComplete'>
                           <p>Complete rounds of Dares of Eternity: Need to complete <span className='powerful-1'></span></p>
                           </div>
                       ) : (
                           <p>Complete rounds of round of Dares of Eternity: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
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
                        <section className='challenge'>
                       <h2>Preservation</h2>
                       {preservation ? (
                           <div className='needToComplete'>
                           <p>Preservation Mission: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>Preservation Mission: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                        </section>
                    </div>
                   
                    <div className='raids card'>
                    <h2>Raids & Dungeons</h2>
                        <section className='challenge'>
                        <h2>King's Fall</h2>
                       {kingsfall ? (
                           <div className='needToComplete'>
                           <p>King's Fall: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>King's Fall: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Duality</h2>
                       {duality ? (
                           <div className='needToComplete'>
                           <p>Duality: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>Duality: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       )}
                        </section>
                    </div>
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

                    </div>
                )}
            </div>
             : null  }
            </div>
          )
      }
    }

export default AndrewData;