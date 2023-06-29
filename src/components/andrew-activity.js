import React, { Component } from 'react'
import AndrewName from './andrewnameplate';

class AndrewActivity extends Component {
    
        state = {
            loading: true,
            visible: true,
            dungeonKills: [],
            bestSingleGameKills: [],
            strikeKills: [],
            CrucibleGames: [],
            CrucibleKills:[],
            CrucibleDeaths: [],
            GambitKills: []

        }

      async componentDidMount() {
        const url = "https://www.bungie.net/Platform/Destiny2/1/Account/4611686018430407175/Character/2305843009263048442/Stats/?modes=82,3,5,63";
        const response = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        const data = await response.json();
        this.setState({dungeonClears: data.Response.dungeon.allTime.activitiesCleared.basic.displayValue});
        this.setState({dungeonKills: data.Response.dungeon.allTime.kills.basic.value});
        this.setState({dungeonKillsAverage: data.Response.dungeon.allTime.kills.pga.displayValue});
        this.setState({dungeonDeaths: data.Response.dungeon.allTime.deaths.basic.displayValue});
        this.setState({dungeonDeathsAverage: data.Response.dungeon.allTime.deaths.pga.displayValue});
        this.setState({dungeonSecondsPlayed: data.Response.dungeon.allTime.secondsPlayed.basic.displayValue});
        this.setState({bestSingleGameKills: data.Response.dungeon.allTime.bestSingleGameKills.basic.value});
        this.setState({averageSuperKills: data.Response.dungeon.allTime.weaponKillsSuper.pga.displayValue});

       this.setState({strikeClears: data.Response.strike.allTime.activitiesCleared.basic.displayValue});
       this.setState({strikeKills: data.Response.strike.allTime.kills.basic.value});
       this.setState({strikeKillsAverage: data.Response.strike.allTime.kills.pga.displayValue});
       this.setState({strikeDeaths: data.Response.strike.allTime.deaths.basic.displayValue});
       this.setState({strikeDeathsAverage: data.Response.strike.allTime.deaths.pga.displayValue});
       this.setState({strikeSecondsPlayed: data.Response.strike.allTime.secondsPlayed.basic.displayValue});
       this.setState({bestSingleStrikeGameKills: data.Response.strike.allTime.bestSingleGameKills.basic.displayValue});
       this.setState({averageStrikeSuperKills: data.Response.strike.allTime.weaponKillsSuper.pga.displayValue});

       this.setState({CrucibleGames: data.Response.allPvP.allTime.activitiesEntered.basic.value});
        this.setState({CrucibleWins: data.Response.allPvP.allTime.activitiesWon.basic.displayValue});
        this.setState({CruciblekillsDeathsRatio: data.Response.allPvP.allTime.killsDeathsRatio.basic.displayValue});
        this.setState({CrucibleKills: data.Response.allPvP.allTime.kills.basic.value});
        this.setState({CrucibleKillsAverage: data.Response.allPvP.allTime.kills.pga.displayValue});
        this.setState({CrucibleDeaths: data.Response.allPvP.allTime.deaths.basic.value});
        this.setState({CrucibleDeathsAverage: data.Response.allPvP.allTime.deaths.pga.displayValue});
        this.setState({CrucibleSecondsPlayed: data.Response.allPvP.allTime.secondsPlayed.basic.displayValue});
        this.setState({bestSingleCrucibleGameKills: data.Response.allPvP.allTime.bestSingleGameKills.basic.displayValue});
        this.setState({averageCrucibleSuperKills: data.Response.allPvP.allTime.weaponKillsSuper.pga.displayValue});

        this.setState({GambitGames: data.Response.pvecomp_gambit.allTime.activitiesEntered.basic.displayValue});
        this.setState({GambitWins: data.Response.pvecomp_gambit.allTime.activitiesWon.basic.displayValue});
        this.setState({GambitkillsDeathsRatio: data.Response.pvecomp_gambit.allTime.killsDeathsRatio.basic.displayValue});
        this.setState({GambitKills: data.Response.pvecomp_gambit.allTime.kills.basic.value});
        this.setState({GambitKillsAverage: data.Response.pvecomp_gambit.allTime.kills.pga.displayValue});
        this.setState({GambitDeaths: data.Response.pvecomp_gambit.allTime.deaths.basic.displayValue});
        this.setState({GambitDeathsAverage: data.Response.pvecomp_gambit.allTime.deaths.pga.displayValue});
        this.setState({GambitSecondsPlayed: data.Response.pvecomp_gambit.allTime.secondsPlayed.basic.displayValue});
        this.setState({bestSingleGambitGameKills: data.Response.pvecomp_gambit.allTime.bestSingleGameKills.basic.displayValue});
        this.setState({averageGambitSuperKills: data.Response.pvecomp_gambit.allTime.weaponKillsSuper.pga.displayValue});
       //console.log(data.Response.allPvP.allTime.activitiesEntered.basic.displayValue);
       
      }
    
