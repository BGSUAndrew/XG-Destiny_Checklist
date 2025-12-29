import React, { Component } from 'react'
import IanName from './iannameplate';

class IanTriumphData extends Component {
    
    state = {
        loading: true,
        triumphs: [],
        visible: true
    }

  async componentDidMount() {
    const url = "https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018519221998/?components=900";
    const response = await fetch(url, {
        headers: {
            'x-api-key': '2c6c008e57644a4bb63f00504758c443'
        }
    })
    const data = await response.json();
    this.setState({triumphScore: data.Response.profileRecords.data.score});
    this.setState({legacyScore: data.Response.profileRecords.data.legacyScore})
    this.setState({ghoulProgress: data.Response.profileRecords.data.records[3974717227].objectives[0].progress});
    this.setState({ghoulCompletion: data.Response.profileRecords.data.records[3974717227].objectives[0].completionValue});
    this.setState({wrathbearerProgress: data.Response.profileRecords.data.records[1142693639].objectives[0].progress});
    this.setState({wrathbearerCompletion: data.Response.profileRecords.data.records[1142693639].objectives[0].completionValue});
    this.setState({swordbearerProgress: data.Response.profileRecords.data.records[865076293].objectives[0].progress});
    this.setState({swordbearerCompletion: data.Response.profileRecords.data.records[865076293].objectives[0].completionValue});
    this.setState({wishbearerProgress: data.Response.profileRecords.data.records[4083696547].objectives[0].progress});
    this.setState({wishbearerCompletion: data.Response.profileRecords.data.records[4083696547].objectives[0].completionValue});
    this.setState({haruspexProgress: data.Response.profileRecords.data.records[2269203216].objectives[0].progress});
    this.setState({haruspexCompletion: data.Response.profileRecords.data.records[2269203216].objectives[0].completionValue});
    this.setState({aquanautProgress: data.Response.profileRecords.data.records[3570567217].objectives[0].progress});
    this.setState({aquanautCompletion: data.Response.profileRecords.data.records[3570567217].objectives[0].completionValue});
    this.setState({scallyWagProgress: data.Response.profileRecords.data.records[4176879201].objectives[0].progress});
    this.setState({scallyWagCompletion: data.Response.profileRecords.data.records[4176879201].objectives[0].completionValue});
    this.setState({kingSlayerProgress: data.Response.profileRecords.data.records[3910736783].objectives[0].progress});
    this.setState({kingSlayerCompletion: data.Response.profileRecords.data.records[3910736783].objectives[0].completionValue});
    this.setState({revelerProgress: data.Response.profileRecords.data.records[1228693527].objectives[0].progress});
    this.setState({revelerCompletion: data.Response.profileRecords.data.records[1228693527].objectives[0].completionValue});
    this.setState({discerptorProgress: data.Response.profileRecords.data.records[3097916612].objectives[0].progress});
    this.setState({discerptorCompletion: data.Response.profileRecords.data.records[3097916612].objectives[0].completionValue});
    this.setState({ironLordProgress: data.Response.profileRecords.data.records[2561695992].objectives[0].progress});
    this.setState({ironLordCompletion: data.Response.profileRecords.data.records[2561695992].objectives[0].completionValue});
    this.setState({gumshoeProgress: data.Response.profileRecords.data.records[2489106733].objectives[0].progress});
    this.setState({gumshoeCompletion: data.Response.profileRecords.data.records[2489106733].objectives[0].completionValue});
    this.setState({discipleSlayerProgress: data.Response.profileRecords.data.records[1971228746].objectives[0].progress});
    this.setState({discipleSlayerCompletion: data.Response.profileRecords.data.records[1971228746].objectives[0].completionValue});
    this.setState({vidmasterProgress: data.Response.profileRecords.data.records[3588818798].objectives[0].progress})
    this.setState({vidmasterCompletion: data.Response.profileRecords.data.records[3588818798].objectives[0].completionValue});
    this.setState({deadeyeProgress: data.Response.profileRecords.data.records[1438167672].objectives[0].progress});
    this.setState({deadeyeCompletion: data.Response.profileRecords.data.records[1438167672].objectives[0].completionValue});
    this.setState({flawlessProgress: data.Response.profileRecords.data.records[2072890963].objectives[0].progress});
    this.setState({flawlessCompletion: data.Response.profileRecords.data.records[2072890963].objectives[0].completionValue});
    this.setState({conquerorprogress: data.Response.profileRecords.data.records[3464275895].objectives[0].progress});
    this.setState({conquerorCompletion: data.Response.profileRecords.data.records[3464275895].objectives[0].completionValue});
    this.setState({unbrokenprogress: data.Response.profileRecords.data.records[1343839969].objectives[0].progress});
    this.setState({unbrokenCompletion: data.Response.profileRecords.data.records[1343839969].objectives[0].completionValue});
    this.setState({dredgenprogress: data.Response.profileRecords.data.records[1556658903].objectives[0].progress});
    this.setState({dredgenCompletion: data.Response.profileRecords.data.records[1556658903].objectives[0].completionValue});
    this.setState({spliteredprogress: data.Response.profileRecords.data.records[2482004751].objectives[0].progress});
    this.setState({spliteredCompletion: data.Response.profileRecords.data.records[2482004751].objectives[0].completionValue});
    this.setState({fatebreakerProgress: data.Response.profileRecords.data.records[4141971983].objectives[0].progress});
    this.setState({fatebreakerCompletion: data.Response.profileRecords.data.records[4141971983].objectives[0].completionValue});
    this.setState({descendantProgress: data.Response.profileRecords.data.records[540377256].objectives[0].progress});
    this.setState({descendantCompletion: data.Response.profileRecords.data.records[540377256].objectives[0].completionValue});
    this.setState({harbingerProgress: data.Response.profileRecords.data.records[2584970263].objectives[0].progress});
    this.setState({harbingerCompletion: data.Response.profileRecords.data.records[2584970263].objectives[0].completionValue});
    this.setState({enlightenedProgress: data.Response.profileRecords.data.records[2909250963].objectives[0].progress});
    this.setState({enlightenedCompletion: data.Response.profileRecords.data.records[2909250963].objectives[0].completionValue});
    this.setState({cursebreakerProgress: data.Response.profileRecords.data.records[3214425110].objectives[0].progress});
    this.setState({cursebreakerCompletion: data.Response.profileRecords.data.records[3214425110].objectives[0].completionValue});
    this.setState({rivensbaneProgress: data.Response.profileRecords.data.records[1384029371].objectives[0].progress});
    this.setState({rivensbaneCompletion: data.Response.profileRecords.data.records[1384029371].objectives[0].completionValue});
    this.setState({reaperProgress: data.Response.profileRecords.data.records[3947410852].objectives[0].progress});
    this.setState({reaperCompletion: data.Response.profileRecords.data.records[3947410852].objectives[0].completionValue});
    this.setState({risenProgress: data.Response.profileRecords.data.records[1710217127].objectives[0].progress});
    this.setState({risenCompletion: data.Response.profileRecords.data.records[1710217127].objectives[0].completionValue});
    this.setState({flameKeeperProgress: data.Response.profileRecords.data.records[3056675381].objectives[0].progress});
    this.setState({flameKeeperCompletion: data.Response.profileRecords.data.records[3056675381].objectives[0].completionValue});
    this.setState({gloriousProgress: data.Response.profileRecords.data.records[969142496].objectives[0].progress});
    this.setState({gloriousCompletion: data.Response.profileRecords.data.records[969142496].objectives[0].completionValue});
    this.setState({ghostWriterProgress: data.Response.profileRecords.data.records[2981294724].objectives[0].progress});
    this.setState({ghostWriterCompletion: data.Response.profileRecords.data.records[2981294724].objectives[0].completionValue});
    this.setState({wantedProgress: data.Response.profileRecords.data.records[2302993504].objectives[0].progress});
    this.setState({wantedCompletion: data.Response.profileRecords.data.records[2302993504].objectives[0].completionValue});
    this.setState({starbakerProgress: data.Response.profileRecords.data.records[2126152885].objectives[0].progress});
    this.setState({starbakerCompletion: data.Response.profileRecords.data.records[2126152885].objectives[0].completionValue});
    this.setState({dreamwarriorProgress: data.Response.profileRecords.data.records[2889189256].objectives[0].progress});
    this.setState({dreamwarriorCompletion: data.Response.profileRecords.data.records[2889189256].objectives[0].completionValue});
    this.setState({virtualfighterProgress: data.Response.profileRecords.data.records[3906538939].objectives[0].progress});
    this.setState({virtualfighterCompletion: data.Response.profileRecords.data.records[3906538939].objectives[0].completionValue});
    this.setState({queensguardProgress: data.Response.profileRecords.data.records[1722592950].objectives[0].progress});
    this.setState({queensguardCompletion: data.Response.profileRecords.data.records[1722592950].objectives[0].completionValue});
    this.setState({moments2023Progress: data.Response.characterRecords.data["2305843009916944635"].records[3175660257].objectives[0].progress});
    this.setState({moments2023CompletionValue: data.Response.characterRecords.data["2305843009916944635"].records[3175660257].objectives[0].completionValue});
    this.setState({moments2024Progress: data.Response.characterRecords.data["2305843009916944635"].records[126238604].objectives[0].progress});
    this.setState({moments2024CompletionValue: data.Response.characterRecords.data["2305843009916944635"].records[126238604].objectives[0].completionValue});
    this.setState({eternalProgress: data.Response.profileRecords.data.records[986322626].objectives[0].progress});
    this.setState({eternalCompletionValue: data.Response.profileRecords.data.records[986322626].objectives[0].completionValue});
    this.setState({braveProgress: data.Response.profileRecords.data.records[1156427773].objectives[0].progress});
    this.setState({braveCompletionValue: data.Response.profileRecords.data.records[1156427773].objectives[0].completionValue});
    this.setState({thePantheonProgress: data.Response.profileRecords.data.records[3137935313].objectives[0].progress});
    this.setState({thePantheonCompletionValue: data.Response.profileRecords.data.records[3137935313].objectives[0].completionValue});
    this.setState({heavyMetalProgress: data.Response.profileRecords.data.records[3499574820].objectives[0].progress});
    this.setState({heavyMetalCompletionValue: data.Response.profileRecords.data.records[3499574820].objectives[0].completionValue});
    this.setState({sharpshooterProgress: data.Response.profileRecords.data.records[3198225435].objectives[0].progress});
    this.setState({sharpshooterCompletionValue: data.Response.profileRecords.data.records[3198225435].objectives[0].completionValue});
    this.setState({fatedWeaponProgress: data.Response.profileRecords.data.records[3888842466].objectives[0].progress});
    this.setState({fatedWeaponCompletionValue: data.Response.profileRecords.data.records[3888842466].objectives[0].completionValue});
    this.setState({atemporalProgress: data.Response.profileRecords.data.records[1213046261].objectives[0].progress});
    this.setState({atemporalCompletionValue: data.Response.profileRecords.data.records[1213046261].objectives[0].completionValue});
    this.setState({avantgardeProgress: data.Response.profileRecords.data.records[3641237715].objectives[0].progress});
    this.setState({avantgardeCompletionValue: data.Response.profileRecords.data.records[3641237715].objectives[0].completionValue});
    this.setState({undertakerProgress: data.Response.profileRecords.data.records[2263679223].objectives[0].progress});
    this.setState({undertakerCompletionValue: data.Response.profileRecords.data.records[2263679223].objectives[0].completionValue});
    this.setState({praxicProgress: data.Response.characterRecords.data["2305843009916944635"].records[3779882910].objectives[0].progress});
    this.setState({praxicCompletionValue: data.Response.characterRecords.data["2305843009916944635"].records[3779882910].objectives[0].completionValue});
    this.setState({renegadeProgress: data.Response.profileRecords.data.records[421213004].objectives[0].progress});
    this.setState({renegadeCompletionValue: data.Response.profileRecords.data.records[421213004].objectives[0].completionValue});
  }

