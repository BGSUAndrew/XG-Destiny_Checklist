import React, { Component } from 'react'

class IanData extends Component {
    
        state = {
            loading: true,
            checklist: [],
        }

      async componentDidMount() {
        const url = "https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018519221998/Character/2305843009916944635/?components=202";
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
        const grasp = checklist["973171461"]
        const gunsmith = checklist["3899487295"]
        const salvation = checklist["2712317338"]
        const dsc = checklist["541780856"]
        const vog = checklist["1888320892"]
        const trials = checklist["3007559996"]
        const trialswin = checklist["3842941126"]
        const europa = checklist["2540726600"]
        const wayfinder = checklist["337814587"]
        const shattered = checklist["3789620084"]
        return (
        
            <div className='container'>
                {this.state.loading || !this.state.checklist ? (
                    <div>loading...</div>
                )  : (
                    <div>
                        <h1 id='ian'>Ian</h1>
                        <div className='rituals card'>
                        <h2>Ritual Activities</h2>
                        <section className='challenge'>
                        <h2>Vanguard</h2>
                        <div>
                       {vanguardBounties ? (
                           <div className='needToComplete'>
                           <p>Vanguard Bounties: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>Vanguard Bounties: Completed</p>
                       )}
                       </div>
                       <div>
                       {vanguardNightfall ? (
                           <div className='needToComplete'>
                           <p>Vanguard Nightfall: Need to complete <span className='powerful-1'></span></p>
                           </div>
                       ) : (
                           <p>Vanguard Nightfall: Completed</p>
                       )}
                       </div>
                       <div>
                       {vanguardBurn ? (
                           <div className='needToComplete'>
                           <p>Vanguard Burn Strikes: Need to complete <span className='powerful-1'></span></p>
                           </div>
                       ) : (
                           <p>Vanguard Burn Strikes: Completed</p>
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
                           <p>Glory Playlist Wins: Completed</p>
                       )}
                       </div>
                       <div>
                       {crucibleMatches ? (
                           <div className='needToComplete'>
                           <p>3 Crucible Matches: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>3 Crucible Matches: Completed</p>
                       )}
                       </div>
                       <div>
                       {crucibleBounties ? (
                           <div className='needToComplete'>
                           <p>Crucible Bounties: Need to complete <span className='powerful-1'></span></p>
                           </div>
                       ) : (
                           <p>Crucible Bounties: Completed</p>
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
                           <p>Gambit Matches: Completed </p>
                       )}
                       </div>
                       <div>
                       {gambitBounties ? (
                           <div className='needToComplete'>
                           <p>Gambit Bounties: Need to complete <span className='powerful-1'></span></p>
                           </div>
                       ) : (
                           <p>Gambit Bounties: Completed</p>
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
                           <p>Complete rounds of round of Dares of Eternity: Completed</p>
                       )}
                        </section>
                        <section className='challenge'>
                       <h2>Gunsmith Bounties</h2>
                       {gunsmith ? (
                           <div className='needToComplete'>
                           <p>8 Gunsmith Bounties: Need to complete <span className='powerful-1'></span></p>
                           </div>
                       ) : (
                           <p>8 Gunsmith Bounties: Completed</p>
                       )}
                        </section>
                    </div>
                    <div className='dungeons card'>
                    <h2>Dungeons</h2>
                        <section className='challenge'>
                        <h2>Grasp of Avarice</h2>
                       {grasp ? (
                           <div className='needToComplete'>
                           <p>Grasp of Avarice: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>Grasp of Avarice: Completed</p>
                       )}
                        </section>
                    </div>
                    <div className='raids card'>
                    <h2>Raids</h2>
                        <section className='challenge'>
                        <h2>Vault of Glass</h2>
                       {vog ? (
                           <div className='needToComplete'>
                           <p>Vault of Glass: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>Vault of Glass: Completed</p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Deep Stone Crypt</h2>
                       {dsc ? (
                           <div className='needToComplete'>
                           <p>Deep Stone Crypt: Need to complete <span className='powerful-3'></span></p>
                           </div>
                       ) : (
                           <p>Deep Stone Crypt: Completed</p>
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
                           <p>7 Trials Wins: Completed</p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Trials of Osiris Round Wins</h2>
                       {trials ? (
                           <div className='needToComplete'>
                           <p>50 Trials of Osiris Round Wins: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>50 Trials of Osiris Round Wins: Completed</p>
                       )}
                        </section>
                    </div>
                    <div className='seasonal card'>
                    <h2>Seasonal</h2>
                        <section className='challenge'>
                        <h2>Wayfinder Compass Bounties</h2>
                       {wayfinder ? (
                           <div className='needToComplete'>
                           <p>8 Wayfinder Bounties: Need to complete <span className='powerful-1'></span></p>
                           </div>
                       ) : (
                           <p>8 Wayfinder Bounties: Completed</p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Shattered Realm Champions</h2>
                       {shattered ? (
                           <div className='needToComplete'>
                           <p>4 Shattered Realm Champions: Need to complete <span className='pinnacle'></span></p>
                           </div>
                       ) : (
                           <p>4 Shattered Realm Champions: Completed</p>
                       )}
                        </section>
                    </div>
                    </div>
                )}
            </div>
          )
      }
    }

export default IanData;