import React, { Component } from 'react'
import AndrewActivity from '../../src/components/andrew-activity';
import IanActivity from '../../src/components/ian-activity';
import JoeActivity from '../components/joe-activity';
import Sidebar from '../components/Sidebar';
import Seasonal from '../components/seasonal'


class ActivityReport extends Component {
    render() {
        return (
            
            <div id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Seasonal/>
            <h1 className='page_title'>Activity Report</h1>

            <div className='data_container'>
            <AndrewActivity />
            <IanActivity />
            <JoeActivity />
            </div>


            </div>

        );
    }
}

export default ActivityReport;


