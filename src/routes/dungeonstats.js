import React, { Component } from 'react'
import Sidebar from '../components/Sidebar';
import Seasonal from '../components/seasonal'
import AndrewDungeonStats from '../components/andrewdungeondata';

function DungeonStats() {
    const alertName = () => {
        alert('Hello world');
    };
return (
    <div id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Seasonal/>
    <div>
        <h1>Coming Soon!</h1>
        <button onClick={alertName}>
            Click to load alert!
        </button>
    </div>
    <AndrewDungeonStats></AndrewDungeonStats>
    </div>
)
}

export default DungeonStats;


