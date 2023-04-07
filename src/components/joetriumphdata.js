import React, { Component } from 'react'
import JoeName from './joenameplate';

class JoeTriumphData extends Component {
    
    state = {
        loading: true,
        triumphs: [],
        visible: true
    }

  async componentDidMount() {
    const url = "https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018518057094/?components=900";
    const response = await fetch(url, {
        headers: {
            'x-api-key': '2c6c008e57644a4bb63f00504758c443'
        }
    })
    const data = await response.json();
    this.setState({triumphScore: data.Response.profileRecords.data.score});
    this.setState({legacyScore: data.Response.profileRecords.data.legacyScore})
    this.setState({scallyWagProgress: data.Response.profileRecords.data.records[4176879201].objectives[0].progress});
    this.setState({kingSlayerProgress: data.Response.profileRecords.data.records[3910736783].objectives[0].progress});
    this.setState({revelerProgress: data.Response.profileRecords.data.records[1228693527].objectives[0].progress});
    this.setState({discerptorProgress: data.Response.profileRecords.data.records[3097916612].objectives[0].progress});
    this.setState({ironLordProgress: data.Response.profileRecords.data.records[2561695992].objectives[0].progress});
    this.setState({gumshowProgress: data.Response.profileRecords.data.records[2489106733].objectives[0].progress});
    this.setState({discipleSlayerProgress: data.Response.profileRecords.data.records[1971228746].objectives[0].progress});
    this.setState({vidmasterProgress: data.Response.profileRecords.data.records[3588818798].objectives[0].progress});
    this.setState({deadeyeProgress: data.Response.profileRecords.data.records[1438167672].objectives[0].progress});
    this.setState({flawlessProgress: data.Response.profileRecords.data.records[2072890963].objectives[0].progress});
    this.setState({conquerorprogress: data.Response.profileRecords.data.records[3464275895].objectives[0].progress});
    this.setState({unbrokenprogress: data.Response.profileRecords.data.records[1343839969].objectives[0].progress});
    this.setState({dredgenprogress: data.Response.profileRecords.data.records[1556658903].objectives[0].progress});
    this.setState({spliteredprogress: data.Response.profileRecords.data.records[2482004751].objectives[0].progress});
    this.setState({fatebreakerProgress: data.Response.profileRecords.data.records[4141971983].objectives[0].progress});
    this.setState({descendantProgress: data.Response.profileRecords.data.records[540377256].objectives[0].progress});
    this.setState({harbingerProgress: data.Response.profileRecords.data.records[2584970263].objectives[0].progress});
    this.setState({enlightenedProgress: data.Response.profileRecords.data.records[2909250963].objectives[0].progress});
    this.setState({cursebreakerProgress: data.Response.profileRecords.data.records[3214425110].objectives[0].progress});
    this.setState({rivensbaneProgress: data.Response.profileRecords.data.records[1384029371].objectives[0].progress});
    this.setState({reaperProgress: data.Response.profileRecords.data.records[3947410852].objectives[0].progress});
    this.setState({risenProgress: data.Response.profileRecords.data.records[1710217127].objectives[0].progress});
    this.setState({flameKeeperProgress: data.Response.profileRecords.data.records[3056675381].objectives[0].progress});
    this.setState({gloriousProgress: data.Response.profileRecords.data.records[969142496].objectives[0].progress});
    this.setState({ghostWriterProgress: data.Response.profileRecords.data.records[1089543274].objectives[0].progress});
    this.setState({wantedProgress: data.Response.profileRecords.data.records[2302993504].objectives[0].progress});
    this.setState({starbakerProgress: data.Response.profileRecords.data.records[2907042883].objectives[0].progress});
    this.setState({dreamwarriorProgress: data.Response.profileRecords.data.records[2889189256].objectives[0].progress});
    this.setState({virtualfighterProgress: data.Response.profileRecords.data.records[3906538939].objectives[0].progress});
    this.setState({queensguardProgress: data.Response.profileRecords.data.records[1722592950].objectives[0].progress});

  }

