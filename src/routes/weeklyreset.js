import React, { Component } from 'react'
import Sidebar from '../components/Sidebar';
import Nightfall from '../components/nightfall';
import VanguardBurn from '../components/vanguardburn';

class WeeklyReset extends Component {
    render() {
        return (
            
            <div id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <h1 className='page_title'>Weekly Reset Info</h1>
            <div className='flex_container'>
            <Nightfall />
            <VanguardBurn />

            </div>
            </div>
        );
    }
}

export default WeeklyReset;


