import React, { Component } from 'react'
import IanName from './iannameplate';


class IanCommendationsData extends Component {
    
    state = {
        loading: true,
        commendations: [],
        visible: true
    }

  async componentDidMount() {
    const url = "https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018519221998/?components=1400";
    const response = await fetch(url, {
        headers: {
            'x-api-key': '2c6c008e57644a4bb63f00504758c443'
        }
    })
    const data = await response.json();
    console.log(data)
    this.setState({commendationScore: data.Response.profileCommendations.data.totalScore});
    this.setState({commendationPercAlly: data.Response.profileCommendations.data.commendationNodePercentagesByHash[154475713]})
    this.setState({commendationPercMastery: data.Response.profileCommendations.data.commendationNodePercentagesByHash[4180748446]})
    this.setState({commendationPercFun: data.Response.profileCommendations.data.commendationNodePercentagesByHash[1341823550]})
    this.setState({commendationPercLeadership: data.Response.profileCommendations.data.commendationNodePercentagesByHash[1390663518]})
    this.setState({commendationJoybringer: data.Response.profileCommendations.data.commendationScoresByHash[3377580220]})
    this.setState({commendationIndispensable: data.Response.profileCommendations.data.commendationScoresByHash[2019871317]})
    this.setState({commendationSelfless: data.Response.profileCommendations.data.commendationScoresByHash[354527503]})
    this.setState({commendationHeroic: data.Response.profileCommendations.data.commendationScoresByHash[3575743922]})
    this.setState({commendationPerceptive: data.Response.profileCommendations.data.commendationScoresByHash[3872064891]})
    this.setState({commendationKnowledgeable: data.Response.profileCommendations.data.commendationScoresByHash[3970150545]})
    this.setState({commendationLevelheaded: data.Response.profileCommendations.data.commendationScoresByHash[3037314846]})
    this.setState({commendationPlaymaker: data.Response.profileCommendations.data.commendationScoresByHash[4209356036]})
    this.setState({commendationSaintsFavorite: data.Response.profileCommendations.data.commendationScoresByHash[3030493827]})
    this.setState({commendationPacesetter: data.Response.profileCommendations.data.commendationScoresByHash[2205006002]})
    this.setState({commendationPrimevalInstinct: data.Response.profileCommendations.data.commendationScoresByHash[363818544]})
    this.setState({commendationPatientandConsiderate: data.Response.profileCommendations.data.commendationScoresByHash[2506835299]})
    this.setState({commendationExceptionalCommunicator: data.Response.profileCommendations.data.commendationScoresByHash[965562884]})
    this.setState({commendationEntertaining: data.Response.profileCommendations.data.commendationScoresByHash[801121776]})
    this.setState({commendationThoughtful: data.Response.profileCommendations.data.commendationScoresByHash[3513056018]})
    this.setState({commendationBestDressed: data.Response.profileCommendations.data.commendationScoresByHash[357212819]})

  }

  render() {
    const commendationScore = this.state.commendationScore
    const commendationPercAlly = this.state.commendationPercAlly
    const commendationPercMastery = this.state.commendationPercMastery
    const commendationPercFun = this.state.commendationPercFun
    const commendationPercLeadership = this.state.commendationPercLeadership
    const commendationBestDressed = this.state.commendationBestDressed
    const commendationEntertaining = this.state.commendationEntertaining
    const commendationExceptionalCommunicator = this.state.commendationExceptionalCommunicator
    const commendationHeroic = this.state.commendationHeroic
    const commendationIndispensable = this.state.commendationIndispensable
    const commendationJoybringer = this.state.commendationJoybringer
    const commendationKnowledgeable = this.state.commendationKnowledgeable
    const commendationLevelheaded = this.state.commendationLevelheaded
    const commendationPacesetter = this.state.commendationPacesetter
    const commendationPatientandConsiderate = this.state.commendationPatientandConsiderate
    const commendationPlaymaker = this.state.commendationPlaymaker
    const commendationPrimevalInstinct = this.state.commendationPrimevalInstinct
    const commendationSaintsFavorite = this.state.commendationSaintsFavorite
    const commendationSelfless = this.state.commendationSelfless
    const commendationThoughtful = this.state.commendationThoughtful
    const commendationPerceptive = this.state.commendationPerceptive




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

            <h1>Commendations</h1>
            <p>Total Commendation Score: {commendationScore}</p>
            <h2>Category by Percentage</h2>
            <div className='data_container tenpx_gap'>
                <p>Ally: {commendationPercAlly}%</p>
                <p>Fun: {commendationPercFun}%</p>
                <p>Mastery: {commendationPercMastery}%</p>
                <p>Leadership: {commendationPercLeadership}%</p>
            </div>
            <h2>Scores by Commendation</h2>
            <section>
            <h3>Ally</h3>
            <p>Indispensable: {commendationIndispensable}</p>
            <p>Selfless: {commendationSelfless}</p>
            <p>Patient and Considerate: {commendationPatientandConsiderate}</p>
            <p>Thoughtful: {commendationThoughtful}</p>
            </section>
            <section>
            <h3>Fun</h3>
            <p>Joy Bringer: {commendationJoybringer}</p>
            <p>Level-headed: {commendationLevelheaded}</p>
            <p>Saint's Favorite: {commendationSaintsFavorite}</p>
            <p>Best Dressed: {commendationBestDressed}</p>
            </section>
            <section>
            <h3>Mastery</h3>
            <p>Heroic: {commendationHeroic}</p>
            <p>Playmaker: {commendationPlaymaker}</p>
            <p>Pacesetter: {commendationPacesetter}</p>
            <p>Primeval Instinct: {commendationPrimevalInstinct}</p>
            </section>
            <section>
            <h3>Leadership</h3>
            <p>Perceptive: {commendationPerceptive}</p>
            <p>Knowledgeable: {commendationKnowledgeable}</p>
            <p>Exceptional Communicator: {commendationExceptionalCommunicator}</p>
            <p>Entertaining: {commendationEntertaining}</p>
            </section>
        </div>
        </div>
        : null }
        </div>
      )
  }
}

export default IanCommendationsData;