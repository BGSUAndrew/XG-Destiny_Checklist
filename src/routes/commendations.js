import React, { Component } from 'react'
import Sidebar from '../components/Sidebar';
import AndrewCommendationsData from '../components/andrewcommendationdata';
import IanCommendationsData from '../components/iancommendationdata';
import JoeCommendationsData from '../components/joecommendationdata';

class Commendations extends Component {
    render() {
        return (
            
            <div id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <h1 className='page_title'>Commendations</h1>
            <div className='data_container'>
            <AndrewCommendationsData />
            <IanCommendationsData />
            <JoeCommendationsData />
            </div>
            </div>
        );
    }
}

export default Commendations;