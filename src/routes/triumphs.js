import React, { Component } from 'react'
import Sidebar from '../components/Sidebar';
import AndrewTriumphData from '../components/andrewtriumphdata';
import IanTriumphData from '../components/iantriumphdata';
import JoeTriumphData from '../components/joetriumphdata';

class Triumphs extends Component {
    render() {
        return (
            
            <div id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <h1 className='page_title'>Triumph Data</h1>
            <div className='data_container'>
            <AndrewTriumphData />
            <IanTriumphData />
            <JoeTriumphData />
            </div>
            </div>
        );
    }
}

export default Triumphs;