      render() {
        const dungeonClears = this.state.dungeonClears
        const dungeonKills = this.state.dungeonKills
        const dungeonKillsConvert = dungeonKills.toLocaleString();
        const dungeonKillsAverage = this.state.dungeonKillsAverage
        const dungeonDeaths = this.state.dungeonDeaths
        const dungeonDeathsAverage = this.state.dungeonDeathsAverage
        const dungeonSecondsPlayed = this.state.dungeonSecondsPlayed
        const bestSingleGameKills = this.state.bestSingleGameKills
        const bestSingleGameKillsConvert = bestSingleGameKills.toLocaleString();
        const averageSuperKills = this.state.averageSuperKills  

        
        const strikeClears = this.state.strikeClears
        const strikeKills = this.state.strikeKills
        const strikeKillsConvert = strikeKills.toLocaleString();
        const strikeKillsAverage = this.state.strikeKillsAverage
        const strikeDeaths = this.state.strikeDeaths
        const strikeDeathsAverage = this.state.strikeDeathsAverage
        const strikeSecondsPlayed = this.state.strikeSecondsPlayed
        const bestSingleStrikeGameKills = this.state.bestSingleStrikeGameKills
        const averageStrikeSuperKills = this.state.averageStrikeSuperKills

        const CrucibleGames = this.state.CrucibleGames
        const CrucibleGamesConvert = CrucibleGames.toLocaleString();
        const CrucibleWins = this.state.CrucibleWins
        const CruciblekillsDeathsRatio = this.state.CruciblekillsDeathsRatio
        const CrucibleKills = this.state.CrucibleKills
        const CrucibleKillsConvert = CrucibleKills.toLocaleString();
        const CrucibleKillsAverage = this.state.CrucibleKillsAverage
        const CrucibleDeaths = this.state.CrucibleDeaths
        const CrucibleDeathsConvert = CrucibleDeaths.toLocaleString();
        const CrucibleDeathsAverage = this.state.CrucibleDeathsAverage
        const CrucibleSecondsPlayed = this.state.CrucibleSecondsPlayed
        const bestSingleCrucibleGameKills = this.state.bestSingleCrucibleGameKills
        const averageCrucibleSuperKills = this.state.averageCrucibleSuperKills

        
        const GambitGames = this.state.GambitGames
        const GambitWins = this.state.GambitWins
        const GambitkillsDeathsRatio = this.state.GambitkillsDeathsRatio
        const GambitKills = this.state.GambitKills
        const GambitKillsConvert = GambitKills.toLocaleString()
        const GambitKillsAverage = this.state.GambitKillsAverage
        const GambitDeaths = this.state.GambitDeaths
        const GambitDeathsAverage = this.state.GambitDeathsAverage
        const GambitSecondsPlayed = this.state.GambitSecondsPlayed
        const bestSingleGambitGameKills = this.state.bestSingleGambitGameKills
        const averageGambitSuperKills = this.state.averageGambitSuperKills
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
                                        <AndrewName></AndrewName>
                        <div className='rituals card'>

                <h1>Dungeons</h1>
                <p>Dungeon Clears: {dungeonClears}</p>
                <p>Dungeon Kills: {dungeonKillsConvert}</p>
                <p>Dungeon Kills per Run: {dungeonKillsAverage}</p>
                <p>Dungeon Deaths: {dungeonDeaths}</p>
                <p>Dungeon Deaths per Run: {dungeonDeathsAverage}</p>
                <p>Total time in Dungeons: {dungeonSecondsPlayed}</p>
                <p>Most kills in a single run: {bestSingleGameKillsConvert}</p>
                <p>Average Super kills per run: {averageSuperKills}</p>

   
                <h1>Strikes</h1>
                <p>Strike Clears: {strikeClears}</p>
                <p>Strike Kills: {strikeKillsConvert}</p>
                <p>Strike Kills per Run: {strikeKillsAverage}</p>
                <p>Strike Deaths: {strikeDeaths}</p>
                <p>Strike Deaths per Run: {strikeDeathsAverage}</p>
                <p>Total time in Strikes: {strikeSecondsPlayed}</p>
                <p>Most kills in a single Strike: {bestSingleStrikeGameKills}</p>
                <p>Average Super kills per run: {averageStrikeSuperKills}</p>


                <h1>Crucible</h1>
                <p>Crucible Matches Played: {CrucibleGamesConvert}</p>
                <p>Crucible Matches Won: {CrucibleWins}</p>
                <p>Crucible KDR: {CruciblekillsDeathsRatio}</p>
                <p>Crucible Kills: {CrucibleKillsConvert}</p>
                <p>Crucible Kills per Game: {CrucibleKillsAverage}</p>
                <p>Crucible Deaths: {CrucibleDeathsConvert}</p>
                <p>Crucible Deaths per Game: {CrucibleDeathsAverage}</p>
                <p>Total time in the Crucible: {CrucibleSecondsPlayed}</p>
                <p>Most kills in a single Crucible match: {bestSingleCrucibleGameKills}</p>
                <p>Average Super kills per Game: {averageCrucibleSuperKills}</p>

      
                <h1>Gambit</h1>
                <p>Gambit Matches Played: {GambitGames}</p>
                <p>Gambit Matches Won: {GambitWins}</p>
                <p>Gambit KDR: {GambitkillsDeathsRatio}</p>
                <p>Gambit Kills: {GambitKillsConvert}</p>
                <p>Gambit Kills per Game: {GambitKillsAverage}</p>
                <p>Gambit Deaths: {GambitDeaths}</p>
                <p>Gambit Deaths per Game: {GambitDeathsAverage}</p>
                <p>Total time in Gambit: {GambitSecondsPlayed}</p>
                <p>Most kills in a single Gambit match: {bestSingleGambitGameKills}</p>
                <p>Average Super kills per Game: {averageGambitSuperKills}</p>
            </div>
            </div>
            : null }
            </div>
          )
      }
    }

export default AndrewActivity;