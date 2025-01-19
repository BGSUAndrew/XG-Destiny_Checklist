import React, { Component } from 'react'
import Sidebar from '../components/Sidebar';
import Seasonal from '../components/seasonal'
import AndrewDungeonStats from '../components/andrewdungeondata';
import IanDungeonStats from '../components/iandungoendata';
import JoeDungeonStats from '../components/joedungeonstats';

function DungeonStats() {
    const alertName = () => {
        alert('Hello world');
    };
return (
    <div id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Seasonal/>
    <div className='data_container'>
    <AndrewDungeonStats></AndrewDungeonStats>
    <IanDungeonStats></IanDungeonStats>
    <JoeDungeonStats></JoeDungeonStats>
    </div>

    </div>
)
}

export default DungeonStats;