  render() {
    const triumphScore = this.state.triumphScore
    var convertTriumphScore = parseInt(triumphScore)
    var convertedTriumphScore = convertTriumphScore.toLocaleString('en-US');
    const legacyScore = this.state.legacyScore
    var convertLegacyScore = parseInt(legacyScore)
    var convertedLegacyScore = convertLegacyScore.toLocaleString('en-US');
    const aquanautProgress = this.state.aquanautProgress
    const aquanautCompletion = this.state.aquanautCompletion
    const scallyWagProgress = this.state.scallyWagProgress
    const scallyWagCompletion = this.state.scallyWagCompletion
    const kingSlayerProgress = this.state.kingSlayerProgress
    const kingSlayerCompletion = this.state.kingSlayerCompletion
    const flameKeeperProgress = this.state.flameKeeperProgress
    const flameKeeperCompletion = this.state.flameKeeperCompletion
    const revelerProgress = this.state.revelerProgress
    const revelerCompletion = this.state.revelerCompletion
    const discerptorProgress = this.state.discerptorProgress
    const discerptorCompletion = this.state.discerptorCompletion
    const ironLordProgress = this.state.ironLordProgress
    const ironLordCompletion = this.state.ironLordCompletion
    const gumshoeProgress = this.state.gumshoeProgress
    const gumshoeCompletion = this.state.gumshoeCompletion
    const discipleSlayerProgress = this.state.discipleSlayerProgress
    const discipleSlayerCompletion = this.state.discipleSlayerCompletion
    const vidmasterProgress = this.state.vidmasterProgress
    const vidmasterCompletion = this.state.vidmasterCompletion
    const deadeyeProgress = this.state.deadeyeProgress
    const deadeyeCompletion = this.state.deadeyeCompletion
    const flawlessProgress = this.state.flawlessProgress
    const flawlessCompletion = this.state.flawlessCompletion
    const conquerorprogress = this.state.conquerorprogress
    const conquerorCompletion = this.state.conquerorCompletion
    const unbrokenprogress = this.state.unbrokenprogress
    const unbrokenCompletion = this.state.unbrokenCompletion
    const dredgenprogress = this.state.dredgenprogress
    const dredgenCompletion = this.state. dredgenCompletion
    const spliteredprogress = this.state.spliteredprogress
    const spliteredCompletion = this.state.spliteredCompletion
    const fatebreakerProgress = this.state.fatebreakerProgress
    const fatebreakerCompletion = this.state.fatebreakerCompletion
    const descendantProgress = this.state.descendantProgress
    const descendantCompletion = this.state.descendantCompletion
    const harbingerProgress = this.state.harbingerProgress
    const harbingerCompletion = this.state.harbingerCompletion
    const enlightenedProgress = this.state.enlightenedProgress
    const enlightenedCompletion = this.state.enlightenedCompletion
    const cursebreakerProgress = this.state.cursebreakerProgress
    const cursebreakerCompletion = this.state.cursebreakerCompletion
    const rivensbaneProgress = this.state.rivensbaneProgress
    const rivensbaneCompletion = this.state.rivensbaneCompletion
    const reaperProgress = this.state.reaperProgress
    const reaperCompletion = this.state.reaperCompletion
    const risenProgress = this.state.risenProgress
    const risenCompletion = this.state.risenCompletion
    const gloriousProgress = this.state.gloriousProgress
    const gloriousCompletion = this.state.gloriousCompletion
    const ghostWriterProgress = this.state.ghostWriterProgress
    const ghostWriterCompletion = this.state.ghostWriterCompletion
    const wantedProgress = this.state.wantedProgress
    const wantedCompletion = this.state.wantedCompletion
    const starbakerProgress = this.state.starbakerProgress
    const starbakerCompletion = this.state.starbakerCompletion
    const dreamwarriorProgress = this.state.dreamwarriorProgress
    const dreamwarriorCompletion = this.state.dreamwarriorCompletion
    const virtualfighterProgress = this.state.virtualfighterProgress
    const virtualfighterCompletion = this.state.virtualfighterCompletion
    const queensguardProgress = this.state.queensguardProgress
    const queensguardCompletion = this.state.queensguardCompletion
    const haruspexProgress = this.state.haruspexProgress
    const haruspexCompletion = this.state.haruspexCompletion
    const wishbearerProgress = this.state.wishbearerProgress
    const wishbearerCompletion = this.state.wishbearerCompletion
    const swordbearerProgress = this.state.swordbearerProgress
    const swordbearerCompletion = this.state.swordbearerCompletion
    const wrathbearerProgress = this.state.wrathbearerProgress
    const wrathbearerCompletion = this.state.wrathbearerCompletion
    const ghoulProgress = this.state.ghoulProgress
    const ghoulCompletion = this.state.ghoulCompletion
    const moments2023Progress = this.state.moments2023Progress
    const moments2023CompletionValue = this.state.moments2023CompletionValue
    const moments2024Progress = this.state.moments2024Progress
    const moments2024CompletionValue = this.state.moments2024CompletionValue
    const eternalProgress = this.state.eternalProgress
    const eternalCompletionValue = this.state.eternalCompletionValue
    const braveProgress = this.state.braveProgress
    const braveCompletionValue = this.state.braveCompletionValue
    const thePantheonProgress = this.state.thePantheonProgress
    const thePantheonCompletionValue = this.state.thePantheonCompletionValue
    const heavyMetalProgress = this.state.heavyMetalProgress
    const heavyMetalCompletionValue = this.state.heavyMetalCompletionValue
    const sharpshooterProgress = this.state.sharpshooterProgress
    const sharpshooterCompletionValue = this.state.sharpshooterCompletionValue
    const fatedWeaponProgress = this.state.fatedWeaponProgress
    const fatedWeaponCompletionValue = this.state.fatedWeaponCompletionValue
    const atemporalProgress = this.state.atemporalProgress
    const atemporalCompletionValue = this.state.atemporalCompletionValue
    const avantgardeProgress = this.state.avantgardeProgress
    const avantgardeCompletionValue = this.state.avantgardeCompletionValue
    const undertakerProgress = this.state.undertakerProgress
    const undertakerCompletionValue = this.state.undertakerCompletionValue
    const praxicProgress = this.state.praxicProgress
    const praxicCompletionValue = this.state.praxicCompletionValue
    const renegadeProgress = this.state.renegadeProgress
    const renegadeCompletionValue = this.state.renegadeCompletionValue
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
                    <IanName></IanName>
                    <div className='rituals card'>

    <h1>Obtainable Triumphs</h1>
            <p className='font-bold'>Current Triumph Score: {convertedTriumphScore}</p>
            <p className='font-bold'>Legacy Triumph Score: {convertedLegacyScore}</p>
            <p>Renegade Progress: {renegadeProgress} / {renegadeCompletionValue}</p>
            <p>Undertaker Progress: {undertakerProgress}/{undertakerCompletionValue}</p>
            <p>Praxic Progress: {praxicProgress}/{praxicCompletionValue}</p>
            <p>Avant Garde Progress: {avantgardeProgress} / {avantgardeCompletionValue}</p>
            <p>Atemporal Progress: {atemporalProgress} / {atemporalCompletionValue}</p>
            <p>Fated Weapon Progress: {fatedWeaponProgress} / {fatedWeaponCompletionValue}</p>
            <p>Sharpshooter Progress: {sharpshooterProgress} / {sharpshooterCompletionValue} </p>
            <p>Heavy Metal Progress: {heavyMetalProgress} / {heavyMetalCompletionValue}</p>
            {wrathbearerProgress >= 10 ? <p className='gold'>Wrathbearer Progress: {wrathbearerProgress} / {wrathbearerCompletion}</p> : <p>Wrathbearer Progress: {wrathbearerProgress} / {wrathbearerCompletion}</p> }
            {swordbearerProgress >= 18 ? <p className='gold'>Swordbearer Progress: {swordbearerProgress} / {swordbearerCompletion}</p> : <p>Swordbearer Progress: {swordbearerProgress} / {swordbearerCompletion}</p>}
            {ghoulProgress >= 10 ? <p className='gold'>Ghoul Progress: {ghoulProgress} / {ghoulCompletion}</p> : <p>Ghoul Progress: {ghoulProgress} / {ghoulCompletion}</p>}
            {kingSlayerProgress >= 21 ? <p className='gold'>Kingslayer Progress: {kingSlayerProgress} / {kingSlayerCompletion}</p> : <p>Kingslayer Progress: {kingSlayerProgress} / {kingSlayerCompletion}</p>}
            {revelerProgress >= 4 ? <p className='gold'>Reveler Progress: {revelerProgress} / {revelerCompletion}</p> : <p>Reveler Progress: {revelerProgress} / {revelerCompletion}</p>}
            {discerptorProgress >= 11 ? <p className='gold'>Discerptor Progress: {discerptorProgress} / {discerptorCompletion}</p> : <p>Discerptor Progress: {discerptorProgress} / {discerptorCompletion}</p>}
            {ironLordProgress >= 12 ? <p className='gold'>Iron Lord Progress: {ironLordProgress} / {ironLordCompletion}</p> : <p>Iron Lord Progress: {ironLordProgress} / {ironLordCompletion}</p>}
            {gumshoeProgress >= 9 ? <p className='gold'>Gumshoe Progress: {gumshoeProgress} / {gumshoeCompletion}</p> : <p>Gumshoe Progress: {gumshoeProgress} / {gumshoeCompletion}</p>}
            {discipleSlayerProgress >= 19 ? <p className='gold'>Disciple-Slayer Progress: {discipleSlayerProgress} / {discipleSlayerCompletion}</p> : <p>Disciple-Slayer Progress: {discipleSlayerProgress} / {discipleSlayerCompletion}</p>}
            {vidmasterProgress >= 10 ? <p className='gold'>Vidmaster Progress: {vidmasterProgress} / {vidmasterCompletion}</p> : <p>Vidmaster Progress:      {vidmasterProgress} / {vidmasterCompletion}</p>}
            {deadeyeProgress >= 31 ? <p className='gold'>Deadeye Progress: {deadeyeProgress} / {deadeyeCompletion}</p> : <p>Deadeye Progress: {deadeyeProgress} / {deadeyeCompletion}</p>}
            {flawlessProgress >= 5 ? <p className='gold'>Flawless Progress: {flawlessProgress} / {flawlessCompletion}</p> : <p>Flawless Progress: {flawlessProgress} / {flawlessCompletion}</p>}
            {conquerorprogress >= 4 ? <p className='gold'>Conqueror Progress: {conquerorprogress} / {conquerorCompletion}</p> : <p>Conqueror Progress: {conquerorprogress} / {conquerorCompletion}</p>}
            {dredgenprogress >= 10 ? <p className='gold'>Dredgen Progress: {dredgenprogress} / {dredgenCompletion}</p> : <p>Dredgen Progress: {dredgenprogress} / {dredgenCompletion}</p>}
            {spliteredprogress >= 11 ? <p className='gold'>Splintered Progress: {spliteredprogress} / {spliteredCompletion}</p> : <p>Splintered Progress: {spliteredprogress} / {spliteredCompletion}</p>}
            {fatebreakerProgress >= 23 ? <p className='gold'>Fatebreaker Progress: {fatebreakerProgress} / {fatebreakerCompletion}</p> : <p>Fatebreaker Progress: {fatebreakerProgress} / {fatebreakerCompletion}</p>}
            {descendantProgress >= 19 ? <p className='gold'>Descendant Progress: {descendantProgress} / {descendantCompletion}</p> : <p>Descendant Progress: {descendantProgress} / {descendantCompletion}</p>}
            {harbingerProgress >= 10 ? <p className='gold'>Harbinger Progress: {harbingerProgress} / {harbingerCompletion}</p> : <p>Harbinger Progress: {harbingerProgress} / {harbingerCompletion}</p>}
            {enlightenedProgress >= 16 ? <p className='gold'>Enlightened Progress: {enlightenedProgress} / {enlightenedCompletion}</p> : <p>Enlightened Progress: {enlightenedProgress} / {enlightenedCompletion}</p>}
            {cursebreakerProgress >= 11 ? <p className='gold'>Cursebreaker Progress: {cursebreakerProgress} / {cursebreakerCompletion}</p> : <p>Cursebreaker Progress: {cursebreakerProgress} / {cursebreakerCompletion}</p>}
            {rivensbaneProgress >= 11 ? <p className='gold'>Rivensbane Progress: {rivensbaneProgress} / {rivensbaneCompletion}</p> : <p>Rivensbane Progress: {rivensbaneProgress} / {rivensbaneCompletion}</p>}
            {reaperProgress >= 10 ? <p className='gold'>Reaper Progress: {reaperProgress} / {reaperCompletion}</p> : <p>Reaper Progress: {reaperProgress} / {reaperCompletion}</p>}
            {risenProgress >= 10 ? <p className='gold'>Risen Progress: {risenProgress} / {risenCompletion}</p> : <p>Risen Progress: {risenProgress} / {risenCompletion}</p>}
            {flameKeeperProgress >= 14 ? <p className='gold'>Flamekeeper Progress: {flameKeeperProgress} / {flameKeeperCompletion}</p> : <p>Flamekeeper Progress: {flameKeeperProgress} / {flameKeeperCompletion}</p>}
            {gloriousProgress >= 10 ? <p className='gold'>Glorious Progress: {gloriousProgress} / {gloriousCompletion}</p> : <p>Glorious Progress: {gloriousProgress} / {gloriousCompletion}</p>}
            {ghostWriterProgress >= 2 ? <p className='gold'>Ghost Writer Progress: {ghostWriterProgress} / {ghostWriterCompletion}</p> : <p>Ghost Writer Progress: {ghostWriterProgress} / {ghostWriterCompletion}</p>}
            {wantedProgress >= 10 ? <p className='gold'>Wanted Progress: {wantedProgress} / {wantedCompletion}</p> : <p>Wanted Progress: {wantedProgress} / {wantedCompletion}</p>}
            {starbakerProgress >= 3 ? <p className='gold'>Star Baker Progress: {starbakerProgress} / {starbakerCompletion}</p> : <p>Star Baker Progress: {starbakerProgress} / {starbakerCompletion}</p>}
            {dreamwarriorProgress >= 20 ? <p className='gold'>Dream Warrior Progress: {dreamwarriorProgress} / {dreamwarriorCompletion}</p> : <p>Dream Warrior Progress: {dreamwarriorProgress} / {dreamwarriorCompletion}</p>}
            {virtualfighterProgress >= 9 ? <p className='gold'>Virtual Fighter Progress: {virtualfighterProgress} / {virtualfighterCompletion}</p>: <p>Virtual Fighter Progress: {virtualfighterProgress} / {virtualfighterCompletion}</p>}
            </div>
            <div className='rituals card'>
            <h1>Legacy Triumphs</h1>
            <section className='legacy_triumphs'>
                <p>ETERNAL progress: {eternalProgress} / {eternalCompletionValue}</p>
                <p>Moments of Triumph 2024 Progress: {moments2024Progress} / {moments2024CompletionValue}</p>
                {braveProgress >= 9 ? <p className='gold'>BRAVE Progress: {braveProgress} / {braveCompletionValue}</p> : <p>BRAVE Progress: {braveProgress} / {braveCompletionValue}</p>}
                {thePantheonProgress == 10 ? <p className='gold'>The Pantheon Progress: {thePantheonProgress} / {thePantheonCompletionValue}</p> : <p>The Pantheon Progress: {thePantheonProgress} / {thePantheonCompletionValue}</p>}
                {moments2023Progress >= 26 ? <p className='gold'>Moments of Triumph 2023 Progress: {moments2023Progress} / {moments2023CompletionValue}</p> : <p>Moments of Triumph 2023 Progress: {moments2023Progress} / {moments2023CompletionValue}</p>}
                {wishbearerProgress >= 9 ? <p className='gold'>Wishbearer Progress: {wishbearerProgress} / {wishbearerCompletion}</p> : <p>Wishbearer Progress: {wishbearerProgress} / {wishbearerCompletion}</p> }
                {harbingerProgress >= 10 ? <p className='gold'>Haruspex Progress: {haruspexProgress} / {haruspexCompletion} </p> : <p>Haruspex Progress: {haruspexProgress} / {haruspexCompletion} </p> }
                {aquanautProgress >= 10 ? <p className='gold'>Aquanaut Progress: {aquanautProgress} /{aquanautCompletion}</p> : <p>Aquanaut Progress: {aquanautProgress} /{aquanautCompletion}</p>}
                {scallyWagProgress >= 8 ? <p className='gold'>Scallywag Progress: {scallyWagProgress} / {scallyWagCompletion}</p> : <p>Scallywag Progress: {scallyWagProgress} / {scallyWagCompletion}</p>}
                {unbrokenprogress >= 9 ? <p className='gold'>Unbroken Progress: {unbrokenprogress} / {unbrokenCompletion}</p> : <p>Unbroken Progress: {unbrokenprogress} / {unbrokenCompletion}</p>}
                {queensguardProgress >= 12 ? <p className='gold'>Queensguard Progress: {queensguardProgress} / {queensguardCompletion}</p> : <p>Queensguard Progress: {queensguardProgress} / {queensguardCompletion}</p>}    
            
            </section>
        </div>
        </div>
        : null }
        </div>
      )
  }
}

export default IanTriumphData;