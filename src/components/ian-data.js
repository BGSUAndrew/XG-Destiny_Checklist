import React, { Component } from 'react'
import IanName from './iannameplate';

class IanData extends Component {
    
        state = {
            loading: true,
            checklist: [],
            crotaData: [],
            visible: true,
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
        this.setState({crotaData: data.Response.progressions.data.milestones[540415767].activities[0].phases[3].complete});
        //console.log(data.Response.progressions.data.milestones)
       
      }
    
      render() {
        const checklist = this.state.checklist
        const crotaraid = this.state.crotaData
        const vanguardBounties =  checklist["2709491520"]
        const crucibleBounties = checklist["2594202463"]
        const gambitBounties = checklist["3802603984"]
        const dares = checklist["295129163"]
        const gunsmith = checklist["3899487295"]
        const trials = checklist["3007559996"]
        const trialswin = checklist["3842941126"]
        const lightfallCampaign = checklist["793110320"]
        const rituals_one = checklist["1049998279"]
        const rituals_two = checklist["1049998276"]
        const rituals_three = checklist["1049998277"]
        const warlords = checklist["3921784328"]
        const crota = crotaraid
        const wishfulfillment = checklist["541127642"]
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
                    <IanName></IanName>
                <div className='seasonal card'>
                <h2>Seasonal Activities</h2>
                <section className='challenge'>
                    <h2>Season of the Wish</h2>
                    <div>
                   {wishfulfillment ? (
                       <div className='needToComplete'>
                        <p>Wish Fulfillment: Need to complete <span className='pinnacle'></span></p>
                       </div>
                   ) : (
                       <div className='completed'>
                       <p>Wish Fulfillment: Completed <span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                       </div>
                   )}
                   </div>

                   </section>

                   <section className='challenge'>
                    <h2>Lightfall</h2>
                    <div>
                   {lightfallCampaign ? (
                       <div className='needToComplete'>
                       <p>Weekly Campaign Mission: Need to complete <span className='pinnacle'></span></p>
                       </div>
                   ) : (
                       <div className='completed'>
                       <p>Weekly Campaign Mission: Completed <span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
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
                   {rituals_one ? (
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
                   {rituals_two ? (
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
                   </section>
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
                   </section>
                   <section className='challenge'>
                   <h2>Crucible</h2>
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
                </div>
               
                <div className='raids card'>
                <h2>Raids & Dungeons</h2>
                    <section className='challenge'>
                    <h2>Warlord's Ruin</h2>
                   {warlords ? (
                       <div className='needToComplete'>
                       <p>Warlord's Ruin: Need to complete <span className='pinnacle'></span></p>
                       </div>
                   ) : (
                       <p>Warlord's Ruin: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
                   )}
                    </section>
                    <section className='challenge'>
                    <h2>Crota's End</h2>
                   {crota == false ? (
                       <div className='needToComplete'>
                       <p>Crota's End: Need to complete <span className='pinnacle'></span></p>
                       </div>
                   ) : (
                       <p>Crota's End: Completed<span className='completed'><img src={require('../images/outline_done_white_18dp.png')}></img></span></p>
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

export default IanData;