  render() {
    const triumphScore = this.state.triumphScore
    const legacyScore = this.state.legacyScore
    const scallyWagProgress = this.state.scallyWagProgress
    const kingSlayerProgress = this.state.kingSlayerProgress
    const flameKeeperProgress = this.state.flameKeeperProgress
    const revelerProgress = this.state.revelerProgress
    const discerptorProgress = this.state.discerptorProgress
    const ironLordProgress = this.state.ironLordProgress
    const gumshoeProgress = this.state.gumshowProgress
    const discipleSlayerProgress = this.state.discipleSlayerProgress
    const vidmasterProgress = this.state.vidmasterProgress
    const deadeyeProgress = this.state.deadeyeProgress
    const flawlessProgress = this.state.flawlessProgress
    const conquerorprogress = this.state.conquerorprogress
    const unbrokenprogress = this.state.unbrokenprogress
    const dredgenprogress = this.state.dredgenprogress
    const spliteredprogress = this.state.spliteredprogress
    const fatebreakerProgress = this.state.fatebreakerProgress
    const descendantProgress = this.state.descendantProgress
    const harbingerProgress = this.state.harbingerProgress
    const enlightenedProgress = this.state.enlightenedProgress
    const cursebreakerProgress = this.state.cursebreakerProgress
    const rivensbaneProgress = this.state.rivensbaneProgress
    const reaperProgress = this.state.reaperProgress
    const risenProgress = this.state.risenProgress
    const gloriousProgress = this.state.gloriousProgress
    const ghostWriterProgress = this.state.ghostWriterProgress
    const wantedProgress = this.state.wantedProgress
    const starbakerProgress = this.state.starbakerProgress
    const dreamwarriorProgress = this.state.dreamwarriorProgress
    const virtualfighterProgress = this.state.virtualfighterProgress
    const queensguardProgress = this.state.queensguardProgress


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
                    <JoeName></JoeName>
                    <div className='rituals card'>

            <h1>Triumphs</h1>
            <p>Current Triumph Score: {triumphScore}</p>
            <p>Legacy Triumph Score: {legacyScore}</p>
            <p>Scallywag Progress: {scallyWagProgress} / 10</p>
            <p>Kingslayer Progress: {kingSlayerProgress} / 21</p>
            <p>Reveler Progress: {revelerProgress} / 4</p>
            <p>Discerptor Progress: {discerptorProgress} / 11</p>
            <p>Iron Lord Progress: {ironLordProgress} / 7</p>
            <p>Gumshoe Progress: {gumshoeProgress} / 9</p>
            <p>Disciple-Slayer Progress: {discipleSlayerProgress} / 19</p>
            <p>Vidmaster Progress: {vidmasterProgress} / 10</p>
            <p>Deadeye Progress: {deadeyeProgress} / 31</p>
            <p>Flawless Progress: {flawlessProgress} / 5</p>
            <p>Conqueror Progress: {conquerorprogress} / 4</p>
            <p>Unbroken Progress: {unbrokenprogress} / 9</p>
            <p>Dredgen Progress: {dredgenprogress} / 10</p>
            <p>Splintered Progress: {spliteredprogress} / 11</p>
            <p>Fatebreaker Progress: {fatebreakerProgress} / 23</p>
            <p>Descendant Progress: {descendantProgress} / 19</p>
            <p>Harbinger Progress: {harbingerProgress} / 10</p>
            <p>Enlightened Progress: {enlightenedProgress} / 16</p>
            <p>Cursebreaker Progress: {cursebreakerProgress} / 11</p>
            <p>Rivensbane Progress: {rivensbaneProgress} / 11</p>
            <p>Reaper Progress: {reaperProgress} / 10</p>
            <p>Risen Progress: {risenProgress} / 10</p>
            <p>Flamekeeper Progress: {flameKeeperProgress} / 28</p>
            <p>Glorious Progress: {gloriousProgress} / 9</p>
            <p>Ghost Writer Progress: {ghostWriterProgress} / 16</p>
            <p>Wanted Progress: {wantedProgress} / 10</p>
            <p>Star Baker Progress: {starbakerProgress} / 16</p>
            <p>Dream Warrior Progress: {dreamwarriorProgress} / 20</p>
            <p>Virtual Fighter Progress: {virtualfighterProgress} / 9</p>
            <p>Queensguard Progress: {queensguardProgress} / 12</p>
        </div>
        </div>
        : null }
        </div>
      )
  }
}

export default JoeTriumphData;