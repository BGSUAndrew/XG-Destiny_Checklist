import React, { Component } from 'react'
import Sidebar from '../components/Sidebar';
import Nightfall from '../components/nightfall';
import VanguardBurn from '../components/vanguardburn';
import Crucible from '../components/crucible';
import Raid from '../components/raid';
import Dungeon from '../components/dungeons';
import ExoticMission from '../components/exoticMission';
import Seasonal from '../components/seasonal'
class WeeklyReset extends Component {
    render() {
        return (
            
            <div id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Seasonal />
            <h1 className='page_title'>Weekly Reset Info</h1>
            <div className='data_container'>
            <section>
            <Raid />
            <Dungeon />
            </section>
            <section>
            <Nightfall />
            <VanguardBurn />
            </section>
            <section>
            <ExoticMission />
            </section>

            </div>
            </div>
        );
    }
}

export default WeeklyReset;


